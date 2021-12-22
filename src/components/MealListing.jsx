import React, { useState } from "react"
import axios from 'axios'
import { useParams, Link } from 'react-router-dom'
import { useSelector } from "react-redux"
import MealItem from "./MealItem"

const API_KEY = process.env.REACT_APP_SPOONACULAR_API_KEY

console.log(API_KEY)
const API_BASE_URL = 'https://api.spoonacular.com/mealplanner/generate?'

function MealListing() {
  const meals = useSelector(state => state)
  const params = useParams()
  const [data, setData] = useState({})
  // const params = new URLSearchParams([
  //   ["timeFrame", "week"]
  //   ["targetCalories", targetCalories],
  //   ["diet", diet],
  //   ["apiKey", API_KEY],
  // ])

  // function fetchMeals = async () => {
  //   const response = await axios.get(API_BASE_URL, {
  //     params,
  //   })

  // }

  return (
    <>
      <h1 className="title mealListing">Meal Listing for {params.diet} {params.targetCalories}</h1>

      <div className="ui three column double stackable grid container">
        <MealItem />
      </div>
    </>
  )
}

export default MealListing
