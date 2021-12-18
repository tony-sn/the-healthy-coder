import React from "react"
import { BrowserRouter as Router, Switch, Route} from "react-router-dom"

import "./styles/App.css"
import Home from "./pages/Home"
import NavBar from "./components/NavBar/NavBar"

import About from "./pages/About"
import Workout from "./pages/Workout"

function App() {
  return (
    <div className="App">
      <Router>
        <NavBar/>
        <Switch>
          <Route exact path="/" component={Home}/>

          <Route path="/about" component={About}/>

          <Route path="/workout">
            <Workout/>
          </Route>

        </Switch>

      </Router>
    </div>
  )
}

export default App
