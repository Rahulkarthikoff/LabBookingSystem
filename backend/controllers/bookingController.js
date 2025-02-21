const Booking = require("../models/SeeBookings");
const moment = require("moment");

// Function to generate a unique Booking ID
const generateBookingId = () => {
    const today = moment().format("YYYYMMDD");
    const randomChar = String.fromCharCode(65 + Math.floor(Math.random() * 26)); // A-Z
    return `BKG${today}${randomChar}`;
};

// @desc   Create a new booking
// @route  POST /api/eventbooking/:lab_id
// @access Public
exports.createBooking = async (req, res) => {
    try {
        const { lab_id, user_id } = req.params; // ✅ Use MongoDB _id from URL
        const { date, time_slots, purpose } = req.body;

        // Validate user_id as a valid MongoDB ObjectId
        if (!lab_id || !user_id || !date || !time_slots || !purpose) {
            return res.status(400).json({ message: "All fields are required" });
        }

        // Create booking with MongoDB's _id as user_id
        const newBooking = new Booking({
            booking_id: generateBookingId(),
            lab_id,
            user_id,  // ✅ Store MongoDB _id as user_id
            date,
            time_slots,
            purpose,
            status: "pending"
        });

        await newBooking.save();
        res.status(201).json({ message: "Booking successful", booking: newBooking });

    } catch (error) {
        console.error("Error in booking:", error);
        res.status(500).json({ message: "Internal server error", error: error.message });
    }
};


// @desc   Get all bookings
// @route  GET /api/eventbooking
// @access Public
exports.getAllBookings = async (req, res) => {
    try {
        const bookings = await Booking.find();
        res.status(200).json(bookings);
    } catch (error) {
        console.error("Error fetching bookings:", error);
        res.status(500).json({ message: "Internal server error" });
    }
};
