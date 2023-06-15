const express = require("express");

const authController = require("../controllers/auth-controller");

const router = express.Router();

router.post("/register", authController.register);
router.post("/login", authController.login);
router.post("/createRoom", authController.createRoom);
// router.get("/card", authController.card);
router.get("/getAllRoom", authController.getAllRoom);
router.get("/getAllChair", authController.getAllChair);
router.get("/getAllBooking", authController.getAllBooking);

module.exports = router;
