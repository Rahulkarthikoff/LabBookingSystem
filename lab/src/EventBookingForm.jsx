import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import "./EventBookingForm.css";

const EventBookingForm = () => {
  const { id } = useParams(); // Extract lab ID from URL
  const [labName, setLabName] = useState("Loading..."); // Default state
  const [isSidebarOpen, setSidebarOpen] = useState(false);
  const [selectedTimeSlots, setSelectedTimeSlots] = useState([]);
  
  const timeSlots = [
    "09:00-10:30",
    "10:45-12:15",
    "01:15-02:45",
    "03:00-04:30"
  ];

  useEffect(() => {
    const fetchLabName = async () => {
      try {
        const response = await fetch(`http://localhost:3000/api/labs/${id}`);
        if (!response.ok) {
          throw new Error("Lab not found");
        }
        const data = await response.json();
        setLabName(data.labname); // Update lab name
      } catch (error) {
        console.error("Error fetching lab details:", error);
        setLabName("Unknown Lab");
      }
    };

    fetchLabName();
  }, [id]);

  const toggleSidebar = () => {
    setSidebarOpen(!isSidebarOpen);
  };

  const handleTimeSlotChange = (slot) => {
    if (selectedTimeSlots.includes(slot)) {
      setSelectedTimeSlots(selectedTimeSlots.filter((s) => s !== slot));
    } else {
      setSelectedTimeSlots([...selectedTimeSlots, slot]);
    }
  };

  return (
    <div className="ebook-main">
    <div>
      {/* Sidebar */}
      <button className="menu-button" onClick={toggleSidebar}>
        ☰
      </button>
      {isSidebarOpen && (
        <div className="sidebar">
          <ul>
            <li>Profile</li>
            <li>Requests</li>
            <li>Approvals</li>
            <li>Logout</li>
          </ul>
        </div>
      )}

      {/* Main Content */}
      <div className={`ebook-main-content ${isSidebarOpen ? "open" : ""}`}>
        <div className="ebook-header">
          <div className="Lab heading"><h1>{labName}</h1></div>
          <button className="close-button">X</button>
        </div>

        <form>
          <label>
            Event Name:
            <input type="text" required />
          </label>

          <label>
            Event Date:
            <input type="date" required />
          </label>

          <label>
            Event Description:
            <textarea required />
          </label>

          <label>
            Proof of event:
            <input type="file" />
            <button className="browse-input">Browse</button>
          </label>

          <div className="checkbox-group">
            <p><strong>Select Time Slot</strong></p>
            {timeSlots.map((slot) => (
              <div key={slot} className="checkbox-tile">
                <input
                  type="checkbox"
                  id={slot}
                  className="checkbox-input"
                  checked={selectedTimeSlots.includes(slot)}
                  onChange={() => handleTimeSlotChange(slot)}
                />
                <label htmlFor={slot} className="checkbox-label">
                  {slot}
                </label>
              </div>
            ))}
          </div>

          <button className="send-request-button" type="submit">
            Send Request
          </button>
        </form>
      </div>
    </div>
    </div>
  );
};

export default EventBookingForm;
