const Sequelize = require("sequelize");
const { sequelize } = require("./index");

const Booking = sequelize.define(
  "Booking",
  {
    status_booking: Sequelize.INTEGER,
    UserId: Sequelize.INTEGER,
    MeetingId: Sequelize.INTEGER,
    ChairId: Sequelize.STRING,
  },
  {
    timestamps: true,
    underscored: true,
  }
);

module.exports = Booking;
