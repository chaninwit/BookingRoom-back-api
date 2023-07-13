const { where } = require("sequelize");
const Meeting = require("../models/meeting");
const Room = require("../models/room");
const User = require("../models/user");

const findAllMeeting = async () => {
  try {
    const meeting = await Meeting.findAll({
      where: { deleted_at: null },
    });

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

const deleteMeeting = (meeting) => Meeting.destroy({ where: { id: meeting } });

const findCardById = (user) =>
  Meeting.findOne({
    where: { id: user, deleted_at: null },
  });

const findCard = (meeting) => Meeting.findAll({ where: { deleted_at: null } });

const findMeetingById = (user) =>
  Meeting.findAll({
    where: { createBy: user, deleted_at: null },
  });
const findMeetingByMeeting = (meeting) =>
  Meeting.findOne({
    where: { id: meeting, deleted_at: null },
  });

module.exports = {
  findAllMeeting,
  createMeeting,
  findCardById,
  findCard,
  findMeetingById,
  deleteMeeting,
  findMeetingByMeeting,
};
