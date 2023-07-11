const { sequelize } = require("./index");
const Sequelize = require("sequelize");
// Define a model for your table
const Chair = sequelize.define(
  "Chair",
  {
    RoomId: Sequelize.INTEGER,
  },

  {
    underscored: true,
  }
);

module.exports = Chair;
