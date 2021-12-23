import React, { useEffect } from "react"
import parse from "html-react-parser"
import { useParams } from "react-router-dom"
import axios from "axios"
import { useDispatch, useSelector } from "react-redux"
import { selectedMeal, removeSelectedMeal } from "../redux/actions/MealActions"

const API_KEY = process.env.REACT_APP_SPOONACULAR_API_KEY

function MealDetail() {
  const meal = useSelector(state => state.meal)
  const { title, summary, image, spoonacularScore, readyInMinutes, servings } =
    meal
  const { mealId } = useParams()
  const dispatch = useDispatch()

  const fetchMealDetail = async () => {
    const response = await axios
      .get(
        `https://api.spoonacular.com/recipes/${mealId}/information?apiKey=${API_KEY}
        `
      )
      .catch(err => console.error)

    dispatch(selectedMeal(response.data))
  }

  useEffect(() => {
    if (mealId && mealId !== "") fetchMealDetail()
    return () => {
      dispatch(removeSelectedMeal())
    }
    // eslint-disable-next-line
  }, [mealId])

  return (
    <div className="mealDetail">
      <h1>Meal Detail</h1>
      <div className="ui grid container">
        {Object.keys(meal).length === 0 ? (
          <div>...Loading</div>
        ) : (
          <div className="ui placeholder segment">
            <div className="ui two column stackable center aligned grid">
              <div className="ui vertical divider">AND</div>
              <div className="middle aligned row">
                <div className="column lp">
                  <img className="ui fluid image" src={image} alt={title} />
                </div>
                <div className="column rp">
                  <h1>{title}</h1>
                  <h2>
                    <button
                      className={`ui tag label ${
                        spoonacularScore >= 60 ? "teal" : "red"
                      } `}
                    >
                      Spoonacular Score: {spoonacularScore}
                    </button>
                  </h2>
                  <h3 className="ui brown block header">
                    Ready In Minutes: {readyInMinutes} Mins
                    <br />
                    Servings: {servings} people
                  </h3>
                  <p>{parse(summary)}</p>
                  <div className="ui vertical animated button" tabIndex="0">
                    <a
                      href="https://www.spoonacular.com"
                      style={{ textDecoration: "none" }}
                    >
                      <div className="hidden content">
                        <i className="sync icon"></i>
                      </div>
                      <div className="visible content">READ MORE</div>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

export default MealDetail
