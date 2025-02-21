// App.jsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import EventBookingForm from './EventBookingForm';
import Login from './Login';
import Home from './Home';
import SeeBookings from './components/SeeBookings';
import HomePage from './HomePage';


const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/login" element={<Login />} />
        <Route path="/event-booking/:labid" element={<EventBookingForm />} />
        <Route path="/home" element={<Home />} />
        <Route path="/seebookings/:labid" element={<SeeBookings />} />
         {/* <Route path="/" element={<HomePage />} /> */}
      </Routes>
    </Router>
  );
};

export default App;

