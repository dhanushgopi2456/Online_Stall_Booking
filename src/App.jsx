
import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./Home";
import Login from "./Login";
import Register from "./Register";
import AdminDashboard from "./AdminDashboard";
import "./App.css";
import Navbar from "./Navbar .jsx";
import UserstallCard from "./UserStallCard.jsx";
import UserDashboard from "./UserDashboard";
import StallDetails from "./StallDetails.jsx";

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/admin" element={<AdminDashboard />} />
        <Route path="/UserDashboard" element={<UserDashboard />} />
        <Route path="/UserstallCard" element={<UserstallCard />} />
        <Route path="/StallDetails" element={<StallDetails />} />
        
      </Routes>
    </Router>
  );
};

export default App;
