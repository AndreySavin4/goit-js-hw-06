const nameInputEl = document.querySelector("#name-input");

const nameOutputEl = document.querySelector("#name-output");

nameInputEl.addEventListener("input", (event) => {
  console.log(event.target.value.length);
  if (event.target.value.length === 0) {
    nameOutputEl.textContent = "Anonymous";
  } else {
    nameOutputEl.textContent = event.currentTarget.value;
  }
});
