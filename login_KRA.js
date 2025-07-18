function validateLogin() {
  const username = document.getElementById("username").value.trim();
  const password = document.getElementById("password").value.trim();

  if (username === "" || password === "") {
    alert("Please enter both username and password.");
    return false; // stops form
  }

  alert("Login successful!");
  window.location.href = "final_KRA.html";
  return false; // prevent default form
}
