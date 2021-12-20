import React, { useState } from "react"
// import { Link } from "react-router-dom"

import SearchBar from "../components/SearchBar/SearchBar"
import ExerciseData from "../db/Workout.json"

import HookForm from "../components/HookForm/HookForm"

import Button from "react-bootstrap/Button"
import "bootstrap/dist/css/bootstrap.min.css"

// TODO: Save state and convert data to display
// TODO :

function Workout() {
  const [useSearchBar, setUseSearchBar] = useState(true)

  const handleSearchBar = () => {
    setUseSearchBar(!useSearchBar)
  }

  return (
    <div className="Workout">
      <div className={useSearchBar ? "show" : "hide"}>

        <h2 className="text-center">Choose your first workout</h2>

        <SearchBar
          placeholder="Enter an exercise/muscle group"
          exercises={ExerciseData.exercises}
        />

        <h2 className="text-center mt-5 mb-3">Or create your own exercise </h2>

        <div className="wrapper">
          <Button
            variant="primary"
            onClick={handleSearchBar}
            className="m-auto d-block"
          >
            Create
          </Button>
        </div>

        <hr />
      </div>

      {
        useSearchBar === false && <HookForm/>
      }

    </div>
  )
}

export default Workout
