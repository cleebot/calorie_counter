import React from 'react'
import { Link } from 'react-router-dom';
import "./Navbar.css";

export default function Navbar() {
  return (
    <div className="navbar">
      <ul>
      <Link to="/">
        Home
      </Link>
      <Link to="/logmeal">Log Your Meal</Link>
        <Link to="/mealhistory">Meal History</Link>
        <Link to="/DietInfo">Diet Info</Link>
      </ul>
    </div>
  )
}
