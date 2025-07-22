import React from "react";
import { useNavigate } from "react-router-dom";  // Import useNavigate
import "./Home.css";

const Home = () => {
  const navigate = useNavigate();  // Create navigate function

  // Handle button click to redirect to Stall Details
  const handleGetStarted = () => {
    navigate("/StallDetails");  // Redirect to /stalls route
  };

  return (
    <div className="home-container">
      <div className="home-content">
        <h1>Welcome to Stall Management System ! 🎪</h1>
        <p>Book your desired food items easily with our hassle-free system.</p>
        <button className="home-button" onClick={handleGetStarted}>
          Get Started
        </button>
      </div>
    </div>
  );
};

export default Home;
