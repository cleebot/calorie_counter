import React from 'react';
import { Link } from 'react-router-dom';

export default function MealCard(props) {
  return (
    // <Link to={`/meals/${props.meal.div}`}>
    <div>
       <br />
      <p>Food: {props.meal.fields.food}</p>
      <p>Calories: {props.meal.fields.calories}</p>
      <p>Carbohydrates: {props.meal.fields.carbohydrates} grams</p>
      <p>Fat: {props.meal.fields.fat} grams </p>
      <p>Protein: {props.meal.fields.protein} grams </p>
      <br />
    </div>
    // </Link>
  )
}
