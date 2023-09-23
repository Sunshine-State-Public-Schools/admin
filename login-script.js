function handleLogin() {
  const username = document.getElementById('username').value;
  const password = document.getElementById('password').value;

  if ((username === 'mason' && password === '20091009') ||
      (username === 'admin' && password === 'administration')) {
    // Notify the opener (main window) about successful login
    window.opener.onLoginSuccess(username);
  } else {
    alert('Invalid credentials. Please try again.');
  }
}
