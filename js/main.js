fetch('https://phi-lab-server.vercel.app/api/v1/lab/issues')
  .then(res => res.json())
  .then(result => {
    console.log(result);

    const cardsContainer = document.getElementById('cards');
    // make issues available to filters.js
    window.allIssues = result.data;

    const labelClass = (label) => {
      switch (label.toLowerCase()) {
        case 'bug': return 'badge-error';
        case 'help wanted': return 'badge-warning';
        case 'enhancement': return 'badge-success';
        case 'good first issue': return 'badge-info';
        default: return '';
      }
    };

    const createCard = (issue) => {
      const card = document.createElement('div');
      let statusBorderClass = '';
      if (issue.status === 'open') statusBorderClass = 'border-t-4 border-green-500';
      else if (issue.status === 'closed') statusBorderClass = 'border-t-4 border-purple-500';
      else statusBorderClass = 'border-t-4 border-gray-200';

      let priorityBadgeClass = '';
      switch (issue.priority) {
        case 'high': priorityBadgeClass = 'bg-red-100 text-red-800'; break;
        case 'medium': priorityBadgeClass = 'bg-yellow-100 text-yellow-800'; break;
        case 'low': priorityBadgeClass = 'bg-green-100 text-green-800'; break;
        default: priorityBadgeClass = 'bg-gray-100 text-gray-800';
      }

      let statusIconHtml = '';
      if (issue.status === 'open') {
        statusIconHtml = '<span class="inline-block w-2 h-2 rounded-full bg-green-500 mr-2"></span>';
      } else if (issue.status === 'closed') {
        statusIconHtml = '<span class="text-purple-500 mr-2">&#x2713;</span>';
      }

      card.className = `card bg-white shadow rounded-2xl p-6 flex flex-col justify-between ${statusBorderClass}`;
      card.innerHTML = `
        <div class="relative">
            <span class="absolute top-0 right-0 text-xs font-bold uppercase px-2 py-1 ${priorityBadgeClass} rounded-bl-lg">
                ${issue.priority || ''}
            </span>

            <div>
                <h3 class="text-lg font-semibold mb-2">${statusIconHtml}${issue.title}</h3>
                <p class="text-sm text-gray-600 mb-4">${issue.description}</p>
            </div>

            <div class="flex flex-wrap gap-2 mb-4">
                ${issue.labels.map(l => `<span class="badge badge-outline ${labelClass(l)}">${l}</span>`).join('')}
            </div>

            <div class="flex items-center justify-between mt-4">
                <span class="text-sm text-gray-500">#${issue.author}</span>
                <span class="text-sm text-gray-500">
                    ${new Date(issue.createdAt).toLocaleDateString()}
                </span>
            </div>
        </div>
      `;
      cardsContainer.appendChild(card);
    };
    // expose createCard to other modules
    window.createCard = createCard;

    // render all issues without filters
    result.data.forEach(createCard);

    // let filter module attach its listeners if loaded
    if (typeof initializeFilters === 'function') {
      initializeFilters(window.allIssues);
    }

  })
  .catch(error => console.error('Error fetching issues:', error));