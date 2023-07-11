const User = require("../models/user");

const findEmail = async (inputEmail) => {
  try {
    const user = await User.findOne({
      where: { email: inputEmail },
    });

    if (user) {
      console.log("User found:", user);
    } else {
      console.log("User not found");
    }
    return user;
  } catch (error) {
    console.error("Error occurred while finding user:", error);
  }
};

const createUser = (user) => User.create(user);

const finduserById = (user) =>
  User.findOne({
    where: { id: user },
  });
module.exports = {
  findEmail,
  createUser,
  finduserById,
};
