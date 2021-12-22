import React from "react"
import { useSelector } from "react-redux"

// function MealItem({image, title}) {
//   return (
//     <div className="mealItem">
//       <div style={{ backgroundImage: `url(${image})` }}></div>
//       <h3>{title}</h3>

//     </div>
//   )
// }

function MealItem() {
  const meals = useSelector(state => state.allMeals.meals)
  const { id, title } = meals[0]
  return (
    <div className="three column wide">
      <div className="ui link cards">
        <div className="card">
          <div className="image"></div>
          <div className="content">
            <div className="header">{title}</div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default MealItem
