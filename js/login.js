// make sure form element exists (id added in HTML).
const form = document.getElementById('loginForm');

if (form) {
  form.addEventListener('submit', (event) => {
      event.preventDefault();
      const username = document.getElementById('username').value;
      const password = document.getElementById('password').value;
      console.log('submitted login', { username, password });

      // always mark user authenticated so index page allows navigation
      localStorage.setItem('isAuthenticated', 'true');
      // navigate using replace so back button doesn't return to login
      window.location.replace('index.html');
  });
} else {
  console.warn('login form not found');
}