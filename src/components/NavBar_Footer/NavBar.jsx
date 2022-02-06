import React from "react"
import { Link } from "react-router-dom"

import TheHealthyDev from "../../assets/img/TheHealthyDevLighterLogo.svg"
import HomeIcon from "@material-ui/icons/Home"
import InfoIcon from "@material-ui/icons/Info"
import FitnessCenterIcon from "@material-ui/icons/FitnessCenter"
import RestaurantIcon from "@material-ui/icons/Restaurant"

import "./NavBar.css"


function NavBar() {
    return (
    <div className="myNavbar">
      <div className="container">
        <div className="leftSide">
          <Link to="/">
            <img src={TheHealthyDev} alt="Logo" />
          </Link>
          <div className="hiddenLinks">
            <Link to="/"><HomeIcon/></Link>
            <Link to="/about"><InfoIcon/></Link>
            <Link to="/workout"><FitnessCenterIcon/></Link>
            <Link to="/meals"><RestaurantIcon/></Link>
          </div>
        </div>
        <div className="rightSide">
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/workout">Workout</Link>
          <Link to="/meals">Meals</Link>
        </div>
      </div>
    </div>
  )
}

export default NavBar
