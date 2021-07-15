import React from 'react'
import { Link } from 'react-router-dom';
import "./Navbar.css";

export default function Navbar() {
  return (
    <div className="navbar">
      <ul>
      <Link className='navbarlink' to="/">
        Home
      </Link>
      <Link className='navbarlink' to="/logmeal">Log Your Meal</Link>
        <Link className='navbarlink'  to="/mealhistory">Meal History</Link>
        <Link className='navbarlink'  to="/DietInfo">Diet Info</Link>
      </ul>
    </div>
  )
}
