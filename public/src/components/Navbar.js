import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => (
  <nav>
    <h1>Perfumes</h1>
    <ul>
      <li><Link to="/">Home</Link></li>
      <li><Link to="/shop">Shop</Link></li>
      <li><Link to="/about">About</Link></li>
      <li><Link to="/contact">Contact</Link></li>
      <li><Link to="/cart">(0)</Link></li>
    </ul>
    <div className="weather-widget">28°C Mostly sunny</div>
  </nav>
);

export default Navbar;
