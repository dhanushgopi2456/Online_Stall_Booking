import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Register.css";

const Register = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent page refresh

    if (username && email && password) {
      console.log("Username:", username);
      console.log("Email:", email);
      console.log("Password:", password);

      // Check for admin credentials
      if (
        username === "vishnu" &&
        email === "challavishnu@gmail.com" &&
        password === "Challa@1234"
      ) {
        console.log("Admin registered successfully!");
        navigate("/admin"); // Redirect to Admin Dashboard
      } else {
        console.log("User registered successfully!");
        navigate("/UserDashboard"); // Redirect to User Dashboard for other users
      }
    } else {
      alert("Please fill in all the fields.");
    }
  };

  return (
    <div className="register-container">
      <h2>📝 Admin Login</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          required
        />
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <button type="submit" className="register-btn">Sign Up</button>
      </form>
    </div>
  );
};

export default Register;
