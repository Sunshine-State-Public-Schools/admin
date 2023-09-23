function login() {
  const netlifyIdentity = window.netlifyIdentity;

  if (netlifyIdentity && !netlifyIdentity.currentUser()) {
    netlifyIdentity.open();
  } else {
    alert('You are already logged in.');
  }
}

window.netlifyIdentity.on('login', () => {
  // Update the UI when the user is logged in
  document.getElementById('login-container').style.display = 'none';
  document.getElementById('dashboard-container').style.display = 'block';

  // Update the username display in the dashboard
  const user = netlifyIdentity.currentUser();
  document.getElementById('username-display').innerText = user ? user.user_metadata.full_name : 'Unknown User';
});
