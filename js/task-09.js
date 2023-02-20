function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const buttonRel = document.querySelector(".change-color");

const spanColor = document.querySelector(".color");

buttonRel.addEventListener("click", (e) => {
  document.body.style.backgroundColor = getRandomHexColor();
  spanColor.textContent = document.body.style.backgroundColor;
});
