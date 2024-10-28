const Header = ({ toggleSidebar }) => {
  return (
    <div className="bg-gray-900 h-24 w-full text-white flex items-center justify-between px-4 fixed top-0 left-0 z-10">
      {/* Hamburger menu for smaller screens */}
      <button
        className="md:hidden focus:outline-none"
        onClick={toggleSidebar}
      >
        <svg
          className="w-8 h-8"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          
        </svg>
      </button>
      
      {/* Home Page text aligned to the right */}
      <h1 className="text-2xl font-bold ml-auto">Department of Artificial Intelligence</h1>
    </div>
  );
};

export default Header;
