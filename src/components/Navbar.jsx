import React from 'react'
import { Link } from 'react-router-dom';
import "./Navbar.css";

export default function Navbar() {
  return (
    <div>
      <Link to="/">
        Home
      </Link>
      <Link to="/log-your-meal">Log Your Meal</Link>
      <Link to="/meal-history">Meal History</Link>
    </div>
  )
}
