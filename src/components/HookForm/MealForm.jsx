import React from "react"
import { useForm } from "react-hook-form"
import { useHistory } from "react-router-dom"
import { v4 as uuidv4 } from "uuid"
import optionData from "../../db/dietOptions.json"

import "./HookForm.css"

function MealForm() {
  const history = useHistory()

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm()

  const capitalise = (str) => {
    const lower = str.toLowerCase()
    return str.charAt(0).toUpperCase() + lower.slice(1)
  }

  const onSubmit = (data, ev) => {
    ev.preventDefault()
    history.push(
      `/meals/mealplanning/calories${data.targetCalories}-${data.diet}-no${
        capitalise(data?.excluded) || ""}`
    )
  }

  return (
    <div className="HookForm MealForm">
      <form onSubmit={handleSubmit(onSubmit)}>
        <input
          className="input"
          {...register("targetCalories", {
            required: "This is required",
            valueAsNumber: true,
          })}
          placeholder="Your Target Calories: e.g 2000"
        ></input>
        {<p>{errors.targetCalories?.message}</p>}

        <select {...register("diet", { required: true })}>
          <option disabled>Diet Type</option>
          {optionData.dietOptions.map(option => {
            return (
              <option key={uuidv4()} value={option.value}>
                {option.label}
              </option>
            )
          })}
        </select>

        <input
          className="input"
          {...register("excluded" || null)}
          placeholder="Excluded: e.g shellfish, olives..."
        ></input>

        <input type="submit" value="Submit" className="btn btn-primary" />
      </form>
    </div>
  )
}

export default MealForm
