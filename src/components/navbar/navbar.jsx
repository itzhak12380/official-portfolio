import React, { useContext } from "react";
import "./navbar.css";
import Toggle from "../Toggle/Toggle";
import { Link } from "react-scroll";
import { themContext } from "../../context/contaxt";

function Navbar() {
  const them = useContext(themContext);
  const darkMode = them.state.darkMode;
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
              <li style={darkMode ? { color: "#FAF5E4" } : { color: "" }}>
                Home
              </li>
            </Link>
            <Link smooth={true} to="Services" spy={true}>
              <li style={darkMode ? { color: "#FAF5E4" } : { color: "" }}>
                Services
              </li>
            </Link>
            <Link smooth={true} to="Experience" spy={true}>
              <li style={darkMode ? { color: "#FAF5E4" } : { color: "" }}>
                Experience
              </li>
            </Link>
            <Link smooth={true} to="Portfolio" spy={true}>
              <li style={darkMode ? { color: "#FAF5E4" } : { color: "" }}>
                Portfolio
              </li>
            </Link>
            {/* <Link smooth={true} to="Testimonial" spy={true}>
              <li>Testimonial</li>
            </Link> */}
          </ul>
        </div>
        <Link smooth={true} to="Contact" spy={true}>
          <button className="button n-button">contact </button>
        </Link>
      </div>
    </div>
  );
}

export default Navbar;
