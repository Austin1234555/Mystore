import React from "react";
import { Link } from "react-router-dom";
import "../styles.css"; 
const Navbar = ({ onFilterChange, onSearchChange }) => {
  return (
    <nav className="navbar">
      {}
      <Link to="/" className="nav-brand">MyStore</Link>

      {}
      <div className="search-container">
        <input
          type="text"
          placeholder="Search products..."
          className="search-input"
          onChange={(e) => onSearchChange(e.target.value)}
        />
        <button className="search-btn">🔍</button>
      </div>

      {}
      <ul className="nav-links">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/cart">Cart 🛒</Link></li>
        <li><Link to="/wishlist">Wishlist ❤️</Link></li>
      </ul>
    </nav>
  );
};

export default Navbar;
