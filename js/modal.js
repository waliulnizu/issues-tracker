// modal.js
// Handles opening a modal when a card is clicked and populating it with issue data.

function initializeModal(issues) {
  const cardsContainer = document.getElementById('cards');
  const modal = document.getElementById('issueModal');
  const titleEl = document.getElementById('modalTitle');
  const descEl = document.getElementById('modalDescription');
  const labelsEl = document.getElementById('modalLabels');
  const closeBtn = document.getElementById('closeModalBtn');

  const openModal = (issue) => {
    console.log('openModal called', issue);
    if (!issue) {
      console.warn('no issue to open');
      return;
    }
    if (titleEl) titleEl.textContent = issue.title;
    if (descEl) descEl.textContent = issue.description;
    if (labelsEl) {
      labelsEl.innerHTML = '';
      (issue.labels || []).forEach(l => {
        const span = document.createElement('span');
        span.className = 'badge badge-outline';
        span.textContent = l;
        labelsEl.appendChild(span);
      });
    }
    if (modal) modal.classList.add('modal-open');
  };

  const closeModal = () => {
    if (modal) modal.classList.remove('modal-open');
  };

  if (cardsContainer) {
    cardsContainer.addEventListener('click', (e) => {
      console.log('modal click handler fired', e.target);
      const card = e.target.closest('.card');
      console.log('closest card', card);
      if (!card) return;
      const id = card.dataset.issueId;
      console.log('found issue id', id);
      if (!id) return;
      const issue = issues.find(i => String(i.id) === String(id));
      console.log('matched issue', issue);
      openModal(issue);
    });
  }

  if (closeBtn) {
    closeBtn.addEventListener('click', closeModal);
  }
}
