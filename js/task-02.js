const ingredients = [
  'Картошка',
  'Грибы',
  'Чеснок',
  'Помидоры',
  'Зелень',
  'Приправы',
];

const ingredientsRef = document.querySelector("#ingredients");

const elements = ingredients.map(ingredient => {
  const ingredientRef = document.createElement("li");
  ingredientRef.textContent = ingredient;
  return ingredientRef;
});

ingredientsRef.append(...elements);

console.log(ingredientsRef);