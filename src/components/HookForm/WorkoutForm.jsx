import React from "react"
import { useForm } from "react-hook-form"
import ExerciseData from "../../db/Workout.json"
import { v4 as uuidv4 } from "uuid"

import "./HookForm.css"

function WorkoutForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm()

  const onSubmit = data => console.log(data)

  return (
    <div className="HookForm WorkoutForm">
      <form onSubmit={handleSubmit(onSubmit)}>
        <input
          className="input"
          {...register("name", { required: "This is required!" })}
          placeholder="Exercise Name"
        ></input>
        {<p>{errors.name?.message}</p>}

        <select {...register("muscle_group")}>
          {ExerciseData.muscle_group.map(muscle => {
            return (
              <option key={uuidv4()} value={muscle.value}>
                {muscle.label}
              </option>
            )
          })}
        </select>

        <input
          className="input"
          {...register("reps", {
            required: "This is required!",
            valueAsNumber: true,
            min: { value: 5, message: "Number must be more than 5" },
          })}
          placeholder="Number of reps"
        ></input>
        {<p>{errors.reps?.message}</p>}

        <select
          {...register("session", { required: true, valueAsNumber: true })}
          defaultValue="Session"
        >
          <option disabled>Session</option>
          <option>1</option>
          <option>2</option>
          <option>3</option>
          <option>4</option>
          <option>5</option>
        </select>

        <select {...register("weight")} defaultValue="Weight Amount (Kg)">
          <option disabled>Weight Amount (Kg)</option>
          <option value="2kg">2</option>
          <option value="4kg">4</option>
          <option value="6kg">6</option>
          <option value="8kg">8</option>
          <option value="10kg">10</option>
          <option value="12kg">12</option>
          <option value="15kg">15</option>
          <option value="bodyweight">Bodyweight</option>
        </select>

        <input type="submit" value="Submit" className="btn btn-primary" />
      </form>
    </div>
  )
}

export default WorkoutForm
