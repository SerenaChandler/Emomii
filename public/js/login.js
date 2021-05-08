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

// document
//   .querySelector('.signup-form')
//   .addEventListener('submit', signupFormHandler);

const signupFormEl = document.querySelector('.signup-form');
if (signupFormEl) {
  signupFormEl.addEventListener('submit', signupFormHandler);
}

// document.getElementById('signupbutton')
// .addEventListener('submit', signupFormHandler)

const signupbuttonEl = document.getElementById('signupbutton');
if (signupbuttonEl) {
  signupbuttonEl.addEventListener('submit', signupFormHandler)
}


// *** Google login *** //
// Render Google Sign-in button
// const renderButton = () => {console.log('called renderbutton');
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
const onSuccess = (googleUser) => {
  gapi.client.load('oauth2', 'v2', function () {
    const request = gapi.client.oauth2.userinfo.get({
      'userId': 'me'
    });
    request.execute(function (response) {
      saveUserData(response);
    });
  });
}

// Save user data to the database
const saveUserData = async (userData) => {
  const response = await fetch('/api/users/google', {
    method: 'POST',
    body: JSON.stringify({ userData }),
    headers: { 'Content-Type': 'application/json' },
  }).then((response) => {
  if (response.ok) {
    document.location.replace('/dashboard');
  } else {
    alert(response.statusText);
  }
  });
}

// Sign-in failure callback
const onFailure = (error) => {
  alert(error);
}

// Sign out the user
const signOut = async () => {
  const auth2 = gapi.auth2.getAuthInstance();
  auth2.signOut().then(function () {
    const response = fetch('/api/users/logout', {
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
