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
//
router.post("/createRoom", authController.createRoom);
router.post("/createChair", authController.createChair);
router.post("/createBooking", authController.createBooking);
router.post("/createMeeting", authController.createMeeting);
router.post("/findCardById", authController.findCardById);

module.exports = router;
