const Chair = require("../models/chair");

const findAllChair = async () => {
  try {
    const chair = await Chair.findAll();

    if (chair) {
      console.log("User found:", chair);
    } else {
      console.log("User not found");
    }
    return chair;
  } catch (error) {
    console.error("Error occurred while finding chair:", error);
  }
};

const createChair = (chair) => Chair.create(chair);

module.exports = {
  findAllChair,
  createChair,
};
