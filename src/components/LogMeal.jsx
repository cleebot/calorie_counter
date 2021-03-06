import React from 'react';
import axios from 'axios';
import { useHistory } from 'react-router-dom';
import { BASE_URL, headers } from '../services';
import { useState } from 'react';
import "./Form.css";



  const defaultForm = {
    food: "",
    calories: 0,
    carbohydrates: 0,
    fat: 0,
    protein: 0,
  
  }

export default function LogMeal() {
    const [input, setInput] = useState(defaultForm);
    const history = useHistory();
  
    const handleChange = (event) => {
      const { id, value } = event.target;
      

    
  
      setInput((prevInput) => ({
        ...prevInput,
        [id]: value,
      }));
    };
  

  
    const handleNumberChange = (event) => {
      const { id, valueAsNumber } = event.target;
      

    
  
      setInput((prevInput) => ({
        ...prevInput,
        [id]: valueAsNumber,
      }));
    };
    
    const handleSubmit = async (e) => {
      e.preventDefault();
      const res = await axios.post(BASE_URL, { fields: input }, { headers });
      console.log(res)
      history.push("/Mealhistory");
    };
  
  
  
  return (
      <div>
        <h2>Add New Food Item</h2>
        <form className="form" onSubmit={handleSubmit}>
          <br />
          <label>Food</label><br />
          <input id="food"
            value={input.food}
            onChange={handleChange}
            placeholder="food"
          />
          <br />
          <label>Calories</label><br />
          <input id="calories"
            type="number"
            value={input.calories}
            onChange={handleNumberChange}
            placeholder="calories"
          />
          <br />
          <label>Carbohydrates</label><br />
          <input id="carbohydrates"
            type="number"
            value={input.carbohydrates}
            onChange={handleNumberChange}
            placeholder="carbohydrates"
          />
          <br />
          <label>Fat</label><br />
          <input id="fat"
            type="number"
            value={input.fat}
            onChange={handleNumberChange}
            placeholder="fat"
          />
          <br />
          <label>Protein</label><br />
        <input id="protein"
            type="number"
            value={input.protein}
            onChange={handleNumberChange}
            placeholder="protein"
          />
          <br />
        <button className="button">Submit Meal</button>
        <br />
        </form>
      </div>
    );
  }
