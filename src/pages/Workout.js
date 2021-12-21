import React from "react"

import SearchBar from "../components/SearchBar/SearchBar"
import data from "../db/Workout.json"

import HookForm from "../components/HookForm/WorkoutForm"

import Button from "react-bootstrap/Button"
import "bootstrap/dist/css/bootstrap.min.css"

function Workout() {
  return (
    <div className="Workout">
      <div>
        <h1 className="text-center title">Choose your first workout</h1>

        <SearchBar
          placeholder="Enter an exercise/muscle group"
          exercises={data.exercises}
        />

      </div>

      <hr />
    </div>
  )
}

export default Workout
