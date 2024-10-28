import LoginPage from "@/pages/LoginPage"; // ensure the correct import paths
import HomePage from "@/pages/HomePage";
import StudentRequests  from "@/pages/StudentRequests";
import Approvals from "@/pages/Approvals";
import BookingForm from "@/pages/BookingPage";
import SeeBookings from "@/pages/SeeBookings";
import { Routes, Route } from "react-router-dom";
const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<LoginPage />} />
      <Route path="/home" element={<HomePage />} />
      <Route path="/requests" element={<StudentRequests />} />
      <Route path="/approvals" element={<Approvals />} />
      <Route path="/booking" element={<BookingForm />} />
      <Route path="/seebookings" element={<SeeBookings />} />

      <Route path="*" element={<LoginPage />} /> {/* Redirect unmatched routes */}
    </Routes>
  );
};

export default AppRoutes;
