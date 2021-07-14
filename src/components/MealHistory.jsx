import { useState, useEffect } from 'react';
import axios from 'axios';
import { BASE_URL, headers } from "../services";



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
      {meals.map((meal) => {
        return <div>{meal.fields.food}</div>;
    })}
    </div>
  )
}

