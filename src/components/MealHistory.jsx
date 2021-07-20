import { useState, useEffect } from 'react';
import axios from 'axios';
import { BASE_URL, headers } from "../services";
import MealCard from "./MealCard";



export default function MealHistory() {
  const [meals, setMeals] = useState([]);

  useEffect(() => {
    const fetchMeals = async () => {
      const res = await axios.get(BASE_URL, { headers });
      setMeals(res.data.records)
    };
    fetchMeals();
  }, []);
  
  return (
    <div>
    <h1>Keep Track of Your Meals!</h1>
    {meals.map((meals) => {
      return <MealCard key={meals.id} meals={meals}/>;
  })}
  </div>
  )
}

