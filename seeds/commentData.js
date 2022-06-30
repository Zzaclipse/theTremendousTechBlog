const { Comment } = require("../models");

const Commentdata = [
  {
    review: "great",
    recipe_id: 1,
    user_id: 1,
  },
  {
    review: "amazing",
    recipe_id: 1,
    user_id: 2,
  },
  {
    review: "wow",
    recipe_id: 1,
    user_id: 3,
  },
];

const seedComments = () => Comment.bulkCreate(Commentdata);

module.exports = seedComments;
