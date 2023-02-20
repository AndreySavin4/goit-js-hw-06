const allCategoriesEl = document.querySelectorAll(".item");

console.log(`Number of categories: ${allCategoriesEl.length}`);

const categoriesListEl = document.querySelector("ul#categories");

const categoriesItemEl = categoriesListEl.querySelectorAll("li.item");

categoriesItemEl.forEach((item) => {
  const titleEl = item.querySelector("h2").textContent;

  const elementLength = item.querySelectorAll("li").length;

  console.log(`Category: ${titleEl}`);
  console.log(`Elements: ${elementLength}`);
});
