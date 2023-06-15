const Meeting = require("../models/meeting");

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

module.exports = {
  findAllMeeting,
  createMeeting,
};
