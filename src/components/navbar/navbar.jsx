import React from "react";
import "./navbar.css";
import Toggle from "../Toggle/Toggle";
import { Link } from "react-scroll";
function Navbar() {
  return (
    <div className="n-wrapper">
      <div className="n-left">
        <div className="n-name">Yitzhak</div>
        <Toggle />
      </div>
      <div className="n-right">
        <div className="n-list">
          <ul>
            <Link smooth={true} to="Navbar" spy={true}>
              <li>Home</li>
            </Link>
            <Link smooth={true} to="Services" spy={true}>
              <li>Services</li>
            </Link>
            <Link smooth={true} to="Experience" spy={true}>
              <li>Experience</li>
            </Link>
            <Link smooth={true} to="Portfolio" spy={true}>
              <li>Portfolio</li>
            </Link>
            <Link smooth={true} to="Testimonial" spy={true}>
              <li>Testimonial</li>
            </Link>
          </ul>
        </div>
        <button className="button n-button">contact </button>
      </div>
    </div>
  );
}

export default Navbar;
