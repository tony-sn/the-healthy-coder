import React from "react"
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
