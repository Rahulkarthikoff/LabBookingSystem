// HomePage.jsx
import { useState } from "react";
import Sidebar from "../components/Sidebar";
import Divider from "../components/Divider";
import Header from "../components/Header";

const HomePage = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  return (
    <div className="flex h-screen">
      {/* Sidebar */}
      <Sidebar isOpen={sidebarOpen} toggleSidebar={toggleSidebar} />

      {/* Main Content */}
      <div className="flex-1 bg-gray-100 text-black flex flex-col">
        {/* Header Component */}
        <Header toggleSidebar={toggleSidebar} />

        {/* Divider component */}
        <div className="flex-1 mt-24 p-4"> {/* Add margin-top to offset header height */}
          <Divider />
        </div>
      </div>
    </div>
  );
};

export default HomePage;
