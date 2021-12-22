import React, { useState, useEffect } from "react"
import store, { remove } from "store"
import HookForm from "../components/HookForm/WorkoutForm"
import { v4 as uuidv4 } from "uuid"

import SearchBar from "../components/SearchBar/SearchBar"
import data from "../db/Workout.json"

import Button from "react-bootstrap/Button"
import "bootstrap/dist/css/bootstrap.min.css"

const STORAGE_KEY_PREFIX = "WORKOUT_LIST_WITH_LOCAL_STORAGE"
const STORAGE_KEY = `${STORAGE_KEY_PREFIX}-workoutList`

function Workout() {
  const [exercises, setExercises] = useState(store.get(STORAGE_KEY) || [])

  useEffect(() => {
    store.set(STORAGE_KEY, exercises)
  }, [exercises])

  function handleExercises(targetExercise) {
    setExercises([...exercises, targetExercise])
  }

  function removeItem(index) {
    const newExerciseList = [...exercises]
    newExerciseList.splice(index, 1)

    setExercises(newExerciseList)
  }

  return (
    <div className="Workout">
      <div className="Workout SearchBar">
        <h1 className="text-center title">Workout Planning</h1>

        <SearchBar
          placeholder="Enter an exercise/muscle group"
          exercises={data.exercises}
          handleTargetExercise={handleExercises}
        />
      </div>

      <div className="WorkoutItem">
        <div className="ui three column double stackable grid container">
          {exercises.length > 0 &&
            exercises.map((exercise, index) => {
              const { name, muscle_group, reps, session, weight } = exercise
              return (
                <div key={uuidv4()} className="column">
                  <div className="ui segment" onClick={() => removeItem(index)}>
                    <div className="header">{name}</div>
                    <div className="meta">Muscle Group: {muscle_group}</div>
                    <div className="meta">Reps: {reps}</div>
                    <div className="meta">Session: {session}</div>
                    <div className="meta">Weight: {weight}</div>
                  </div>
                </div>
              )
            })}
        </div>

        {/* <div class="column">
            <div class="ui link cards">
              <div className="card">
                <div className="image"></div>
                <div className="content myContent">
                  <div className="header">Exercise</div>
                  <div className="meta">Dumbbell Chest Fly</div>
                  <div className="meta">Muscle Group: Chest</div>
                  <div className="meta">Reps: 12</div>
                  <div className="meta">Session: 3</div>
                  <div className="meta">Weight: 10kg</div>
                </div>
              </div>
            </div>
          </div>

          <div class="column">
            <div class="ui link cards">
              <div className="card">
                <div className="image"></div>
                <div className="content myContent">
                  <div className="header">Exercise</div>
                  <div className="meta">Dumbbell Chest Fly</div>
                  <div className="meta">Muscle Group: Chest</div>
                  <div className="meta">Reps: 12</div>
                  <div className="meta">Session: 3</div>
                  <div className="meta">Weight: 10kg</div>
                </div>
              </div>
            </div>
          </div> */}
        {exercises.length > 0 && (
          <button
            className="ui red button removeBtn"
            onClick={() => setExercises([])}
          >
            Remove All
          </button>
        )}
      </div>
    </div>
  )
}

export default Workout
