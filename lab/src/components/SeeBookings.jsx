import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
// import "./SeeBookings.css";
import { format } from 'date-fns';

function SeeBookings() {
  const { labid } = useParams();
  const [bookings, setBookings] = useState({});
  const [selectedDate, setSelectedDate] = useState(null);
  const [bookingDetails, setBookingDetails] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:3000/api/seebookings/${labid}`)
      .then((response) => response.json())
      .then((data) => {
        const formattedBookings = data.reduce((acc, booking) => {
          const date = format(new Date(booking.date), 'yyyy-MM-dd');
          if (!acc[date]) acc[date] = [];
          acc[date].push(booking);
          return acc;
        }, {});

        setBookings(formattedBookings);
      })
      .catch((error) => console.error("Error fetching bookings:", error));
  }, [labid]);

  const getDotClass = (dateString) => {
    if (!bookings[dateString] || bookings[dateString].length === 0) {
      return "dot dot-none"; // No bookings (Green)
    }

    // Count total time slots for the day
    const totalTimeSlots = bookings[dateString].reduce((acc, booking) => {
      return acc + (booking.time_slots ? booking.time_slots.length : 0);
    }, 0);

    if (totalTimeSlots >= 4) {
      return "dot dot-full"; // Fully booked (Red)
    } else if (totalTimeSlots > 0) {
      return "dot dot-partial"; // Partially booked (Yellow)
    } else {
      return "dot dot-none"; // No bookings (Green)
    }
  };

  const handleDateClick = (date) => {
    const dateString = format(date, 'yyyy-MM-dd');
    setSelectedDate(dateString);
    setBookingDetails(bookings[dateString] || []);
  };

  return (
    <div className="bookings-container">
      <h2>Bookings for Lab {labid}</h2>
      <div className="calendar-wrapper">
        <Calendar
          onClickDay={handleDateClick}
          tileContent={({ date }) => {
            const dateString = format(date, 'yyyy-MM-dd');
            return <div className={getDotClass(dateString)}></div>;
          }}
        />
      </div>
      {selectedDate && (
        <div className="booking-details-card">
          <h3>Booking Details for {selectedDate}</h3>
          {bookingDetails.length > 0 ? (
            bookingDetails.map((booking, index) => (
              <div key={index} className="booking-item">
                <p><strong>Time Slot:</strong> {booking.time_slots.join(", ")}</p>
                <p><strong>Booking ID:</strong> {booking.booking_id}</p>
                <p><strong>Purpose:</strong> {booking.purpose}</p>
                <p><strong>Status:</strong> {booking.status}</p>
                <hr />
              </div>
            ))
          ) : (
            <p className="no-bookings">No bookings for this date</p>
          )}
        </div>
      )}
    </div>
  );
}

export default SeeBookings;