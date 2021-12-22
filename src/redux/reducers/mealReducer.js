import { ActionType } from "../constants/actionType"

const initialState = {
  meals: [],
}

export const mealReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case ActionType.SET_MEALS:
      return {...state, meals: payload}

    default:
      return state
  }
}
