const { Category } = require("../models");

const Categorydata = [
  {
    category_name: "Breakfast",
  },
  {
    category_name: "Mains",
  },
  {
    category_name: "Sides",
  },
  {
    category_name: "Desserts",
  },
];

const seedCategory = () => Category.bulkCreate(Categorydata);

module.exports = seedCategory;
