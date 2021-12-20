import React from 'react'

function MealItem({image, title}) {
  return (
    <div className="mealItem">
      <div style={{ backgroundImage: `url(${image})` }}></div>
      <h3>{title}</h3>

    </div>
  )
}

export default MealItem
