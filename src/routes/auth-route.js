const express = require("express");

const authController = require("../controllers/auth-controller");

const router = express.Router();

router.post("/register", authController.register);
router.post("/login", authController.login);
// router.get("/card", authController.card);
router.get("/getAllRoom", authController.getAllRoom);
router.get("/getAllChair", authController.getAllChair);
router.get("/getAllBooking", authController.getAllBooking);
router.get("/getAllMeeting", authController.getAllMeeting);
router.get("/findCard", authController.findCard);
router.get("/getAllChair", authController.getAllChair);
router.get("/findAllChairById/:id", authController.findAllChairById);
router.get("/findUserById/:id", authController.findUserById);
router.get("/findMeetingById", authController.findMeetingById);
router.get("/findMeetingByMeeting/:id", authController.findMeetingByMeeting);
router.get("/findBookingById/:id", authController.findBookingById);
router.get("/getBookingByMeetingId/:id", authController.getBookingByMeetingId);
//
router.post("/createRoom", authController.createRoom);
router.post("/createChair", authController.createChair);
router.post("/createBooking", authController.createBooking);
router.post("/createMeeting", authController.createMeeting);
router.post("/findCardById", authController.findCardById);
router.post("/findChairById", authController.findChairById);

//
router.put("/updateBooking", authController.updateBooking);
//
router.delete("/deleteMeeting/:id", authController.deleteMeeting);
module.exports = router;
