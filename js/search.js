// search.js
// Implements the search input behaviour: filters cards based on query and updates view.

function initializeSearch(issues) {
  const searchInput = document.getElementById('searchInput');
  const searchButton = document.querySelector('button.btn-primary'); // assumes one primary btn for search
  const cardsContainer = document.getElementById('cards');

  const performSearch = () => {
    showSpinner();
    const q = searchInput.value.trim().toLowerCase();
    cardsContainer.innerHTML = '';
    if (!q) {
      issues.forEach(i => window.createCard(i));
      hideSpinner();
      return;
    }
    const matches = issues.filter(i => {
      return i.title.toLowerCase().includes(q) ||
             i.description.toLowerCase().includes(q) ||
             (i.labels && i.labels.some(l => l.toLowerCase().includes(q)));
    });
    matches.forEach(i => window.createCard(i));
    hideSpinner();
  };

  if (searchButton) {
    searchButton.addEventListener('click', performSearch);
  }
  if (searchInput) {
    searchInput.addEventListener('keyup', (e) => {
      if (e.key === 'Enter') performSearch();
    });
  }
}
