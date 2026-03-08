// filters.js
// Handles the button toggles, count display and filtering behavior.

function initializeFilters(issues) {
  // cache references
  const cardsContainer = document.getElementById('cards');
  const totalCountEl = document.getElementById('total-count');
  const openCountEl = document.getElementById('open-count');
  const closedCountEl = document.getElementById('closed-count');

  const updateCounts = () => {
    const all = issues.length;
    const open = issues.filter(i => i.status === 'open').length;
    const closed = issues.filter(i => i.status === 'closed').length;

    if (totalCountEl) totalCountEl.textContent = `${all} Issues`;
    if (openCountEl) openCountEl.textContent = `● Open: ${open}`;
    if (closedCountEl) closedCountEl.textContent = `● Closed: ${closed}`;
  };

  const clearCards = () => { if (cardsContainer) cardsContainer.innerHTML = ''; };

  const highlightButton = (id) => {
    ['filter-all','filter-open','filter-closed'].forEach(btnId => {
      const btn = document.getElementById(btnId);
      if (!btn) return;
      if (btnId === id) {
        btn.classList.add('btn-primary');
        btn.classList.remove('btn-outline');
      } else {
        btn.classList.remove('btn-primary');
        btn.classList.add('btn-outline');
      }
    });
  };

  const renderCards = (filter) => {
    clearCards();
    let filtered = issues;
    if (filter === 'open') filtered = issues.filter(i => i.status === 'open');
    if (filter === 'closed') filtered = issues.filter(i => i.status === 'closed');
    filtered.forEach(i => {
      // call same createCard logic from main (assumes global function exist or duplicate?)
      if (typeof window.createCard === 'function') {
        window.createCard(i);
      }
    });
    highlightButton(`filter-${filter}`);
    updateCounts();
    if (totalCountEl) totalCountEl.textContent = `${filtered.length} Issues`;
  };

  // wire buttons
  const btnAll = document.getElementById('filter-all');
  const btnOpen = document.getElementById('filter-open');
  const btnClosed = document.getElementById('filter-closed');
  if (btnAll) btnAll.addEventListener('click', () => renderCards('all'));
  if (btnOpen) btnOpen.addEventListener('click', () => renderCards('open'));
  if (btnClosed) btnClosed.addEventListener('click', () => renderCards('closed'));

  // initialize counts and button state
  updateCounts();
  highlightButton('filter-all');
}

// Expose createCard so filters.js can call it without duplication
// this assumes main.js defines window.createCard; we should ensure that in main.js
