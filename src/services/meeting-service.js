const Meeting = require("../models/meeting");
const Room = require("../models/room");
const User = require("../models/user");

const findAllMeeting = async () => {
  try {
    const meeting = await Meeting.findAll();

    if (meeting) {
      console.log("User found:", meeting);
    } else {
      console.log("User not found");
    }
    return meeting;
  } catch (error) {
    console.error("Error occurred while finding meeting:", error);
  }
};

const createMeeting = (meeting) => Meeting.create(meeting);

const deleteMeeting = (meeting) => Meeting.destroy(meeting);

const findCardById = () =>
  Meeting.findOne({
    where: { id: Meeting },
    include: {
      Room: id,
    },
  });

const findCard = (meeting) => Meeting.findAll();

module.exports = {
  findAllMeeting,
  createMeeting,
  findCardById,
  findCard,
};
