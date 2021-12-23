import { ActionType } from "../constants/actionType"

const initialState = {
  meals: [],
}

export const mealReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case ActionType.SET_MEALS:
      return { ...state, meals: payload }

    default:
      return state
  }
}

export const selectedMealReducer = (state = {}, { type, payload }) => {
  switch (type) {
    case ActionType.SELECTED_MEAL:
      return { ...state, ...payload }

    case ActionType.REMOVE_SELECTED_MEAL:
      return {}

    default:
      return state
  }
}
