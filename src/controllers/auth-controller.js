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
exports.card = async (req, res, next) => {
  try {
    const card = [
      {
        neme: "",
        details: "",
        room: "",
        numberSeat: "",
        remaining: "",
        time: "",
        dateStart: "",
        dateEnd: "",
      },
    ];
    res.json(card);
  } catch (err) {
    next(err);
  }
};

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
exports.getAllBooking = async (req, res, next) => {
  try {
    const BookingData = await bookingService.findAllBooking();

    res.status(200).json(BookingData);
  } catch (err) {
    next(err);
  }
};
// exports.register = async (req, res, next) => {
//   try {
//     const value = validateRegister(req.body);
//     const isUserExist = await userService.findEmail(value.email);
//     if (isUserExist) {
//       createError("Email address already in use");
//     }

//     value.password = await bcryptService.hash(value.password);

//     let user;
//     if (value.email === "admin@mail.com") {
//       user = await userService.createUser({
//         Fullname: value.Fullname,
//         email: value.email,
//         password: value.password,
//         isAdmin: true,
//       });
//     } else {
//       user = await userService.createUser({
//         Fullname: value.Fullname,
//         email: value.email,
//         password: value.password,
//         isAdmin: false,
//       });
//     }

//     const accessToken = tokenService.sign({ id: user.id });
//     res.status(200).json({ accessToken });
//   } catch (err) {
//     next(err);
//   }
// };
