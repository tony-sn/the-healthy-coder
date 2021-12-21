import { ActionType } from "../constants/actionType"

const initialState = {
  meals: [{
      "id": 655786,
      "imageType": "jpg",
      "title": "Persimmons Pumpkin Orange Smoothie With Chia Seeds",
      "readyInMinutes": 45,
      "servings": 3,
      "sourceUrl": "https://spoonacular.com/persimmons-pumpkin-orange-smoothie-with-chia-seeds-655786"
  }],
}

export const mealReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case ActionType.SET_MEALS:
      return state

    default:
      return state
  }
}
