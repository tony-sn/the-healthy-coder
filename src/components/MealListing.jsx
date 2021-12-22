import React, { useState, useEffect } from "react"
import axios from "axios"
import { useParams, Link } from "react-router-dom"
import { useSelector, useDispatch } from "react-redux"
import { setMeals } from "../redux/actions/MealActions"

import MealItem from "./MealItem"

const API_KEY = process.env.REACT_APP_SPOONACULAR_API_KEY

const API_BASE_URL = "https://api.spoonacular.com/mealplanner/generate"

function MealListing() {
  const week = useSelector(state => state.allMeals.meals.week)
  const dispatch = useDispatch()
  const params = useParams()
  console.log(params)

  const [data, setData] = useState({})

  const fetchMeals = async (targetCalories, diet, excluded) => {
    const response = await axios
      .get(
        `${API_BASE_URL}?timeFrame=week&targetCalories=${targetCalories}&diet=${diet}&apiKey=${API_KEY}&excluded=${
          excluded || ""
        }`
      )
      .catch(err => {
        console.log("Err: ", err)
      })
    console.log(response.data)
    dispatch(setMeals(response.data))
  }

  useEffect(() => {
    fetchMeals(params.targetCalories, params.diet, params.excluded)
  }, [params.targetCalories])

  console.log("Week: ", week)
  return (
    <>
      <h1 className="title mealListing">Meal Listing for</h1>

      <div className="ui three column double stackable grid container">
        <MealItem />
      </div>
    </>
  )
}

export default MealListing
