import React from 'react';
import { NavLink } from 'react-router-dom';

function Navigation() {
  return (
    <nav className="navbar">
      <ul>
        <li><NavLink to="/">Home</NavLink></li>
        <li><NavLink to="/CycleTracking">Cycle Tracking</NavLink></li>
        <li><NavLink to="/Routines">Routines</NavLink></li>
        <li><NavLink to="/Profile">Profile</NavLink></li>
        <li><NavLink to="/login">Login</NavLink></li>
        <li><NavLink to="/register">Register</NavLink></li>
      </ul>
    </nav>
  );
}

export default Navigation;