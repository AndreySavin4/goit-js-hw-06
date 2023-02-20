const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

const categoriesEl = document.querySelector("ul#ingredients");

const resultArray = ingredients.map((item) => {
  const newItemEl = document.createElement("li");

  newItemEl.classList.add("item");

  newItemEl.textContent = item;

  return newItemEl;
});

categoriesEl.append(...resultArray);

console.log(categoriesEl);
