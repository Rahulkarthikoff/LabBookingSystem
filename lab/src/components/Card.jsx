// import React, { useState } from "react";
// import { useNavigate } from "react-router-dom";
import "./Card.css";

// function Card({ labid, labname, staffincharge, capacity, floor }) {
//   const [showPopup, setShowPopup] = useState(false);
//   const navigate = useNavigate();

//   const togglePopup = () => setShowPopup(!showPopup);
//   const handleBookNow = () => {
//     navigate(`/event-booking/${labid}`)
//        };
//   const handleSeeBookings = () => {
//     navigate(`/seebookings/${labid}`);
//   };

//   return (
//     <div className="card">
//       <img src="apple computer.jpeg" alt="Lab Image" className="card-image" />
//       <div className="card-content">
//         <h3>{labname}</h3>
//         <p><strong>Lab ID:</strong> {labid}</p>
//         <p><strong>Incharge:</strong> {staffincharge}</p>
//         <p><strong>Capacity:</strong> {capacity}</p>
//         <p><strong>Floor:</strong> {floor}</p>
//         <button className="details-button" onClick={togglePopup}>
//           See Details
//         </button>
//       </div>

//       {showPopup && (
//         <div className="popup">
//           <div className="popup-content">
//             <h2>Lab Booking - {labname}</h2>
//             <p><strong>Lab Incharge:</strong> {staffincharge}</p>
//             <p><strong>Capacity:</strong> {capacity}</p>
//             <p><strong>Floor:</strong> {floor}</p>
//             <div className="popup-buttons">
//             <button className="book-button" onClick={handleBookNow}>BookNow</button>
//               <button className="see-bookings-button" onClick={handleSeeBookings}>
//                 See Bookings
//               </button>
//               <button className="close-button" onClick={togglePopup}>
//                 Close
//               </button>
//             </div>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// }

// export default Card;

import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function Card({ labid, labname, staffincharge, capacity }) {
  const [showPopup, setShowPopup] = useState(false);
  const navigate = useNavigate();

  const togglePopup = () => setShowPopup(!showPopup);
  const handleBookNow = () => navigate(`/event-booking/${labid}`);
  const handleSeeBookings = () => navigate(`/seebookings/${labid}`);

  return (
    <div className="bg-white border-2 border-blue-900 rounded-2xl shadow-lg text-center overflow-hidden w-72">
      <img
        // src="apple computer.jpeg"
        src="D:\Volume(E)\main\main\LabBookingSystem\lab\public\applecomputer.jpg"
        alt="Lab"
        className="h-36 w-full object-cover rounded-t-2xl"
      />
      <div className="p-4 md">
        <h3 className="text-lg font-bold text-gray-900">{labname}</h3>
        <p className="text-sm text-gray-700 font-medium">Incharge: {staffincharge}</p>
        <p className="text-sm text-gray-700 font-medium">No. of systems: {capacity}</p>
        <button
          className="mt-3 px-5 py-2 text-white bg-blue-900 rounded-md shadow-md hover:bg-blue-800"
          onClick={togglePopup}
        >
          See Details
        </button>
      </div>

      {showPopup && (
        <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 flex justify-center items-center">
          <div className="bg-white p-6 rounded-xl w-96 text-center shadow-lg">
            <h2 className="text-xl font-bold text-gray-900">Lab Booking - {labname}</h2>
            <p className="text-gray-700"><strong>Lab Incharge:</strong> {staffincharge}</p>
            <p className="text-gray-700"><strong>No. of systems:</strong> {capacity}</p>
            <div className="mt-4 flex justify-center space-x-3">
              <button
                className="px-4 py-2 bg-blue-900 text-white rounded-md shadow-md hover:bg-blue-800"
                onClick={handleBookNow}
              >
                Book Now
              </button>
              <button
                className="px-4 py-2 bg-blue-900 text-white rounded-md shadow-md hover:bg-blue-800"
                onClick={handleSeeBookings}
              >
                See Bookings
              </button>
              <button
                className="px-4 py-2 bg-red-600 text-white rounded-md shadow-md hover:bg-red-500"
                onClick={togglePopup}
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Card;
