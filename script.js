function checkPassword() {
  const correctPassword = "raguldivya16252007"; // 🔐 change this
  const userPassword = document.getElementById("password").value;
  const error = document.getElementById("error");

  if (userPassword === correctPassword) {
    document.getElementById("login-box").style.display = "none";
    document.getElementById("secret-content").style.display = "block";
  } else {
    error.textContent = "Thappa Podra da Loosu 💔 Try again";
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
const btn = document.getElementById("loveBtn");
const popup = document.getElementById("heartPopup");

btn.addEventListener("click", () => {
  popup.style.display = "flex";
});

popup.addEventListener("click", () => {
  popup.style.display = "none";
});
