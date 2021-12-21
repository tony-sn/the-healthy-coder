import React from 'react'
import { useSelector } from "react-redux"

function MealListing() {
  const meals = ((state) => state)
  return (
    <div>
      <h1>Meal Listing</h1>
      <h2 className="title">Monday</h2>
      <div className="mealList"></div>
    </div>
  )
}

export default MealListing
