const { Post } = require("../models");

const postData = [
  {
    title: "post 1",
    body: "post 1 body text",
    user_id: 1,
    username: "user1",
  },
  {
    title: "post 2",
    body: "post 2 body text",
    user_id: 2,
    username: "user2",
  },
  {
    title: "post 3",
    body: "post 3 body text",
    user_id: 3,
    username: "user3",
  },
];

const seedPosts = () => Post.bulkCreate(postData);

module.exports = seedPosts;
