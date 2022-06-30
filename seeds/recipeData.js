const { Recipe } = require("../models");

const recipedata = [
  {
    recipe_name: "Recipe1 cb1",
    description: "description of Recipe1",
    ingredients: "ingredient 1, ingredient 2, ingredient 3",
    img_name: "placeholder",
    category_id: 1,
    cookbook_id: 1,
  },
  {
    recipe_name: "Recipe2 cb1",
    description: "description of Recipe2",
    ingredients: "ingredient 1, ingredient 2, ingredient 3",
    img_name: "placeholder",
    category_id: 2,
    cookbook_id: 1,
  },
  {
    recipe_name: "Recipe3 cb1",
    description: "description of Recipe3",
    ingredients: "ingredient 1, ingredient 2, ingredient 3",
    img_name: "placeholder",
    category_id: 3,
    cookbook_id: 1,
  },
  {
    recipe_name: "Recipe1 cb2",
    description: "description of Recipe3",
    ingredients: "ingredient 1, ingredient 2, ingredient 3",
    img_name: "placeholder",
    category_id: 1,
    cookbook_id: 2,
  },
  {
    recipe_name: "Recipe2 cb2",
    description: "description of Recipe3",
    ingredients: "ingredient 1, ingredient 2, ingredient 3",
    img_name: "placeholder",
    category_id: 2,
    cookbook_id: 2,
  },
  {
    recipe_name: "Recipe3 cb2",
    description: "description of Recipe3",
    ingredients: "ingredient 1, ingredient 2, ingredient 3",
    img_name: "placeholder",
    category_id: 3,
    cookbook_id: 2,
  },
  {
    recipe_name: "Recipe1 cb3",
    description: "description of Recipe3",
    ingredients: "ingredient 1, ingredient 2, ingredient 3",
    img_name: "placeholder",
    category_id: 1,
    cookbook_id: 3,
  },
  {
    recipe_name: "Recipe2 cb3",
    description: "description of Recipe3",
    ingredients: "ingredient 1, ingredient 2, ingredient 3",
    img_name: "placeholder",
    category_id: 2,
    cookbook_id: 3,
  },
  {
    recipe_name: "Recipe3 cb3",
    description: "description of Recipe3",
    ingredients: "ingredient 1, ingredient 2, ingredient 3",
    img_name: "placeholder",
    category_id: 3,
    cookbook_id: 3,
  },
];

const seedRecipes = () => Recipe.bulkCreate(recipedata);

module.exports = seedRecipes;
