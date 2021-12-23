import React, { useState } from "react"
import MealForm from "../components/HookForm/MealForm"

function Meals() {

  return (
    <div className="meals container">
      <h1 className="title mealTitle">Meal Planning</h1>

      <MealForm />
    </div>
  )
}

export default Meals

// **Result Page**

      // <h2 className="title">Monday</h2>
      // <div className="mealList">{showMealItem(monday.meals)}</div>

      // <h2 className="title">Tuesday</h2>
      // <div className="mealList">{showMealItem(tuesday.meals)}</div>

      // <h2 className="title">Wednesday</h2>
      // <div className="mealList">{showMealItem(wednesday.meals)}</div>

      // <h2 className="title">Thursday</h2>
      // <div className="mealList">{showMealItem(thursday.meals)}</div>

      // <h2 className="title">Friday</h2>
      // <div className="mealList">{showMealItem(friday.meals)}</div>

      // <h2 className="title">Saturday</h2>
      // <div className="mealList">{showMealItem(saturday.meals)}</div>

      // <h2 className="title">Sunday</h2>
      // <div className="mealList">{showMealItem(sunday.meals)}</div>