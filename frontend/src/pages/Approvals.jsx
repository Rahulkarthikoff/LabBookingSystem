import { useState, useEffect } from 'react';

const Approval = () => {
  const [finalStatus, setFinalStatus] = useState('');
  const [reason, setReason] = useState('');
  const [reasonSubmitted, setReasonSubmitted] = useState(false);
  const [selectedRequest, setSelectedRequest] = useState(''); // No lab selected initially
  const [labInchargeStatus, setLabInchargeStatus] = useState('');
  const [staffInchargeStatus, setStaffInchargeStatus] = useState('');

  // Dictionary for statuses
  const requestStatus = {
    'Machine learning Lab': { labIncharge: 'Pending', staffIncharge: 'Approved' },
    'Deep learning Lab': { labIncharge: 'Rejected', staffIncharge: 'Pending' },
    'Data Science Lab': { labIncharge: 'Approved', staffIncharge: 'Pending' },
    'AI Lab': { labIncharge: 'Approved', staffIncharge: 'Approved' },
  };

  const handleRequestSelection = (request) => {
    setSelectedRequest(request);
    setReason('');
    setReasonSubmitted(false);

    const selectedLab = requestStatus[request];
    if (selectedLab) {
      setLabInchargeStatus(selectedLab.labIncharge);
      setStaffInchargeStatus(selectedLab.staffIncharge);
    }
  };

  useEffect(() => {
    // Determine the final status based on the statuses of Lab Incharge and Staff Incharge
    if (labInchargeStatus === 'Rejected' || staffInchargeStatus === 'Rejected') {
      setFinalStatus('Rejected');
    } else if (labInchargeStatus === 'Pending' || staffInchargeStatus === 'Pending') {
      setFinalStatus('Pending');
    } else if (labInchargeStatus === 'Approved' && staffInchargeStatus === 'Approved') {
      setFinalStatus('Approved');
    }
  }, [labInchargeStatus, staffInchargeStatus]);

  const handleReasonSubmit = () => {
    if (reason.trim() !== '') {
      setReasonSubmitted(true);
    }
  };

  const renderFinalStatusIcon = () => {
    if (finalStatus === 'Approved') {
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6 text-green-500 inline-block ml-2"
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path
            fillRule="evenodd"
            d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-10.707a1 1 0 00-1.414-1.414L9 9.172 7.707 7.879a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
            clipRule="evenodd"
          />
        </svg>
      );
    } else if (finalStatus === 'Rejected') {
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6 text-red-500 inline-block ml-2"
          viewBox="0 0 24 24"
          fill="currentColor"
        >
          <path
            fillRule="evenodd"
            d="M12 2a10 10 0 100 20 10 10 0 000-20zm1 13h-2v-2h2v2zm0-4h-2V7h2v4z"
            clipRule="evenodd"
          />
        </svg>
      );
    } else if (finalStatus === 'Pending') {
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6 text-yellow-500 inline-block ml-2 animate-spin"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M12 4v1m0 14v1m8-8h-1M4 12H3m15.364-6.364l-.707.707M6.343 17.657l-.707.707M16.95 16.95l.707.707M6.343 6.343l.707.707"
          />
        </svg>
      );
    }
  };

  return (
    <div className="flex h-screen">
      {/* Sidebar */}
      <div className="w-1/4 bg-gray-800 text-white p-4">
        <h2 className="text-xl font-bold mb-4">Inbox</h2>
        <input
          type="text"
          placeholder="Requests and Approvals"
          className="w-full p-2 mb-4 bg-gray-700 rounded placeholder-gray-300"
        />
        <div className="mt-4">
          <h3 className="font-semibold">Approval Status</h3>
          <ul className="mt-2">
            <li
              className={`p-2 rounded cursor-pointer ${selectedRequest === 'Machine learning Lab' ? 'bg-gray-700' : ''}`}
              onClick={() => handleRequestSelection('Machine learning Lab')}
            >
              Requesting a Machine learning Lab for Booking
            </li>
            <li
              className={`p-2 rounded cursor-pointer ${selectedRequest === 'Deep learning Lab' ? 'bg-gray-700' : ''}`}
              onClick={() => handleRequestSelection('Deep learning Lab')}
            >
              Requesting a Deep learning Lab for Booking
            </li>
            <li
              className={`p-2 rounded cursor-pointer ${selectedRequest === 'Data Science Lab' ? 'bg-gray-700' : ''}`}
              onClick={() => handleRequestSelection('Data Science Lab')}
            >
              Requesting a Data Science Lab for Booking
            </li>
            <li
              className={`p-2 rounded cursor-pointer ${selectedRequest === 'AI Lab' ? 'bg-gray-700' : ''}`}
              onClick={() => handleRequestSelection('AI Lab')}
            >
              Requesting an AI Lab for Booking
            </li>
          </ul>
        </div>
      </div>

      {/* Main content */}
      <div className="flex-grow p-8 bg-gray-100">
        {!selectedRequest ? (
          <div className="h-full flex items-center justify-center flex-col">
            {/* Creative Loader or Illustration */}
            <div className="animate-spin mb-4">
              <svg
                className="w-12 h-12 text-gray-400"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M8 12a4 4 0 108 0 4 4 0 00-8 0zm-7.8 0A9.8 9.8 0 0112 2.2 9.8 9.8 0 0122.8 12 9.8 9.8 0 0112 21.8a9.8 9.8 0 01-9.8-9.8z"
                />
              </svg>
            </div>
            <h2 className="text-2xl font-semibold text-gray-600">
              Approval Status
            </h2>
            <p className="text-gray-500 mt-2">Select a request to see approval details</p>
          </div>
        ) : (
          <div className="bg-gray-50 p-8 shadow-md rounded-md">
            <div className="mb-6">
              <h2 className="text-lg font-semibold mb-4">
                Requesting a {selectedRequest} for Booking
              </h2>
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-gray-200 p-4 rounded-md">
                  <h3 className="font-semibold mb-2">Lab Incharge</h3>
                  <div className="bg-white p-2 text-center rounded-md">
                    <p>Status</p>
                    <p className="font-bold">{labInchargeStatus}</p>
                  </div>
                </div>
                <div className="bg-gray-200 p-4 rounded-md">
                  <h3 className="font-semibold mb-2">Staff Incharge</h3>
                  <div className="bg-white p-2 text-center rounded-md">
                    <p>Status</p>
                    <p className="font-bold">{staffInchargeStatus}</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Final Status */}
            <div className="p-4 bg-gray-200 rounded-md text-center">
              <h2 className="text-lg font-bold">Final Status: {finalStatus}</h2>
              {renderFinalStatusIcon()}
            </div>

            {/* Reason for Rejection */}
            {finalStatus === 'Rejected' && (
              <div className="mt-6">
                <label className="block text-gray-700 mb-2">Reason for Rejection</label>
                <textarea
                  className="w-full bg-gray-100 p-2 border border-gray-300 rounded-md"
                  value={reason}
                  onChange={(e) => setReason(e.target.value)}
                />
                <button
                  className="mt-4 px-4 py-2 bg-gray-600 text-white rounded-md"
                  onClick={handleReasonSubmit}
                >
                  Submit
                </button>
                {reasonSubmitted && (
                  <p className="mt-2 text-green-500">Reason submitted successfully!</p>
                )}
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default Approval;
