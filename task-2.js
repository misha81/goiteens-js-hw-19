const ingredients = [
    'Картопля',
    'Гриби',
    'Часник',
    'Помідори',
    'Зелень',
    'Приправи',
  ];

  const ulElement = document.querySelector("#ingredients");

ingredients.forEach((ingredient) => {
    const liElement = document.createElement("li");
    liElement.textContent = ingredient;
    ulElement.appendChild(liElement);
});