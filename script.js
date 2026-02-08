function checkPassword() {
  const correctPassword = "ragul"; // 🔐 change this
  const userPassword = document.getElementById("password").value;
  const error = document.getElementById("error");

  if (userPassword === correctPassword) {
    document.getElementById("login-box").style.display = "none";
    document.getElementById("secret-content").style.display = "block";
  } else {
    error.textContent = "Wrong password 💔 Try again";
  }
}
function createHeart(side) {
  const heart = document.createElement("div");
  heart.classList.add("heart");
  heart.innerHTML = "💖";

  heart.style.left = Math.random() * 40 + "px";
  heart.style.animationDuration = (4 + Math.random() * 4) + "s";
  heart.style.fontSize = (14 + Math.random() * 16) + "px";

  side.appendChild(heart);

  setTimeout(() => {
    heart.remove();
  }, 8000);
}

const leftSide = document.querySelector(".hearts.left");
const rightSide = document.querySelector(".hearts.right");

setInterval(() => createHeart(leftSide), 700);
setInterval(() => createHeart(rightSide), 900);
