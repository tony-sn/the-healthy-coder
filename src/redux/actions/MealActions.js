import { ActionType } from "../constants/actionType"

export const setMeals = (meals) => {
  return {
    type: ActionType.SET_MEALS,
    payload: meals,
  }
}

export const selectedMeal = (meal) => {
  return {
    type: ActionType.SELECTED_MEAL,
    payload: meal,
  }
}

export const removeSelectedMeal = () => {
  return {
    type: ActionType.REMOVE_SELECTED_MEAL,
  }
}