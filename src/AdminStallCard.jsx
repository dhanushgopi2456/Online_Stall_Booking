
import React from "react";
import { motion } from "framer-motion";
import { FaCheckCircle, FaTimesCircle } from "react-icons/fa";
import "./AdminStallCard.css";

const AdminStallCard = ({ stallName, bookings, status }) => {
  return (
    <motion.div
      className="stall-card"
      whileHover={{ scale: 1.05 }}
      transition={{ duration: 0.3 }}
    >
      <h3>{stallName}</h3>
      <p>Bookings: {bookings}</p>
      <p className={status === "Available" ? "available" : "booked"}>
        {status === "Available" ? <FaCheckCircle /> : <FaTimesCircle />} {status}
      </p>
      <button className="manage-btn">Manage</button>
    </motion.div>
  );
};

export default AdminStallCard;
