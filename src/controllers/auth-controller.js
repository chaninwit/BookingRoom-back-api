const {
  validateRegister,
  validateLogin,
} = require("../validators/auth-validator");
const userService = require("../services/user-service");
const createError = require("../utils/create-error");
const bcryptService = require("../services/bcrypt-service");
const tokenService = require("../services/token-service");
const roomService = require("../services/room-service");
const chairService = require("../services/chair-service");
const bookingService = require("../services/booking-service");
const MeetingService = require("../services/meeting-service");

exports.register = async (req, res, next) => {
  try {
    const value = validateRegister(req.body);

    const isUserExist = await userService.findEmail(value.email);
    if (isUserExist) {
      createError("อีเมลถูกใช้แล้ว");
    }

    value.password = await bcryptService.hash(value.password);

    const user = await userService.createUser(value);

    const accessToken = tokenService.sign({ id: user.id });
    res.status(200).json({ accessToken });
  } catch (err) {
    next(err);
  }
};

exports.login = async (req, res, next) => {
  try {
    const value = validateLogin(req.body);
    console.log(value);
    const user = await userService.findEmail(value.email);
    console.log(user);
    if (!user) {
      createError("ไม่พบ user", 404);
    }
    const isCorrect = await bcryptService.compare(
      value.password,
      user.password
    );

    if (!isCorrect) {
      createError("password ไม่ถูกต้อง", 401);
    }

    const accessToken = tokenService.sign({ id: user.id });
    res.status(200).json({ accessToken });
  } catch (err) {
    next(err);
  }
};
// exports.card = async (req, res, next) => {
//   try {
//     const card = [
//       {
//         neme: "",
//         details: "",
//         room: "",
//         numberSeat: "",
//         remaining: "",
//         time: "",
//         dateStart: "",
//         dateEnd: "",
//       },
//     ];
//     res.json(card);
//   } catch (err) {
//     next(err);
//   }
// };

exports.getAllRoom = async (req, res, next) => {
  try {
    const roomData = await roomService.findAllRoom();

    res.status(200).json(roomData);
  } catch (err) {
    next(err);
  }
};
exports.createRoom = async (req, res, next) => {
  try {
    const value = req.body;

    await roomService.createRoom(value);

    res.status(200).json({
      message: "สร้างสำเร็จ",
      payload: value,
    });
  } catch (err) {
    next(err);
  }
};

exports.getAllChair = async (req, res, next) => {
  try {
    const chairData = await chairService.findAllChair();

    res.status(200).json(chairData);
  } catch (err) {
    next(err);
  }
};

exports.createChair = async (req, res, next) => {
  try {
    const value = req.body;

    await chairService.createChair(value);

    res.status(200).json({
      message: "สร้างสำเร็จ",
      payload: value,
    });
  } catch (err) {
    next(err);
  }
};

exports.getAllBooking = async (req, res, next) => {
  try {
    const BookingData = await bookingService.findAllBooking();

    res.status(200).json(BookingData);
  } catch (err) {
    next(err);
  }
};

exports.createBooking = async (req, res, next) => {
  try {
    const value = req.body;

    await bookingService.createBooking(value);

    res.status(200).json({
      message: "สร้างสำเร็จ",
      payload: value,
    });
  } catch (err) {
    next(err);
  }
};

exports.getAllMeeting = async (req, res, next) => {
  try {
    const meetingData = await MeetingService.findAllMeeting();

    res.status(200).json(meetingData);
  } catch (err) {
    next(err);
  }
};

exports.createMeeting = async (req, res, next) => {
  try {
    const value = req.body;

    await MeetingService.createMeeting(value);

    res.status(200).json({
      message: "สร้างสำเร็จ",
      payload: value,
    });
  } catch (err) {
    next(err);
  }
};

exports.getAllMeeting = async (req, res, next) => {
  try {
    const meetingData = await MeetingService.findAllMeeting();

    res.status(200).json(meetingData);
  } catch (err) {
    next(err);
  }
};
exports.findCardById = async (req, res, next) => {
  try {
    const cardData = req.body;

    console.log("cardData", cardData.id);
    const meetingData = await MeetingService.findCardById(cardData.id);
    const RoomData = await roomService.findRoomById(cardData.id);
    const newMeetingData = { meetingData, RoomData };
    console.log(newMeetingData);
    console.log("number_seat", RoomData);
    console.log(meetingData.RoomId);
    res.status(200).json(meetingData);
  } catch (err) {
    next(err);
  }
};
exports.findCard = async (req, res, next) => {
  try {
    const cardData = req.body;

    console.log("cardData", cardData.id);
    const meetingData = await MeetingService.findCard();
    let cardDate = [];
    for (let i = 0; i < meetingData.length; i++) {
      const RoomData = await roomService.findRoomById(meetingData[i].RoomId);
      cardDate.push({ meetingData: meetingData[i], RoomData: RoomData });
      console.log("RoomData", RoomData);
    }
    res.status(200).json(cardDate);
  } catch (err) {
    next(err);
  }
};
