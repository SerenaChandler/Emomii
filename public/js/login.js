const loginFormHandler = async (event) => {
  event.preventDefault();

  const email = document.querySelector('#email-login').value.trim();
  const password = document.querySelector('#password-login').value.trim();

  if (email && password) {
    const response = await fetch('/api/users/login', {
      method: 'POST',
      body: JSON.stringify({ email, password }),
      headers: { 'Content-Type': 'application/json' },
    });

    if (response.ok) {
      document.location.replace('/dashboard');
    } else {
      alert(response.statusText);
    }
  }
};

const signupFormHandler = async (event) => {
console.log("this is a function")
  const name = document.querySelector('#name-signup').value.trim();
  const email = document.querySelector('#email-signup').value.trim();
  const password = document.querySelector('#password-signup').value.trim();

  if (name && email && password) {
    const response = await fetch('/api/users', {
      method: 'POST',
      body: JSON.stringify({ name, email, password }),
      headers: { 'Content-Type': 'application/json' },
    });

    if (response.ok) {
      document.location.replace('/dashboard');
    } else {
      alert(response.statusText);
    }
  }
};

document
  .querySelector('.login-form')
  .addEventListener('submit', loginFormHandler);

document
  .querySelector('.signup-form')
  .addEventListener('submit', signupFormHandler);

document.getElementById('signupbutton')
.addEventListener('submit', signupFormHandler)


// *** Google login *** //
// Render Google Sign-in button
function renderButton() {
  gapi.signin2.render('gSignIn', {
    'scope': 'profile email',
    'width': 240,
    'height': 50,
    'longtitle': true,
    'theme': 'dark',
    'onsuccess': onSuccess,
    'onfailure': onFailure
  });
}

// Sign-in success callback
function onSuccess(googleUser) {
  gapi.client.load('oauth2', 'v2', function () {
    var request = gapi.client.oauth2.userinfo.get({
      'userId': 'me'
    });
    request.execute(function (response) {
      saveUserData(response);
    });
  });
}

// Save user data to the database
function saveUserData(userData){
  console.log('userData',userData);
  const response = await fetch('/api/users/google', {
    method: 'POST',
    body: { oauth_provider:'google', userData: JSON.stringify(userData) },
    headers: { 'Content-Type': 'application/json' },
  });
  if (response.ok) {
    document.location.replace('/dashboard');
  } else {
    alert(response.statusText);
  }
}

// Sign-in failure callback
function onFailure(error) {
  alert(error);
}

// Sign out the user
function signOut() {
  var auth2 = gapi.auth2.getAuthInstance();
  auth2.signOut().then(function () {
    const response = await fetch('/api/users/logout', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
    });
    if (response.ok) {
      document.location.replace('/homepage');
    } else {
      alert(response.statusText);
    }
  });
  auth2.disconnect();
}
