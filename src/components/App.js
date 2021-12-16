import React from "react"
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom"

import "../styles/App.css"
import SearchBar from "./SearchBar/SearchBar"
import ExerciseData from "../db/Workout.json"
import About from "./About.jsx"

// TODO: Create Workout Page and link to home page
// TODO : Workout search function, user self create workout session
// TODO : Route for all pages

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/">
            {" "}
            <h1>The Healthy Coder</h1>
              <SearchBar
                placeholder="Enter a workout exercise"
                exercises={ExerciseData.exercises}
              />
            <nav>
              <Link to="/">Home</Link> |&nbsp;
              <Link to="/about">About</Link> |&nbsp;
              {/* <Link to="/workout">Workout</Link> |&nbsp; */}
              {/* <Link to="/meals">Meals</Link> |&nbsp; */}
            </nav>
          </Route>
          <Route path="/about">
            <About/>

          </Route>
          <Route path="/workout/:query">
            <div className="WorkoutPage">
              <h1>Workout</h1>

            </div>
          </Route>
        </Switch>
      </Router>
    </div>
  )
}

export default App
