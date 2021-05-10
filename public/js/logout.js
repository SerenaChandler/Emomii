// const logout = async () => {
//   const response = await fetch('/api/users/logout', {
//     method: 'POST',
//     headers: { 'Content-Type': 'application/json' },
//   });

//   if (response.ok) {
//     document.location.replace('/');
//   } else {
//     alert(response.statusText);
//   }
// };


// const logout = async () => {
//   const response = fetch('/api/users/logout', {
//     method: 'POST',
//     headers: { 'Content-Type': 'application/json' },
//   }).then((response) => {
//   if (response.ok) {
//     document.location.replace('/');
//   } else {
//     alert(response.statusText);
//   }
//   });
// }

// Sign out the user
const logout = async () => {
  const auth2 = gapi.auth2.getAuthInstance();
  auth2.signOut().then(function () {
    const response = fetch('/api/users/logout', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
    });
    if (response.ok) {
      document.location.replace('/');
    } else {
      alert(response.statusText);
    }
  });
  auth2.disconnect();
}

document.querySelector('#logout').addEventListener('click', logout);
