import { combineReducers } from "@reduxjs/toolkit";
import { mealReducer } from "./mealReducer";

const reducers = combineReducers({
  allMeals: mealReducer,
})

export default reducers