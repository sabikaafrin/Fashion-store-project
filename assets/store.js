const users = [{ email: "sabika", password: "12345" }];

function togglePasswordVisibility() {
  const passwordField = document.getElementById("password");
  const passwordFieldType = passwordField.getAttribute("type");
  passwordField.setAttribute(
    "type",
    passwordFieldType === "password" ? "text" : "password"
  );
}

document.querySelector("form").addEventListener("submit", function (event) {
  event.preventDefault();

  const usernameInput = document.getElementById("username").value;
  const passwordInput = document.getElementById("password").value;
  let userFound = false;

  for (const user of users) {
    if (usernameInput === user.email && passwordInput === user.password) {
      alert("Login successful! Welcome to Fashion Glow By Sabika Afrin");
      userFound = true;
      break;
    }
  }

  if (!userFound) {
    alert("Invalid username or password. Please try again.");
  }
});
