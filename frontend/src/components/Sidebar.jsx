import { useState } from "react";
import { Menu, LogOut } from "lucide-react"; // Importing ChevronRight icon

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false); // State for sidebar toggle

  const toggleSidebar = () => {
    setIsOpen(!isOpen); // Toggle the sidebar open/close state
  };

  return (
    <div className="relative">
      {/* Hamburger Icon */}
      <button
        className="p-2 ml-4 mt-4 fixed top-4 left-4 z-20 text-gray-700 bg-white rounded-xl shadow-md hover:bg-gray-100 focus:outline-none transition"
        onClick={toggleSidebar}
      >
        <Menu size={24} />
      </button>

      {/* Sidebar */}
      <div
        className={`fixed top-0 left-0 h-full w-64 bg-gray-900 text-white shadow-lg z-10 transform ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        } transition-transform duration-300 ease-in-out`}
      >
        {/* Sidebar Links */}
        <ul className="mt-20 space-y-1 text-lg">
          <li>
            <a
              href="/profile"
              className="block mt-5 py-3 px-4 rounded-md hover:bg-gray-800 transition-colors duration-200"
            >
              Profile
            </a>
          </li>
          <li>
            <a
              href="/requests"
              className="block py-3 px-4 rounded-md hover:bg-gray-800 transition-colors duration-200"
            >
              Requests
            </a>
          </li>
          <li>
            <a
              href="/approvals"
              className="block py-3 px-4 rounded-md hover:bg-gray-800 transition-colors duration-200"
            >
              Approvals
            </a>
          </li>
        </ul>

        {/* Logout Option */}
        <div className="absolute bottom-0 w-full">
          <button
            className="flex items-center justify-between py-3 px-4 w-full hover:bg-gray-800 transition-colors duration-200"
          >
            Logout
            <LogOut size={20} className="ml-2" />
          </button>
        </div>
      </div>

      {/* Overlay for closing sidebar when clicking outside */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-0"
          onClick={toggleSidebar}
        ></div>
      )}
    </div>
  );
};

export default Sidebar;
