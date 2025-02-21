
export default function HomePage() {
    return (
      <div className="min-h-screen bg-gray-100 text-gray-900">
        {/* Navbar */}
        <nav className="bg-blue-600 text-white p-4 flex justify-between items-center shadow-md">
          <h1 className="text-2xl font-bold">My Website</h1>
          <button className="bg-white text-blue-600 px-4 py-2 rounded shadow-md hover:bg-gray-200">Sign Up</button>
        </nav>
  
        {/* Hero Section */}
        <div className="flex flex-col items-center justify-center text-center py-20 px-4">
          <h2 className="text-4xl font-bold mb-4">Welcome to My Website</h2>
          <p className="text-lg text-gray-700 mb-6">A simple page built with Tailwind CSS and React.</p>
          <button className="bg-blue-600 text-white px-6 py-3 rounded shadow-md hover:bg-blue-700 transition">
            Get Started
          </button>
        </div>
      </div>
    );
  }
  