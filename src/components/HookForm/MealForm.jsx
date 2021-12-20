import React, { useState } from "react"
import { useForm } from "react-hook-form"
import { v4 as uuidv4 } from "uuid"
import optionData from "../../db/dietOptions.json"

import "./HookForm.css"

function HookForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm()

  console.log(errors)
  const [result, setResult] = useState("")
  const onSubmit = data => console.log(data)

  return (
    <div className="HookForm MealForm">
      <form onSubmit={handleSubmit(onSubmit)}>
        <input
          className="input"
          {...register("targetCalories", {
            required: "This is required!",
            valueAsNumber: true,
          })}
          placeholder="Your Target Calories"
        ></input>
        {<p>{errors.targetCalories?.message}</p>}

        <select {...register("diet")} defaultValue="Diet Type">
          <option disabled>Diet Type</option>
          {optionData.dietOptions.map(option => {
            return <option key={uuidv4()} value={option.value}>{option.label}</option>
          })}
        </select>

        <input className="input"
        {...register("excluded")}
        placeholder="Excluded: e.g shellfish, olives..."
        ></input>

        <input type="submit" value="Submit" className="btn btn-primary" />
      </form>
    </div>
  )
}

export default HookForm
