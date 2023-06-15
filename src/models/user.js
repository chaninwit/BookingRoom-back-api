const { sequelize } = require("./index");
const Sequelize = require("sequelize");
// Define a model for your table
const User = sequelize.define(
  "User",
  {
    Fullname: {
      type: Sequelize.STRING,
      allowNull: false,
      validate: {
        notEmpty: true,
      },
    },
    email: {
      type: Sequelize.STRING,
      unique: true,
      validate: {
        isEmail: true,
      },
    },
    password: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    profileImage: Sequelize.STRING,
  },
  {
    timestamps: true,
  }
);

module.exports = User;
