const { sequelize } = require("./index");
const Sequelize = require("sequelize");
// Define a model for your table
const Meeting = sequelize.define(
  "Meeting",
  {
    name: {
      type: Sequelize.STRING,
      validate: {
        notEmpty: true,
      },
    },
    details: {
      type: Sequelize.STRING,
      validate: {
        notEmpty: true,
      },
    },
    roomNumber: {
      type: Sequelize.STRING,
      validate: {
        notEmpty: true,
      },
    },

    time: {
      type: Sequelize.STRING,
      validate: {
        notEmpty: true,
      },
    },
    dateStart: {
      type: Sequelize.STRING,
      validate: {
        notEmpty: true,
      },
    },
    dateEnd: {
      type: Sequelize.STRING,
      validate: {
        notEmpty: true,
      },
    },

    RoomId: Sequelize.INTEGER,
  },
  {
    underscored: true,
    paranoid: true,
  }
);

module.exports = Meeting;
