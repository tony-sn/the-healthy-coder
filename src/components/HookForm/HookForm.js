import React from "react"
import { useForm } from "react-hook-form"
import ExerciseData from "../../db/Workout.json"
import { v4 as uuidv4 } from "uuid"

function HookForm() {
  const { register, handleSubmit } = useForm()
  // const [result, setResult] = useState("")
  const onSubmit = data => console.log(data)

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input {...register("name")} placeholder="Exercise Name"></input>
      <select {...register("muscle_group")}>
        {ExerciseData.muscle_group.map(muscle => {
          return (
            <option key={uuidv4()} value={muscle.value}>
              {muscle.label}
            </option>
          )
        })
        }
      </select>

      <input type="submit" value="Submit" />
    </form>
  )
}

export default HookForm
