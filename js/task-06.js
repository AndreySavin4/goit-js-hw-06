const input = document.querySelector("#validation-input");

input.addEventListener("blur", (event) => {
  if (event.currentTarget.value.length === Number(input.dataset.length)) {
    valid();
  } else {
    invalid();
  }
});
console.log(Number(input.dataset.length));
function valid() {
  input.classList.add("valid");
  input.classList.remove("invalid");
}

function invalid() {
  input.classList.remove("valid");
  input.classList.add("invalid");
}
