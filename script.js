let loginPopup;

function openLoginPopup() {
  loginPopup = window.open('login.html', 'Login', 'width=400,height=400');
  loginPopup.focus();
}

// This function will be called by login.html after successful login
function onLoginSuccess(username) {
  // Redirect to dashboard.html
  window.location.href = 'dashboard.html';
  
  // Close the popup window
  if (loginPopup) {
    loginPopup.close();
  }
}
