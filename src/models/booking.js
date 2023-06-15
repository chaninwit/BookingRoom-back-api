const { sequelize } = require("./index");
const Sequelize = require("sequelize");
// Define a model for your table
const Booking = sequelize.define(
  "Booking",
  {
    status_booking: Sequelize.INTEGER,
  },
  {
    timestamps: true,
    underscored: true,
  }
);

module.exports = Booking;
