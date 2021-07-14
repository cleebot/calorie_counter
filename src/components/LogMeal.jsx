import React from 'react';
import axios from 'axios';
import { useHistory } from 'react-router-dom';
// import { BASE_URL, headers } from '../services';
import { useState } from 'react';


const AIRTABLE_KEY = process.env.REACT_APP_AIRTABLE_KEY;
const AIRTABLE_BASE = process.env.REACT_APP_AIRTABLE_BASE;
const BASE_URL = `https://api.airtable.com/v0/${AIRTABLE_BASE}/Table%201`;
const headers = { Authorization: `Bearer ${AIRTABLE_KEY}` };


  const defaultForm = {
    date: '',
    food: '',
    calories: '',
    carbohydrates: '',
    fat: '',
    protein: '',
  
  }
  export default function LogMeal() {
    const [input, setInput] = useState(defaultForm);
    const history = useHistory;
  
    const handleChange = (event) => {
      const { id, value } = event.target;
      console.log(id, value, input)
  
      setInput((prevInput) => ({
        ...prevInput,
        [id]: value,
      }));
    };
  
    const handleSubmit = async (e) => {
      e.preventDefault();
      const res = await axios.post(BASE_URL, { fields: input }, { headers });
      console.log(res);
      history.push("/meal-history");
    };
  
  
    return (
      <div>
        <h2>Add New Food Item</h2>
        <form onSubmit={handleSubmit}>
          <label>Food</label>
          <br />
          <input name="food"
            value={input.food}
            onChange={handleChange}
            placeholder="food"
          />
          <br />
          <label>Date</label>
          <input name="date"
            value={input.date}
            onChange={handleChange}
            placeholder="date" />
          <br />
          <label>Calories</label>
          <input name="calories"
            value={input.calories}
            onChange={handleChange}
            placeholder="calories"
          />
          <br />
          <label>Carbohydrates</label>
          <input name="carbohydrates"
            value={input.carbohydrates}
            onChange={handleChange}
            placeholder="carbohydrates"
          />
          <br />
          <label>Fat</label>
          <input name="fat"
            value={input.fat}
            onChange={handleChange}
            placeholder="fat"
          />
          <br />
          <label>Protein</label>
          <input name="protein"
            value={input.protein}
            onChange={handleChange}
            placeholder="protein"
          />
        </form>
      </div>
    );
  }
