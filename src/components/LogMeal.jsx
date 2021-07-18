import React from 'react';
import axios from 'axios';
import { useHistory } from 'react-router-dom';
import { BASE_URL, headers } from '../services';
import { useState } from 'react';
// import DatePicker from "react-datepicker";
// import "react-datepicker/dist/react-datepicker.css";



  const defaultForm = {
    food: "",
    date: new Date(),
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
      // console.log(id, value, input)

    
  
      setInput((prevInput) => ({
        ...prevInput,
        [id]: value,
      }));
    };
  
  // const handleDateChange = (date) => {
  //   setInput((prevInput) => ({
  //     ...prevInput,
  //     date: date,
  //   }));
  // }
  
    const handleNumberChange = (event) => {
      const { id, valueAsNumber } = event.target;
      // console.log(id, value, input)

    
  
      setInput((prevInput) => ({
        ...prevInput,
        [id]: valueAsNumber,
      }));
    };
    
    const handleSubmit = async (e) => {
      e.preventDefault();
      const res = await axios.post(BASE_URL, { fields: input }, { headers });
      console.log(res);
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
          {/* <label>Date</label><br /> */}
          {/* <input id="date"
            value={input.date}
            onChange={handleChange}
            placeholder="month/date/year" /> */}
        {/* <DatePicker selected={input.date} onChange={handleDateChange} />
          <br /> */}
          <label>Calories</label><br />
          <input id="calories"
            value={input.calories}
            onChange={parseInt(handleNumberChange)}
            placeholder="calories"
          />
          <br />
          <label>Carbohydrates</label><br />
          <input id="carbohydrates"
            value={input.carbohydrates}
            onChange={handleNumberChange}
            placeholder="carbohydrates"
          />
          <br />
          <label>Fat</label><br />
          <input id="fat"
            value={input.fat}
            onChange={handleNumberChange}
            placeholder="fat"
          />
          <br />
          <label>Protein</label><br />
          <input id="protein"
            value={input.protein}
            onChange={handleNumberChange}
            placeholder="protein"
          />
          <br />
          <button>Submit Meal</button>
        </form>
      </div>
    );
  }
