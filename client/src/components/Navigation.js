import React from 'react';
import { NavLink } from 'react-router-dom';

function Navigation() {
  return (
    <nav className="navbar">
      <ul>
        <li><NavLink to="/">Home</NavLink></li>
        <li><NavLink to="/cycle-tracker">Cycle Tracker</NavLink></li>
        <li><NavLink to="/routines">Routines</NavLink></li>
        <li><NavLink to="/profile">Profile</NavLink></li>
      </ul>
    </nav>
  );
}

export default Navigation;