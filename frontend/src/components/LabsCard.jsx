import { useState } from "react";
import labImage from "./ux/image.png"; // Adjust the path as needed
import SeeDetails from "./SeeDetails"; // Modal Component


const LabsCard = () => {
  const [showSeeDetails, setShowSeeDetails] = useState(false); // State to toggle modal visibility

  const openSeeDetails = () => setShowSeeDetails(true); // Corrected function to set the state to true
  const closeSeeDetails = () => setShowSeeDetails(false); // Function to set the state to false

  const labDetails = {
    name: "Lab Name",
    incharge: "Incharge Staff",
    systems: "20",
    description: "This lab is used for XYZ purposes, featuring the latest equipment and technologies.",
  };

  return (
    <div className="max-w-72 w-full">
      {/* Lab Card */}
      <div className="bg-gradient-to-r from-gray-100 to-gray-100 rounded-xl shadow-lg overflow-hidden">
        <img
          className="w-64 h-36 rounded-xl mx-auto mt-4 mb-3 border-2 border-gray-300"
          src={labImage}
          alt="Lab"
        />
        <div className="pl-8 text-left">
          <h2 className="text-xl font-semibold text-gray-900 mb-1">Lab Name </h2>
          <p className="text-gray-800 font-medium">CCx & CCy</p>
        </div>
        <div className="flex justify-center mb-4 pt-3">
          <button
            className="p-2 w-auto bg-gray-800 text-white rounded-xl hover:bg-gray-600 transition-transform duration-200 ease-in-out"
            onClick={openSeeDetails} // Show modal when clicked
          >
            See Details
          </button>
        </div>
      </div>

      {/* Pop-up Modal Component */}
      {showSeeDetails && (
        <SeeDetails
          labDetails={labDetails} // Pass lab details as props to modal
          closeSeeDetails={closeSeeDetails} // Pass function to close the modal
        />
      )}
    </div>
  );
};

export default LabsCard;
