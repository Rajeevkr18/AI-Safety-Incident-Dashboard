import { Link } from "react-router-dom";
import { useState } from "react";
import './Navbar.css';

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false); // State to toggle the menu

  const toggleMenu = () => setMenuOpen(!menuOpen); // Function to toggle menu state

  return (
    <nav className="navbar">
      <div className="logo">AI Safety</div>
      <div className={`nav-links ${menuOpen ? 'active' : ''}`}>
        <Link to="/" onClick={() => setMenuOpen(false)}>Home</Link>
        <Link to="/dashboard" onClick={() => setMenuOpen(false)}>Dashboard</Link>
        <Link to="/report" onClick={() => setMenuOpen(false)}>Report</Link>
      </div>
      <div className="hamburger" onClick={toggleMenu}>
        <div className="line"></div>
        <div className="line"></div>
        <div className="line"></div>
      </div>
    </nav>
  );
}

export default Navbar;
