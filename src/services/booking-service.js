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

const getBookingById = (user) =>
  Booking.findOne({
    where: { id: user },
  });

const updateBooking = (data) =>
  Booking.update({ ChairId: data.ChairId }, { where: { id: data.id } });
//set ChairId = ChairId.ChairId

module.exports = {
  findAllBooking,
  createBooking,
  getBookingById,
  updateBooking,
};
