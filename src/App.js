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
import Error404 from "./pages/Error404"

function App() {
  return (
    <div className="App">
      <Router>
        <NavBar />
        <Switch>
          <Route exact path="/" component={Home} />

          <Route exact path="/about" component={About} />

          <Route exact path="/workout" component={Workout} />

          <Route exact path="/meals" component={Meals} />

          <Route exact path="/meals/mealplanning" component={MealListing} />

          <Route
            exact
            path="/meals/mealplanning/:mealId"
            component={MealDetail}
          />

          <Route path="*" component={Error404}/>

        </Switch>

        <Footer />
      </Router>
    </div>
  )
}

export default App
