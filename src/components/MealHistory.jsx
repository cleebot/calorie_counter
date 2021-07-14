import { useState, useEffect } from 'react';
import axios from 'axios';
// import { BASE_URL, headers } from "../services";

const AIRTABLE_KEY = process.env.REACT_APP_AIRTABLE_KEY;
const AIRTABLE_BASE = process.env.REACT_APP_AIRTABLE_BASE;
const BASE_URL = `https://api.airtable.com/v0/${AIRTABLE_BASE}/Table%201`;
const headers = { Authorization: `Bearer ${AIRTABLE_KEY}` };

export default function MealHistory() {
  const [meals, SetMeals] = useState([]);

  useEffect(() => {
    const fetchMeals = async () => {
      const res = await axios.get(BASE_URL, { headers });
      console.log(res.data.records)
    };
    fetchMeals();
  }, []);
  
  return (
    <div>
List
    </div>
  )
}

