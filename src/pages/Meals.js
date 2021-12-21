import React from "react"
import data from "../db/mealPlanExample.json"
import Spoonacular from "../assets/img/SpoonacularDefaultImage-556x370.jpg"

import MealItem from "../components/MealItem"
import MealForm from "../components/HookForm/MealForm"


function getImageUrl(id) {
  return (
    `https://webknox.com/recipeImages/${id}-556x370.jpg` || `${Spoonacular}`
  )
}

function showMealItem(mealList) {
  return mealList.map(meal => {
    return (
      <MealItem key={meal.id} image={getImageUrl(meal.id)} title={meal.title} />
    )
  })
}

function Meals() {
  // const { monday,
  //   tuesday,
  //   wednesday,
  //   thursday,
  //   friday,
  //   saturday,
  //   sunday } = data.week

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