let loginPopup;

function openLoginPopup() {
  loginPopup = window.open('login.html', 'Login', 'width=400,height=400');
  loginPopup.focus();
}

function loginUser(username, password) {
  if (username === 'mason' && password === '20091009') {
    return 'Mason';
  } else if (username === 'admin' && password === 'administration') {
    return 'Administrator';
  } else {
    return null;
  }
}

function handleLogin() {
  const username = document.getElementById('username').value;
  const password = document.getElementById('password').value;

  const loggedInUser = loginUser(username, password);
  if (loggedInUser) {
    // Redirect to dashboard.html
    window.location.href = 'dashboard.html';
    // Close the popup window
    if (loginPopup) {
      loginPopup.close();
    }
  } else {
    alert('Invalid credentials. Please try again.');
  }
}
