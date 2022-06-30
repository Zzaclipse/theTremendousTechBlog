const { User } = require("../models");

const userdata = [
  {
    username: "user1",
    email: "user1@email.com",
    password: "password",
  },
  {
    username: "user2",
    email: "user2@email.com",
    password: "password",
  },
  {
    username: "user3",
    email: "user3@email.com",
    password: "password",
  },
];

const seedUser = () => User.bulkCreate(userdata);

module.exports = seedUser;
