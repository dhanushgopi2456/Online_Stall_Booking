import React from "react";
import "./UserStallCard.css";

const UserStallCard = ({ stallName, date, status }) => {
  return (
    <div className={`user-stall-card ${status.toLowerCase()}`}>
      <h3>{stallName}</h3>
      <p>Date: {date}</p>
      <p>Status: <span className={`status ${status.toLowerCase()}`}>{status}</span></p>
    </div>
  );
};

export default UserStallCard;
