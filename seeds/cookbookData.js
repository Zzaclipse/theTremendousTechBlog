const { Cookbook } = require("../models");

const cookbookdata = [
  {
    cookbook_name: "cookbook1",
    description: "description of cookbook1",
  },
  {
    cookbook_name: "cookbook2",
    description: "description of cookbook2",
  },
  {
    cookbook_name: "cookbook3",
    description: "description of cookbook3",
  },
];

const seedCookbooks = () => Cookbook.bulkCreate(cookbookdata);

module.exports = seedCookbooks;
