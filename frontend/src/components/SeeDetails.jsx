import { useNavigate } from "react-router-dom";

const SeeDetails = ({ labDetails, closeSeeDetails }) => {
  const navigate = useNavigate();

  const handleBookNow = () => {
    navigate("/booking");
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50">
      <div className="absolute inset-0 bg-black opacity-50"></div> {/* Background overlay */}
      <div className="bg-white p-6 rounded-xl shadow-lg z-10">
        <h2 className="text-2xl font-bold mb-4">{labDetails.name}</h2>
        <p className="mb-2">Incharge: {labDetails.incharge}</p>
        <p className="mb-2">No. of Systems: {labDetails.systems}</p>
        <p className="mb-2">{labDetails.description}</p>
        
        {/* Centered Buttons */}
        <div className="flex justify-center space-x-4 mt-4">
          <button
            className="p-2 w-20 bg-gray-800 text-white rounded-xl hover:bg-gray-600"
            onClick={closeSeeDetails} // Close the modal when clicked
          >
            Close
          </button>
          <button
            className="p-2 w-auto bg-gray-800 text-white rounded-xl hover:bg-gray-600"
            onClick={() => navigate("/seebookings")} // Navigate to bookings page
          >
            See Bookings
          </button>
          <button
            className="p-2 w-auto bg-gray-800 text-white rounded-xl hover:bg-gray-600"
            onClick={handleBookNow} // Navigate to booking form page
          >
            Book Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default SeeDetails;
