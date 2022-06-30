const router = require("express").Router();
const {
  User,
  Cookbook,
  Recipe,
  Comment,
  UserCookbook,
  Category,
} = require("../models");
// Import the custom middleware
const withAuth = require("../utils/auth");

router.get("/cookbooks", async (req, res) => {
  try {
    const cbData = await Cookbook.findAll({
      // include: [{ model: Category }, { model: Comment }],
    });
    console.log("cbdata ", cbData);
    const books = cbData.map((r) => r.get({ plain: true }));
    console.log(books);
    res.render("homepage-cb", { books });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

router.get("/", async (req, res) => {
  try {
    res.render("homepage");
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

router.get("/recipes", async (req, res) => {
  try {
    const recipeData = await Recipe.findAll({
      // include: [{ model: Category }, { model: Comment }],
    });

    const recipes = recipeData.map((r) => r.get({ plain: true }));
    console.log(recipes);
    res.render("recipes", { recipes });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

// get recipe by category
router.get("/categories/:id", async (req, res) => {
  try {
    const recipeData = await Recipe.findAll({
      where: {
        category_id: req.params.id,
      },
    });
    if (!recipeData) {
      res.status(404).json({ message: "No category found with that id!" });
      return;
    }

    res.status(200).json(recipeData);
  } catch (err) {
    res.status(500).json(err);
  }
});

// get recipe by id
router.get("/recipes/:id", async (req, res) => {
  try {
    const recipeData = await Recipe.findByPk(req.params.id, {});
    if (!recipeData) {
      res.status(404).json({ message: "No recipe found with that id!" });
      return;
    }
    const recipe = recipeData.get({ plain: true });
    console.log(recipe);
    res.render("singlerecipe", { recipe });
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get("/login", (req, res) => {
  if (req.session.loggedIn) {
    res.redirect("/");
    return;
  }

  res.render("login");
});

module.exports = router;
