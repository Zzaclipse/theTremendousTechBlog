const { Comment } = require("../models");

const Commentdata = [
  {
    text: "great post from user 2",
    post_id: 1,
    user_id: 2,
    username: "user2",
  },
  {
    text: "great post from user 3",
    post_id: 1,
    user_id: 3,
    username: "user3",
  },
];

const seedComments = () => Comment.bulkCreate(Commentdata);

module.exports = seedComments;
