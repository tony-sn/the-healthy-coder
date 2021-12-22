import React from "react"
import { useSelector } from "react-redux"
import { Link } from "react-redux"

// function MealItem({image, title}) {
//   return (
//     <div className="mealItem">
//       <div style={{ backgroundImage: `url(${image})` }}></div>
//       <h3>{title}</h3>

//     </div>
//   )
// }

function MealItem() {
  const week = useSelector(state => state.allMeals.meals.week)
  // const renderList = week.map(day)

  return (
    <div className="three column wide">
      <div className="ui link cards">
        <div className="card">
          <div className="image"></div>
          <div className="content">
            <div className="header">Title</div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default MealItem
