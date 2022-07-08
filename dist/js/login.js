document.getElementById("submit-button").addEventListener("click", function () {
  const emailInput = document.getElementById("input-email");
  const emailInputValue = emailInput.value;
  emailInput.value = "";
  const passwordInput = document.getElementById("input-password");
  const passwordInputValue = passwordInput.value;
  passwordInput.value = "";
  if (emailInputValue == "pola@bap.com" && passwordInputValue == "bappola") {
    window.location.href = "Banking.html";
  } else {
    console.log("please provide valid info  ");
  }
});
