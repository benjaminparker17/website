document.addEventListener("DOMContentLoaded", function () {

  const correctPassword = "divi";

  const checkBtn = document.getElementById("checkBtn");
  const passwordInput = document.getElementById("password");
  const error = document.getElementById("error");
  const loginBox = document.querySelector(".lock-wrapper");
  const secretContent = document.getElementById("secret-content");
  const loveBtn = document.getElementById("loveBtn");
  const popup = document.getElementById("heartPopup");

  // DEBUG CHECK
  console.log("JS loaded");

  checkBtn.addEventListener("click", function () {
    console.log("Button clicked");

    if (passwordInput.value === correctPassword) {
      loginBox.style.display = "none";
      secretContent.style.display = "block";
      error.textContent = "";
    } else {
      error.textContent = "Wrong password 😝";
    }
  });

  loveBtn.addEventListener("click", () => {
    popup.style.display = "flex";
  });

  popup.addEventListener("click", () => {
    popup.style.display = "none";
  });

});
