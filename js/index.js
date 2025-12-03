//RECIPES
const recipes = [
  {
    title: "French Onion Soup",
    desc: "Rich beef broth with caramelized onions and melted cheese.",
    img: "imgs/Meal1.png",
    ingredients: [
      "4 large onions, thinly sliced",
      "4 tablespoons butter",
      "1 liter beef broth",
      "1/2 cup white wine",
      "2 bay leaves",
      "Salt and black pepper, to taste",
    ],
    instructions: [
      "Melt the butter in a large pot and slowly caramelize the onions until deep golden.",
      "Add the white wine and cook until reduced by about half.",
      "Pour in the beef broth, add bay leaves and simmer gently for 20 minutes.",
      "Taste and season with salt and black pepper before serving.",
    ],
    nutrition:
      "Approx. 260 kcal per serving with moderate fat and carbohydrates.",
    tips: "Keep the heat low while caramelizing the onions to avoid burning and develop sweetness.",
    prep: "15 min",
    cook: "30 min",
    servings: "4 people",
  },
  {
    title: "Garlic Shrimp Pasta",
    desc: "Juicy shrimp cooked in a garlic white wine butter sauce with linguine.",
    img: "imgs/Meal2.png",
    ingredients: [
      "400 g large shrimp, peeled and deveined",
      "300 g linguine pasta",
      "6 cloves garlic, minced",
      "1/2 cup dry white wine",
      "4 tablespoons butter",
      "2 tablespoons olive oil",
      "Fresh parsley, chopped",
      "Salt, black pepper, and chili flakes",
    ],
    instructions: [
      "Cook linguine in salted boiling water until al dente, then drain.",
      "Sauté garlic in olive oil and butter until fragrant.",
      "Add the shrimp, season and cook until just pink, then deglaze with white wine.",
      "Toss the pasta in the pan with the sauce, parsley and chili flakes.",
    ],
    nutrition:
      "Approx. 520 kcal per serving, high in protein and carbohydrates.",
    tips: "Remove the shrimp from the heat as soon as they turn opaque to keep them tender.",
    prep: "10 min",
    cook: "15 min",
    servings: "2 people",
  },
  {
    title: "Creamy Tomato Basil Soup",
    desc: "Smooth tomato soup finished with cream and fresh basil leaves.",
    img: "imgs/Meal3.png",
    ingredients: [
      "2 tablespoons olive oil",
      "1 onion, finely chopped",
      "3 cloves garlic, minced",
      "800 g crushed tomatoes",
      "2 cups vegetable broth",
      "1/2 cup heavy cream",
      "Fresh basil leaves",
      "Salt and sugar, to taste",
    ],
    instructions: [
      "Sauté onion and garlic in olive oil until soft and translucent.",
      "Add crushed tomatoes and vegetable broth, then simmer for about 15 minutes.",
      "Blend the soup until smooth, return to the pot and stir in the cream.",
      "Finish with torn basil leaves and adjust seasoning with salt and a pinch of sugar.",
    ],
    nutrition: "Approx. 300 kcal per serving, higher in fat due to the cream.",
    tips: "Add the cream off the heat and do not let the soup boil hard after adding it.",
    prep: "10 min",
    cook: "25 min",
    servings: "3–4 people",
  },
  {
    title: "Chicken Caesar Salad",
    desc: "Grilled chicken with crisp romaine, parmesan and creamy Caesar dressing.",
    img: "imgs/Meal4.png",
    ingredients: [
      "2 chicken breasts, grilled and sliced",
      "1 large romaine lettuce, chopped",
      "1 cup croutons",
      "1/3 cup grated parmesan cheese",
      "1/3 cup Caesar dressing",
      "Fresh lemon wedges",
      "Salt and black pepper",
    ],
    instructions: [
      "Season chicken breasts and grill or pan‑sear until cooked through, then slice.",
      "Toss chopped romaine with Caesar dressing in a large bowl.",
      "Top with sliced chicken, croutons and grated parmesan.",
      "Finish with freshly ground black pepper and a squeeze of lemon juice.",
    ],
    nutrition:
      "Approx. 450 kcal per serving, high in protein with moderate fat.",
    tips: "Let the grilled chicken rest a few minutes before slicing so it stays juicy.",
    prep: "15 min",
    cook: "10 min",
    servings: "2 people",
  },
];

const titleEl = document.getElementById("recipe-title");
const descEl = document.getElementById("recipe-desc");
const imgEl = document.getElementById("recipe-image");
const instructionsEl = document.getElementById("instructions-text");
const nutritionEl = document.getElementById("nutrition-text");
const tipsEl = document.getElementById("tips-text");
const ingredientsList = document.getElementById("ingredients-list");
const prepValue = document.getElementById("prep-value");
const cookValue = document.getElementById("cook-value");
const servingsValue = document.getElementById("servings-value");
const btnRandom = document.getElementById("btn-random");

function renderRecipe(recipe) {
  titleEl.textContent = recipe.title;
  descEl.textContent = recipe.desc;
  imgEl.src = recipe.img;
  imgEl.alt = recipe.title;

  ingredientsList.innerHTML = "";
  recipe.ingredients.forEach((item) => {
    const li = document.createElement("li");
    li.className = "list-group-item border-0 ps-0";
    li.textContent = item;
    ingredientsList.appendChild(li);
  });

  // Instructions: نحول الـ array لسطر تحت سطر
  instructionsEl.innerHTML = "";
  recipe.instructions.forEach((step, index) => {
    const p = document.createElement("p");
    p.className = "mb-1";
    p.textContent = `${index + 1}. ${step}`;
    instructionsEl.appendChild(p);
  });

  nutritionEl.textContent = recipe.nutrition;
  tipsEl.textContent = recipe.tips;

  prepValue.textContent = recipe.prep;
  cookValue.textContent = recipe.cook;
  servingsValue.textContent = recipe.servings;
}

function getRandomRecipe() {
  let index;
  const currentTitle = titleEl.textContent.trim();

  do {
    index = Math.floor(Math.random() * recipes.length);
  } while (recipes[index].title === currentTitle);

  return recipes[index];
}

btnRandom.addEventListener("click", function () {
  const newRecipe = getRandomRecipe();
  renderRecipe(newRecipe);
});

//
renderRecipe(recipes[0]);
