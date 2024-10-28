import React, { useState } from 'react';

const BookingForm = () => {
  const [facultyList, setFacultyList] = useState([]);
  const [facultyName, setFacultyName] = useState('');
  const [facultyEmail, setFacultyEmail] = useState('');
  const [facultyRole, setFacultyRole] = useState('');
  const [file, setFile] = useState(null);
  const [labIncharge, setLabIncharge] = useState('ML Lab Incharge');
  const [eventIncharge, setEventIncharge] = useState('Event Incharge');
  const [notification, setNotification] = useState('');

  const addFaculty = () => {
    if (!facultyName || !facultyEmail || !facultyRole) {
      setNotification('Please fill in all faculty details.');
      return;
    }
    setFacultyList([...facultyList, { name: facultyName, email: facultyEmail, role: facultyRole }]);
    setFacultyName('');
    setFacultyEmail('');
    setFacultyRole('');
    setNotification('');
  };

  const removeFaculty = (index) => {
    const updatedList = facultyList.filter((_, i) => i !== index);
    setFacultyList(updatedList);
  };

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  const sendRequest = () => {
    if (facultyList.length === 0) {
      setNotification('Please add at least one faculty.');
      return;
    }
    if (!file) {
      setNotification('Please upload proof of the event.');
      return;
    }

    setNotification(`Request sent with ${labIncharge} and ${eventIncharge}`);
  };

  return (
    <div className="bg-white rounded-lg shadow-lg p-6 w-[800px] h-auto mx-auto my-10 ">
      <div className="flex justify-between items-center mb-4">
        <h1 className="text-xl md:text-2xl font-bold text-gray-900">Machine Learning Lab</h1>
        <button className="text-gray-400 hover:text-red-500 font-bold text-xl transition-colors">X</button>
      </div>

      {/* Event Name */}
      <div className="mt-2">
        <label className="block text-sm font-semibold text-gray-700">Event Name</label>
        <input type="text" className="w-full border-gray-300 rounded-lg p-2 mt-1 shadow-sm focus:ring focus:ring-blue-200 focus:border-blue-500" placeholder="Enter event name" />
      </div>

      {/* Event Date */}
      <div className="mt-3">
        <label className="block text-sm font-semibold text-gray-700">Event Date</label>
        <input type="date" className="w-full border-gray-300 rounded-lg p-2 mt-1 shadow-sm focus:ring focus:ring-blue-200 focus:border-blue-500" />
      </div>

      {/* Event Description */}
      <div className="mt-3">
        <label className="block text-sm font-semibold text-gray-700">Event Description</label>
        <textarea className="w-full border-gray-300 rounded-lg p-2 mt-1 shadow-sm focus:ring focus:ring-blue-200 focus:border-blue-500" placeholder="Describe the event"></textarea>
      </div>

      {/* Proof of Event */}
      <div className="mt-3">
        <label className="block text-sm font-semibold text-gray-700">Proof of Event</label>
        <div className="flex items-center space-x-3">
          <input type="file" onChange={handleFileChange} className="hidden" id="proof-upload" />
          <label htmlFor="proof-upload" className="w-full border-gray-300 rounded-lg p-2 bg-white shadow-sm">
            {file ? file.name : "No file chosen"}
          </label>
          <label htmlFor="proof-upload" className="bg-gray-900 text-white px-4 py-2 rounded-lg cursor-pointer hover:bg-gray-800 transition-colors">
            Browse
          </label>
        </div>
      </div>

      {/* Add Faculty Section */}
      <div className="mt-4">
        <h2 className="text-md font-bold text-gray-900">Add Faculty</h2>

        <div className="mt-2">
          <label className="block text-sm font-semibold text-gray-700">Faculty Name</label>
          <input
            type="text"
            value={facultyName}
            onChange={(e) => setFacultyName(e.target.value)}
            className="w-full border-gray-300 rounded-lg p-2 mt-1 shadow-sm focus:ring focus:ring-blue-200 focus:border-blue-500"
            placeholder="Enter faculty name"
          />
        </div>

        <div className="mt-2">
          <label className="block text-sm font-semibold text-gray-700">Faculty Email</label>
          <input
            type="email"
            value={facultyEmail}
            onChange={(e) => setFacultyEmail(e.target.value)}
            className="w-full border-gray-300 rounded-lg p-2 mt-1 shadow-sm focus:ring focus:ring-blue-200 focus:border-blue-500"
            placeholder="Enter faculty email"
          />
        </div>

        <div className="mt-2">
          <label className="block text-sm font-semibold text-gray-700">Faculty Role</label>
          <input
            type="text"
            value={facultyRole}
            onChange={(e) => setFacultyRole(e.target.value)}
            className="w-full border-gray-300 rounded-lg p-2 mt-1 shadow-sm focus:ring focus:ring-blue-200 focus:border-blue-500"
            placeholder="Enter faculty role (e.g., Coordinator)"
          />
        </div>

        <div className="mt-2 flex items-center space-x-4">
          <button
            onClick={addFaculty}
            className="bg-gray-900 text-white px-5 py-2 rounded-lg hover:bg-gray-800 transition-colors">
            Add Faculty +
          </button>
        </div>

        {/* Display Faculty List */}
        {facultyList.length > 0 && (
          <div className="mt-4">
            <h2 className="text-sm font-semibold text-gray-700">Added Faculty:</h2>
            {facultyList.map((faculty, index) => (
              <div key={index} className="flex justify-between items-center bg-gray-50 p-2 rounded-lg mb-2 shadow">
                <div>
                  <p className="text-sm font-medium text-gray-800">{faculty.name} - {faculty.role}</p>
                  <p className="text-xs text-gray-600">{faculty.email}</p>
                </div>
                <button
                  onClick={() => removeFaculty(index)}
                  className="text-red-500 hover:text-red-700 text-sm transition-colors">
                  Remove
                </button>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Send Request */}
      <div className="mt-4 flex justify-end space-x-4">
        <button
          onClick={sendRequest}
          className="bg-gray-900 text-white px-5 py-2 rounded-lg hover:bg-gray-800 transition-colors">
          Send Request
        </button>
      </div>

      {/* Notification */}
      {notification && (
        <div className="mt-4 p-2 bg-green-100 text-green-800 rounded-lg shadow">
          {notification}
        </div>
      )}
    </div>
  );
};

export default BookingForm;
