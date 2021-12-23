import React, { useState, useEffect } from "react"
import axios from "axios"
import { useParams } from "react-router-dom"
import { useSelector, useDispatch } from "react-redux"
import { setMeals } from "../redux/actions/MealActions"

import MealItem from "./MealItem"

const API_KEY = process.env.REACT_APP_SPOONACULAR_API_KEY

const API_BASE_URL = "https://api.spoonacular.com/mealplanner/generate"

function MealListing() {
  const meals = useSelector(state => state.allMeals.meals)

  const dispatch = useDispatch()
  const params = useParams()

  const [isLoading, setIsLoading] = useState(false)
  const [isError, setIsError] = useState(false);

  const fetchMeals = async (targetCalories, diet, excluded) => {
    setIsLoading(true)
    const response = await axios
      .get(
        `${API_BASE_URL}?timeFrame=week&targetCalories=${targetCalories}&diet=${diet}&apiKey=${API_KEY}&excluded=${
          excluded || ""
        }`
      )
      .catch(err => {
        setIsError(true)
      })
    dispatch(setMeals(response.data.week))
    setIsLoading(false)
  }

  useEffect(() => {
    fetchMeals(params.targetCalories, params.diet, params.excluded)
    // eslint-disable-next-line
  }, [params.diet])

  console.log("Meals: ", Object.values(meals))

  return (
    <>
      <h1 className="title mealListing">
        Weekly Meal Planning
      </h1>

      {isError && <div>Something went wrong ...</div>}

      {isLoading ? (
        <div>Loading...</div>
      ) : (
        <div className="ui three column double stackable grid container">
            <MealItem mealList={Object.values(meals)} />
        </div>
      )
      }

    </>
  )
}

export default MealListing
