import React from "react"
import { Link } from "react-router-dom"
import TheHealthyDev from "../../assets/img/TheHealthyDevLogo.png"
import FacebookIcon from '@material-ui/icons/Facebook';
import InstagramIcon from '@material-ui/icons/Instagram';
import TwitterIcon from '@material-ui/icons/Twitter';
import LinkedInIcon from '@material-ui/icons/LinkedIn';


function Footer() {
  return (
    <div className="myFooter">
      <footer className="footer--pin">
        <div className="container">
          <div className="leftSide">
            <Link to="/">
              <img src={TheHealthyDev} alt="Logo" />
            </Link>
            <p className="copyright"> &copy; The Healthy Dev 2022</p>
          </div>
          <div className="rightSide socialMedia">
            <a href="https://www.facebook.com/"><FacebookIcon/></a>
            <a href="https://www.twitter.com/"><TwitterIcon/></a>
            <a href="https://www.instagram.com/"><InstagramIcon/></a>
            <a href="https://www.linkedin.com/"><LinkedInIcon/></a>
          </div>
        </div>
      </footer>
    </div>

  )
}

export default Footer
