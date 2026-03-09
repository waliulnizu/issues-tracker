// spinner.js
// Simple utility to show/hide a loading spinner element

function showSpinner() {
  const s = document.getElementById('spinner');
  if (s) s.classList.remove('hidden');
}

function hideSpinner() {
  const s = document.getElementById('spinner');
  if (s) s.classList.add('hidden');
}
