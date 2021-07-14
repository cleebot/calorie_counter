import { useState, useEffect } from 'react';
import axios from 'axios';
// import { BASE_URL, headers } from "../services";

const AIRTABLE_KEY = process.env.REACT_APP_AIRTABLE_KEY;
const AIRTABLE_BASE = process.env.REACT_APP_AIRTABLE_BASE;
const BASE_URL = `https://api.airtable.com/v0/${AIRTABLE_BASE}/Table%201`;
const headers = { Authorization: `Bearer ${AIRTABLE_KEY}` };

export default function MealHistory() {
  const [meals, SetMeals] = useState([]);

  
  return (
    <div>
List
    </div>
  )
}

