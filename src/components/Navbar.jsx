import React from 'react'
import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <div>
      <Link to="/">
        Home
      </Link>
      <Link to="/logmeal">Log Your Meal</Link>
      <Link to="/mealhistory">Meal History</Link>
    </div>
  )
}
