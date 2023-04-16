const loginBtn = document.getElementById("login-btn");
const usernameInput = document.getElementById("username");
const passwordInput = document.getElementById("password");
const errorMsg = document.getElementById("error-msg");

loginBtn.addEventListener("click", (event) => {
  event.preventDefault();

  fetch("api.json")
    .then((response) => response.json())
    .then((data) => {
      const user = data.results[0].login.username;
      const pass = data.results[0].login.password;
      if (usernameInput.value === user && passwordInput.value === pass) {
        window.location.href = "staff.html"; 
      } else {
        errorMsg.innerText = "Invalid Credentials";
      }
    })
    .catch((error) => {
      console.log(error);
    });
});