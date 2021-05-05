let greeting = document.getElementById("greeting");
let signup = document.getElementById("signup");
let formbox = document.getElementById("formbox");
var today = new Date();
var curHr = today.getHours();

if (curHr < 12) {
    function goodmorning() {
        document.getElementById("greeting").innerHTML = "Good Morning";
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
      <button class="btn btn-primary" type="submit">signup</button>
    </div>
  </form>`;
  };