const Booking = require("../models/booking");

const findAllBooking = async () => {
  try {
    const booking = await Booking.findAll();

    if (booking) {
      console.log("User found:", booking);
    } else {
      console.log("User not found");
    }
    return booking;
  } catch (error) {
    console.error("Error occurred while finding booking:", error);
  }
};

const createBooking = (booking) => Booking.create(booking);

module.exports = {
  findAllBooking,
  createBooking,
};
