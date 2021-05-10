let greeting = document.getElementById("greeting");
let signup = document.getElementById("signup");
let formbox = document.getElementById("formbox");
var today = new Date();
var curHr = today.getHours();

if (curHr < 12) {
    function goodmorning() {
        const grettingEl = document.getElementById("greeting");
        if (grettingEl) {
          grettingEl.innerHTML = "Good Morning";
        }
      }

      goodmorning()
} else if (curHr < 18) {
    function goodafternoon() {
        document.getElementById("greeting").innerHTML = "Good Afternoon";
      }
      goodafternoon()
} else {
    function goodevening() {
        document.getElementById("greeting").innerHTML = "Good Evening";
      }
      goodevening()
};


function getStylesheet() {
  var currentTime = new Date().getHours();
  if (0 <= currentTime&&currentTime < 5) {
   document.write("<link rel='stylesheet' href='./css/night.css' type='text/css'>");
  }
  if (5 <= currentTime&&currentTime < 11) {
   document.write("<link rel='stylesheet' href='./css/jass.css' type='text/css'>");
  }
  if (11 <= currentTime&&currentTime < 16) {
   document.write("<link rel='stylesheet' href='./css/day.css' type='text/css'>");
  }
  if (16 <= currentTime&&currentTime < 22) {
   document.write("<link rel='stylesheet' href='./css/jass.css' type='text/css'>");
  }
  if (22 <= currentTime&&currentTime <= 24) {
   document.write("<link rel='stylesheet' href='./css/night.css' type='text/css'>");
  }
}

getStylesheet();


function renderSignUp(){
    formbox.innerHTML = `<p class="center"><strong>Create </strong>your new account</p><form class="form signup-form">
    <div class="form-group">
      <label for="name-signup">name:</label>
      <input class="form-input" type="text" id="name-signup" />
    </div>
    <div class="form-group">
      <label for="email-signup">email:</label>
      <input class="form-input" type="text" id="email-signup" />
    </div>
    <div class="form-group">
      <label for="password-signup">password:</label>
      <input class="form-input" type="password" id="password-signup" />
    </div>
    <div class="form-group">
      <button class="btn btn-primary" type="submit" id="signupbutton" onclick="event.preventDefault(),signupFormHandler()">signup now</button>
    </div>
  </form>`;
  };
