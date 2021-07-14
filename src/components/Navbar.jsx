import React from 'react'
import { Link } from 'react-router-dom';
import "./Navbar.css";

export default function Navbar() {
  return (
    <div>
      <Link to="/">
        Home
      </Link>
      <Link to="/log-meal">Log Your Meal</Link>
      <Link to="/all-meals">Meal History</Link>
    </div>
  )
}
