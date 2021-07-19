import React from 'react';
import { Link } from 'react-router-dom';

export default function MealCard(props) {
  return (
    // <Link to={`/meals/${props.meal.div}`}>
    <div className="card" key={props.id}>
       <br />
      <p>Food: {props.meals.fields.food}</p>
      <p>Calories: {props.meals.fields.calories} grams</p>
      <p>Carbohydrates: {props.meals.fields.carbohydrates} grams</p>
      <p>Fat: {props.meals.fields.fat} grams </p>
      <p>Protein: {props.meals.fields.protein} grams </p>
      <br />
    </div>
    // </Link>
  )
}
