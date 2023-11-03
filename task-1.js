const list = document.querySelector("#categories");
  
const items = list.querySelectorAll(".item");

console.log(`У списку ${items.length} категорії.`);

items.forEach((category) => {
  const categoryName = category.querySelector("h2").textContent;
  const categoryItem = category.querySelectorAll("li").length;
  
  console.log(`Категорія: ${categoryName}`);
  console.log(`Кількість елементів: ${categoryItem}`);
});