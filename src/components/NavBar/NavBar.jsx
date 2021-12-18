import React, { useState } from "react"
import { Link } from "react-router-dom"
import TheHealthyCoder from "../../assets/img/TheHealthyCoderLighterLogo.svg"
// import TheHealthyCoder from "../../assets/img/TheHealthyCoderLogo.png"
import ReorderIcon from "@material-ui/icons/Reorder"
import HomeIcon from "@material-ui/icons/Home"
import InfoIcon from "@material-ui/icons/Info"
import FitnessCenterIcon from "@material-ui/icons/FitnessCenter"
import RestaurantIcon from "@material-ui/icons/Restaurant"

// import Container from "react-bootstrap/Container"

// import { useMediaQuery } from "react-responsive"

import "./NavBar.css"

function NavBar() {
  const [openLinks, setOpenLinks] = useState(false)

  const handleToggleNav = () => {
    setOpenLinks(!openLinks)
  }

  return (
    <div className="myNavbar">
      <div className="container">
        <div className="leftSide" id={openLinks ? "open" : "close"}>
          <Link to="/">
            <img src={TheHealthyCoder} alt="Logo" />
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
          <button onClick={handleToggleNav}>
            <ReorderIcon />
          </button>
        </div>
      </div>
    </div>
  )
}

export default NavBar
