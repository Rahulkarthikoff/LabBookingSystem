const express = require("express");
const router = express.Router();
const { createBooking, getAllBookings } = require("../controllers/bookingController");

// Create a new booking
router.post("/:lab_id/:user_id", createBooking);

// Get all bookings
router.get("/", getAllBookings);

module.exports = router;
