const express = require("express");
const router = express.Router();
const seeBookingController = require("../controllers/seeBookingController");

console.log("Reached routes");

router.get("/:labid", seeBookingController.getSeeBookings); // Ensure correct function is called

module.exports = router;
