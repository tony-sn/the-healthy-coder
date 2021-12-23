import React from "react"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"

import "./styles/App.css"
import NavBar from "./components/NavBar_Footer/NavBar"
import Footer from "./components/NavBar_Footer/Footer"
import MealListing from "./components/MealListing"
import MealDetail from "./components/MealDetail"

import Home from "./pages/Home"
import About from "./pages/About"
import Workout from "./pages/Workout"
import Meals from "./pages/Meals"
import Error404 from "./pages/Error404"

function App() {
  return (
    <div className="App">
      <div className="content-container">
        <Router>
          <NavBar />
          <div className="content-wrap">
            <Switch>
              <Route exact path="/" component={Home} />

              <Route exact path="/about" component={About} />

              <Route exact path="/workout" component={Workout} />

              <Route exact path="/meals" component={Meals} />

              <Route exact path="/meals/mealplanning/calories:targetCalories-:diet-:excluded?" component={MealListing} />

              <Route
                exact
                path="/meals/mealplanning/:mealId"
                component={MealDetail}
              />

              <Route path="*" component={Error404} />
            </Switch>
          </div>
          <Footer />
        </Router>
      </div>
    </div>
  )
}

export default App
