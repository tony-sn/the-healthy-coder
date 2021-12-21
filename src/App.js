import React from "react"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"

import "./styles/App.css"
import NavBar from "./components/NavBar/NavBar"
import Footer from "./components/Footer"
import MealListing from "./components/MealListing"
import MealDetail from "./components/MealDetail"

import Home from "./pages/Home"
import About from "./pages/About"
import Workout from "./pages/Workout"
import Meals from "./pages/Meals"

function App() {
  return (
    <div className="App">
      <Router>
        <NavBar />
        <Switch>
          <Route exact path="/" component={Home} />

          <Route path="/about" component={About} />

          <Route path="/workout" component={Workout} />

          <Route path="/meals" component={Meals} />

          <Route exact path="/meals/mealplanning" component={MealListing} />

          <Route
            exact
            path="/meals/mealplanning/:mealId"
            component={MealDetail}
          />

          <Route>404,
            {" "}
            Page Not Found!
          </Route>
        </Switch>

        <Footer />
      </Router>
    </div>
  )
}

export default App
