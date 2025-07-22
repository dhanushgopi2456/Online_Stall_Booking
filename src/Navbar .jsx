import { Link } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  return (
    <nav className="navbar">
      <b><h1>🎪 Stall Management System</h1></b>
      <div className="nav-links">
        <Link to="/" className="nav-item">Home</Link>
        <Link to="/login" className="nav-item">Login</Link>
        <Link to="/register" className="nav-item">Admin </Link>
        
      </div>
    </nav>
  );
};

export default Navbar;
