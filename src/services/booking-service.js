const Booking = require("../models/booking");

const findAllBooking = async () => {
  try {
    const booking = await Booking.findAll({
      where: { deleted_at: null },
    });

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
    where: { MeetingId: user, deleted_at: null },
  });
const getBookingByMeetingId = (booking) =>
  Booking.findOne({
    where: { MeetingId: booking, deleted_at: null },
  });

const updateBooking = (data) =>
  Booking.update({ ChairId: data.ChairId }, { where: { id: data.id } });
//set ChairId = ChairId.ChairId

const deleteBookingID = (booking) =>
  Booking.destroy({ where: { MeetingId: booking } });

module.exports = {
  findAllBooking,
  createBooking,
  getBookingById,
  updateBooking,
  deleteBookingID,
  getBookingByMeetingId,
};
