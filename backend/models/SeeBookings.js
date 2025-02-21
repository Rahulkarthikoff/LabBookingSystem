const mongoose = require("mongoose");

const seeBookingSchema = new mongoose.Schema({
  booking_id: { type: String, required:true},
  lab_id: { type: String, required: true },
  user_id: { type: String, required: true },
  date: { type: String, required: true },
  time_slots: { type: [String], required: true },
  purpose: { type: String, required: true },
  status: { type: String, enum: ["confirmed", "pending", "cancelled"], required: true }
});

// ✅ Ensure it's using the correct collection 'bookingsdetails'
const SeeBookings = mongoose.model("SeeBooking", seeBookingSchema, "bookingdetails");

module.exports = SeeBookings;
