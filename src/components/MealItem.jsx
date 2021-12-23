import React from "react"
import { useSelector } from "react-redux"
import { Link } from "react-router-dom"

import Spoonacular from "../assets/img/SpoonacularDefaultImage-556x370.jpg"

function getImageUrl(id) {
  return (
    `https://webknox.com/recipeImages/${id}-556x370.jpg` || `${Spoonacular}`
  )
}

function MealItem({mealList}) {
  return mealList.map(day => {
    return day.meals.map(meal => {
      const {id, title} = meal
      return (
        <div className="column" key={id}>
          <Link to={`/meals/mealplanning/${id}`}>
            <div className="ui link cards">
              <div className="card">
                <div className="image">
                  <img src={getImageUrl(id)} alt={title} />
                </div>
                <div className="content">
                  <div className="header">{title}</div>
                </div>
              </div>
            </div>
          </Link>
        </div>
      )
    }) // map 2
}) // map 1
} //MealItem


export default MealItem
