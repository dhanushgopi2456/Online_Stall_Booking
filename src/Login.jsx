import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Login.css";

const Login = () => {
  const [userId, setUserId] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();  // Prevent page refresh

    // Check for admin credentials
    if (userId === "vishnu" && password === "Challa@1234") {
      console.log("Admin logged in");
      navigate("/admin");  // Redirect to Admin Dashboard
    } else if (userId && password) {
      console.log("Invalid credentials, redirecting to Home");
      navigate("/");  // Redirect to Home page for incorrect credentials
    } else {
      alert("Please enter both User ID and Password.");
    }
  };

  return (
    <div className="login-container">
      <h2>🔑 Login</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="User ID"
          value={userId}
          onChange={(e) => setUserId(e.target.value)}
          required
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <button type="submit" className="login-btn">Login</button>
      </form>
    </div>
  );
};

export default Login;
