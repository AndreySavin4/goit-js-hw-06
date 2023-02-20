let counterValue = 0;

const decrementEl = document.querySelector('button[data-action="decrement"]');

const incrementEl = document.querySelector('button[data-action="increment"]');

const valueEl = document.getElementById("value");

const onMinusElement = (evt) => {
  counterValue -= 1;
  valueEl.textContent = counterValue;
};

const onPlusElement = (evt) => {
  counterValue += 1;
  valueEl.textContent = counterValue;
};

incrementEl.addEventListener("click", onPlusElement);

decrementEl.addEventListener("click", onMinusElement);
