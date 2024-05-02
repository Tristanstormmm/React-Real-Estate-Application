import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-logo">
        {/* Use the image directly from the public folder */}
        <img src="/logo.png" alt="Logo" />
      </div>
      <ul className="navbar-links">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/Add Property">Add Property</Link></li>
      </ul>
    </nav>
  );
}

export default Navbar;