const Room = require("../models/room");

const findAllRoom = async () => {
  try {
    const room = await Room.findAll();

    if (room) {
      console.log("User found:", room);
    } else {
      console.log("User not found");
    }
    return room;
  } catch (error) {
    console.error("Error occurred while finding user:", error);
  }
};

const createRoom = (room) => Room.create(room);

const findRoomById = (User) =>
  Room.findOne({
    where: { id: User },
  });

module.exports = {
  findAllRoom,
  createRoom,
  findRoomById,
};
