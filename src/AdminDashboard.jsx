import React, { useState } from "react";
import { FaStore, FaClipboardList, FaUsers, FaSignOutAlt, FaUser, FaEdit } from "react-icons/fa";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import AdminStallCard from "./AdminStallCard";
import "./AdminDashboard.css";

const AdminDashboard = () => {
  const navigate = useNavigate();

  // State for stalls and users
  const [stalls, setStalls] = useState([
    { stallName: "Food Court", bookings: 20, status: "Available" },
    { stallName: "Crafts Stall", bookings: 15, status: "Booked" },
    { stallName: "Tech Booth", bookings: 12, status: "Available" },
  ]);

  const [users, setUsers] = useState([
    { username: "Vishnu", role: "Admin" },
    { username: "Rahul", role: "Vendor" },
  ]);

  // State for profile
  const [profile, setProfile] = useState({
    name: "Admin Name",
    email: "admin@example.com",
    phone: "123-456-7890",
  });

  const [editProfile, setEditProfile] = useState(profile);
  const [showProfileEdit, setShowProfileEdit] = useState(false);

  // State for editing stalls
  const [editStall, setEditStall] = useState(null);
  const [showStallEdit, setShowStallEdit] = useState(false);

  const [newStall, setNewStall] = useState({ stallName: "", bookings: "", status: "" });
  const [newUser, setNewUser] = useState({ username: "", role: "" });

  // Handle logout
  const handleLogout = () => {
    if (window.confirm("Are you sure you want to logout?")) {
      navigate("/register");
    }
  };

  // Add new stall
  const addStall = () => {
    if (newStall.stallName && newStall.bookings && newStall.status) {
      setStalls([...stalls, newStall]);
      setNewStall({ stallName: "", bookings: "", status: "" });
    } else {
      alert("Please fill out all stall fields.");
    }
  };

  // Add new user
  const addUser = () => {
    if (newUser.username && newUser.role) {
      setUsers([...users, newUser]);
      setNewUser({ username: "", role: "" });
    } else {
      alert("Please fill out all user fields.");
    }
  };

  // Save profile changes
  const saveProfile = () => {
    setProfile(editProfile);
    setShowProfileEdit(false);
  };

  // Handle edit stall button click
  const handleEditStall = (stall, index) => {
    setEditStall({ ...stall, index });
    setShowStallEdit(true);
  };

  // Save stall changes
  const saveStall = () => {
    const updatedStalls = [...stalls];
    updatedStalls[editStall.index] = {
      stallName: editStall.stallName,
      bookings: editStall.bookings,
      status: editStall.status,
    };
    setStalls(updatedStalls);
    setShowStallEdit(false);
  };

  return (
    <div className="admin-dashboard">
      {/* Sidebar Navigation */}
      <div className="sidebar">
        <h2>Admin Panel</h2>
        <ul>
          <li><FaStore className="icon" /> Manage Stalls</li>
          <li><FaClipboardList className="icon" /> Bookings</li>
          <li><FaUsers className="icon" /> Users</li>
          <li className="logout" onClick={handleLogout}>
            <FaSignOutAlt className="icon" /> Logout
          </li>
        </ul>
      </div>

      {/* Main Content */}
      <div className="content">
        <motion.h1
          animate={{ scale: 1.1 }}
          transition={{ duration: 0.5, repeat: Infinity, repeatType: "reverse" }}
          className="dashboard-title"
        >
          🏪 Admin Dashboard
        </motion.h1>

        {/* Stalls Section */}
        <div className="stalls-section">
          <h3>Stalls</h3>
          {stalls.map((stall, index) => (
            <div key={index} className="stall-item">
              <AdminStallCard
                stallName={stall.stallName}
                bookings={stall.bookings}
                status={stall.status}
              />
              <button onClick={() => handleEditStall(stall, index)}><FaEdit /> Edit</button>
            </div>
          ))}
        </div>

        {/* Stall Edit Modal */}
        {showStallEdit && (
          <div className="modal">
            <h3>Edit Stall</h3>
            <input
              type="text"
              placeholder="Stall Name"
              value={editStall.stallName}
              onChange={(e) => setEditStall({ ...editStall, stallName: e.target.value })}
            />
            <input
              type="number"
              placeholder="Bookings"
              value={editStall.bookings}
              onChange={(e) => setEditStall({ ...editStall, bookings: e.target.value })}
            />
            <select
              value={editStall.status}
              onChange={(e) => setEditStall({ ...editStall, status: e.target.value })}
            >
              <option value="Available">Available</option>
              <option value="Booked">Booked</option>
            </select>
            <button onClick={saveStall}>Save</button>
            <button onClick={() => setShowStallEdit(false)}>Cancel</button>
          </div>
        )}
      </div>
    </div>
  );
};

export default AdminDashboard;
