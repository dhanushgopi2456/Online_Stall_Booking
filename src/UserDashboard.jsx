import React from "react";
import { FaUser, FaStore, FaClipboardList, FaSignOutAlt } from "react-icons/fa";
import { motion } from "framer-motion";
import UserStallCard from "./UserStallCard";
import "./UserDashboard.css";

const UserDashboard = () => {
  // Mock data for booked stalls (can replace with API call)
  const bookedStalls = [
    { stallName: "Food Court", date: "March 15, 2025", status: "Confirmed" },
    { stallName: "Crafts Stall", date: "March 16, 2025", status: "Pending" },
    { stallName: "Tech Booth", date: "March 17, 2025", status: "Confirmed" },
  ];

  return (
    <div className="user-dashboard">
      {/* Sidebar Navigation */}
      <div className="sidebar">
        <h2>User Panel</h2>
        <ul>
          <li><FaUser className="icon" aria-label="Profile" /> Profile</li>
          <li><FaStore className="icon" aria-label="Book Stalls" /> Book Stalls</li>
          <li><FaClipboardList className="icon" aria-label="My Bookings" /> My Bookings</li>
          <li className="logout"><FaSignOutAlt className="icon" aria-label="Logout" /> Logout</li>
        </ul>
      </div>

      {/* Main Content */}
      <div className="content">
        <motion.h1
          animate={{ scale: 1.1 }}
          transition={{ duration: 0.5, repeat: Infinity, repeatType: "reverse" }}
          className="dashboard-title"
        >
          👤 User Dashboard
        </motion.h1>
        <p>Welcome! Manage your profile, book stalls, and view your bookings here.</p>

        {/* Booked Stalls Section */}
        <div className="booked-stalls-section">
          {bookedStalls.map((stall, index) => (
            <UserStallCard
              key={index}
              stallName={stall.stallName}
              date={stall.date}
              status={stall.status}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default UserDashboard;
