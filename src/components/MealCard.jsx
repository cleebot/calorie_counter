import React from 'react';
import "./MealCard.css";

export default function MealCard(props) {
  return (
    <div className="card" key={props.id}>
       <br />
      <p>Food: {props.meals.fields.food}</p>
      <p>Calories: {props.meals.fields.calories} grams</p>
      <p>Carbohydrates: {props.meals.fields.carbohydrates} grams</p>
      <p>Fat: {props.meals.fields.fat} grams </p>
      <p>Protein: {props.meals.fields.protein} grams </p>
      <br />
    </div>
  )
}
