import React from "react"
import { BrowserRouter as Router, Switch, Route} from "react-router-dom"

import "./styles/App.css"
import Home from "./pages/Home"
import NavBar from "./components/NavBar/NavBar"
// import SearchBar from "./SearchBar/SearchBar"
// import ExerciseData from "../db/Workout.json"
import About from "./pages/About"

// TODO: Create Workout Page and link to home page
// TODO : Workout search function, user self create workout session
// TODO : Route for all pages

function App() {
  return (
    <div className="App">
      <Router>
        <NavBar/>
        <Switch>
          <Route exact path="/" component={Home}/>

          <Route path="/about">
            <About />
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
