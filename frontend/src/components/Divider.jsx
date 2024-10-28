import { useState } from "react";
import LabsCard from "./LabsCard";

const Divider = () => {
  const [activeSection, setActiveSection] = useState("labs");

  return (
    <div className="mx-auto max-w-full"> {/* Container for max width */}
      <div className="flex justify-center mb-4"> {/* Adjusted margin-bottom */}
        <div
          onClick={() => setActiveSection("labs")}
          className={`w-40 py-3 flex items-center justify-center text-white text-lg font-semibold cursor-pointer rounded-l-full
            ${activeSection === "labs" ? "bg-gradient-to-r from-gray-900 to-gray-700 shadow-lg" : "bg-gray-700 hover:bg-gray-600"}
          `}
        >
          Labs
        </div>
        <div className="w-1 bg-white"></div>
        <div
          onClick={() => setActiveSection("seminar")}
          className={`w-40 py-3 flex items-center justify-center text-white text-lg font-semibold cursor-pointer rounded-r-full
            ${activeSection === "seminar" ? "bg-gradient-to-r from-gray-700 to-gray-900 shadow-lg" : "bg-gray-700 hover:bg-gray-600"}
          `}
        >
          Seminar Hall
        </div>
      </div>

      {/* Conditional rendering based on active section */}
      <div className="mt-6 p-6 bg-white shadow-md rounded-lg">
        {activeSection === "labs" ? (
          <div className="p-4">
            <h2 className="text-lg md:text-2xl font-bold text-gray-700 mb-4">Labs Section</h2>
    
            {/* Flex container for LabsCard components */}
            <div className="flex flex-wrap justify-center gap-4"> {/* Use gap for consistent spacing */}
              <LabsCard />
              <LabsCard />
              <LabsCard />
              <LabsCard />
              <LabsCard />
              <LabsCard />
              <LabsCard />
              <LabsCard />
              <LabsCard />
              <LabsCard />
              <LabsCard />
              <LabsCard />
            </div>
          </div>
        ) : (
          <div>
           <div className="flex flex-wrap justify-center gap-4"> {/* Use gap for consistent spacing */}
              <LabsCard />
              <LabsCard />
              <LabsCard />
            </div>
            {/* <LabsCard />
            <h2 className="text-lg md:text-2xl font-bold text-gray-700 mb-2">Seminar Hall Section</h2>
            <p className="text-gray-700">Join the various seminars happening in the hall...</p> */}
          </div>
        )}
      </div>
    </div>
  );
};

export default Divider;
