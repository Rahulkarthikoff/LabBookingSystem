const SeeBooking = require("../models/SeeBookings"); // Import correct model

exports.getSeeBookings = async (req, res) => {
  try {
    console.log("Reached controller");

    const lab_id = req.params.labid; // Extract lab ID from the request URL
    const bookings = await SeeBooking.find({ lab_id: String(lab_id) });
 // Query using correct field

    if (!bookings || bookings.length === 0) {
      return res.status(404).json({ message: "No bookings found for this lab" });
    }

    res.json(bookings); // Send the retrieved bookings as JSON response
  } catch (error) {
    console.error("Error fetching bookings:", error);
    res.status(500).json({ error: "Failed to fetch bookings" });
  }
};
