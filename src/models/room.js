const { sequelize } = require("./index");
const Sequelize = require("sequelize");
// Define a model for your table
const Room = sequelize.define(
  "room",
  {
    name: Sequelize.STRING,
    number_seat: Sequelize.STRING,
    image: Sequelize.STRING,
  },

  {
    timestamps: true,
    underscored: true,
  }
);

module.exports = Room;
