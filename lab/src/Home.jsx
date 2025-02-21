// import React, { useState, useEffect } from "react";
// import Sidebar from "./components/Sidebar";
// import Header from "./components/Header";
// import Card from "./components/Card";

// function Home() {
//   const [isSidebarOpen, setSidebarOpen] = useState(true);
//   const [labs, setLabs] = useState([]);

//   useEffect(() => {
//     fetch("http://localhost:3000/api/labs") 
//       .then((response) => response.json())
//       .then((data) => setLabs(data))
//       .catch((error) => console.error("Error fetching labs:", error));
//   }, []);

//   const toggleSidebar = () => {
//     setSidebarOpen(!isSidebarOpen);
//   };


//   return (
//     <div style={styles.homeBody}>
//       <div style={styles.appContainer}>
//         <Sidebar isOpen={!isSidebarOpen} toggleSidebar={toggleSidebar} />
//         <div style={styles.mainContent}>
//           <Header />
//           <div style={styles.cardContainer}>
//             {labs.length > 0 ? (
//               labs.map((lab) => (
//                 <Card
//                   key={lab._id}
//                   labid={lab.labid}
//                   labname={lab.labname}
//                   staffincharge={lab.staffincharge}
//                   capacity={lab.capacity}
//                   floor={lab.floor}
//                 />
//               ))
//             ) : (
//               <p>Loading lab details...</p>
//             )}
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Home;



// import React, { useState, useEffect } from "react";
// import Sidebar from "./components/Sidebar";
// import Header from "./components/Header";
// import Card from "./components/Card";

// function Home() {
//   const [isSidebarOpen, setSidebarOpen] = useState(true);
//   const [labs, setLabs] = useState([]);

//   useEffect(() => {
//     fetch("http://localhost:3000/api/labs") 
//       .then((response) => response.json())
//       .then((data) => setLabs(data))
//       .catch((error) => console.error("Error fetching labs:", error));
//   }, []);

//   const toggleSidebar = () => {
//     setSidebarOpen(!isSidebarOpen);
//   };

//   return (
//     <div className="bg-white">
//       <div className="flex bg-white">
//         <Sidebar isOpen={!isSidebarOpen} toggleSidebar={toggleSidebar} />
//         <div className="w-full bg-gray-100 font-inter">
//           <Header />
//           <div className="grid grid-cols-auto-fit min-w-[250px] gap-5 w-full p-4">
//             {labs.length > 0 ? (
//               labs.map((lab) => (
//                 <Card
//                   key={lab._id}
//                   labid={lab.labid}
//                   labname={lab.labname}
//                   staffincharge={lab.staffincharge}
//                   capacity={lab.capacity}
//                   floor={lab.floor}
//                 />
//               ))
//             ) : (
//               <p>Loading lab details...</p>
//             )}
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Home;




import React from "react";

const labs = [
  { name: "CC1 & CC2", staff: "XXX", systems: 75 },
  { name: "CC3 & CC4", staff: "XXX", systems: 75 },
  { name: "CC5 & CC6", staff: "XXX", systems: 75 },
  { name: "CC7 & CC8", staff: "XXX", systems: 75 },
  { name: "CC9 & CC10", staff: "XXX", systems: 75 },
  { name: "CC11 & CC12", staff: "XXX", systems: 75 },
  { name: "CC13 & CC14", staff: "XXX", systems: 75 },
  { name: "CC15 & CC16", staff: "XXX", systems: 75 },
];

function LabCard({ name, staff, systems }) {
  return (
    <div className="bg-white border-2 border-blue-900 rounded-xl shadow-md p-4 text-center w-64">
      <img
        src="lab_placeholder.jpg"
        alt="Lab"
        className="w-full h-32 object-cover rounded-lg"
      />
      <h3 className="text-lg font-bold mt-2 text-gray-900">{name}</h3>
      <p className="text-sm text-gray-700 font-medium">Incharge Staff: {staff}</p>
      <p className="text-sm text-gray-700 font-medium">No. of systems: {systems}</p>
      <button className="mt-3 px-4 py-2 text-white bg-blue-900 rounded-md shadow-md hover:bg-blue-800">
        See Details
      </button>
    </div>
  );
}

export default function Dashboard() {
  return (
    <div className="flex bg-gray-100 h-screen">
      {/* Sidebar */}
      <div className="w-16 bg-blue-900 flex items-center justify-center p-4">
        <button className="text-white text-2xl">&#9776;</button>
      </div>

      {/* Main Content */}
      <div className="flex-1 p-6">
        {/* Header */}
        <div className="bg-blue-900 text-white p-6 rounded-xl flex items-center justify-between">
          <h1 className="text-2xl font-bold">
            Department of <br />
            <span className="text-lg font-semibold">Artificial Intelligence</span>
          </h1>
          <img
            src="department_image.jpg"
            alt="AI Department"
            className="h-24 w-40 rounded-lg object-cover"
          />
        </div>

        {/* Lab Cards Grid */}
        <div className="grid grid-cols-4 gap-6 mt-6 justify-items-center">
          {labs.map((lab, index) => (
            <LabCard key={index} {...lab} />
          ))}
        </div>
      </div>
    </div>
  );
}
