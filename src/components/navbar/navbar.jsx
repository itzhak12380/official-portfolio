import React from "react";
import "./navbar.css";
function Navbar() {
  return (
    <div className="n-wrapper">
      <div className="n-left">
        <div className="n-name">Yitzhak</div>
        <span>toggle</span>
      </div>
      <div className="n-right">
        <div className="n-list">
          <ul >
            <li>Home</li>
            <li>Expirens</li>
            <li>Portfolio</li>
            <li>Testimonial</li>
          </ul>
        </div>
          <button className="button n-button">contact us</button>
      </div>
    </div>
  );
}

export default Navbar;
