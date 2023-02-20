const inputEl = document.querySelector("#font-size-control");

inputEl.addEventListener("input", (e) => {
  const spanEl = document.querySelector("#text");
  const fontSize = e.currentTarget.value;

  e.currentTarget.value;

  spanEl.style.fontSize = `${fontSize}px`;
});
