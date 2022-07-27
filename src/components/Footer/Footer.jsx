import React from "react";
import "./Footer.css";
import wave from "../../img/wave.png";
import Facebook from "@iconscout/react-unicons/icons/uil-facebook";
import Github from "@iconscout/react-unicons/icons/uil-github";
function Footer() {
  return (
    <div className="footer">
      <img src={wave} alt="" style={{ width: "100%" }} />
      <div className="f-contact">
        <span>Yitzhakkasie@gmail.com</span>
      </div>
    </div>
  );
}

export default Footer;
