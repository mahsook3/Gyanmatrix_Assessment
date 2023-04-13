const loginBtn = document.getElementById("login-btn");
const usernameInput = document.getElementById("username");
const passwordInput = document.getElementById("password");
const errorMsg = document.getElementById("error-msg");

loginBtn.addEventListener("click", (event) => {
  event.preventDefault();

  // fetch data from API
  fetch("api.json")
    .then((response) => response.json())
    .then((data) => {
      const user = data.results[0].login.username;
      const pass = data.results[0].login.password;

      // check if username and password match
      if (usernameInput.value === user && passwordInput.value === pass) {
        window.location.href = "staff.html"; // redirect to staff page
      } else {
        errorMsg.innerText = "Invalid username or password";
      }
    })
    .catch((error) => {
      console.log(error);
    });
});