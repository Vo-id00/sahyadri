// Navbar.js
import React from 'react';

function Navbar() {
  return (
    <nav className="navbar">
      <input type="text" placeholder="Search..." className="search-bar" />
      <select className="filter-options">
        <option>All Categories</option>
        <option>Category 1</option>
        <option>Category 2</option>
        <option>Category 3</option>
      </select>
    </nav>
  );
}

export default Navbar;
