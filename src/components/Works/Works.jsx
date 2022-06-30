import React, { useContext } from "react";
import "./Works.css";
import Upwork from "../../img/Upwork.png";
import Fiverr from "../../img/fiverr.png";
import Amazon from "../../img/amazon.png";
import Shopify from "../../img/Shopify.png";
import Facebook from "../../img/Facebook.png";
import { themContext } from "../../context/contaxt";
import { motion } from "framer-motion";
function Works() {
  const them = useContext(themContext);
  const darkMode = them.state.darkMode;
  return (
    <div className="works">
      <div className="awesome">
        <span style={darkMode ? { color: "white" } : { color: "" }}>
          Works for all these
        </span>
        <span>Brands & clients</span>
        <span>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem
          <br />
          esse inventore similique,
          <br />
          esse inventore similique,
          <br />
          esse inventore similique,
        </span>

        <button className="button s-button"> Hire me </button>

        <div className="blur s-blur" style={{ background: "#ABF1FF94" }}></div>
      </div>
      {/*  right side */}
      <div className="w-right">
        <motion.div
          initial={{ rotate: 45 }}
          whileInView={{ rotate: 0 }}
          viewport={{ margin: "-40px" }}
          transition={{duration:3.5,type:'spring'}}
          className="w-mainCircle"
        >
          <div className="w-secCircle">
            <img src={Upwork} alt="" />
          </div>
          <div className="w-secCircle">
            <img src={Fiverr} alt="" />
          </div>
          <div className="w-secCircle">
            <img src={Amazon} alt="" />
          </div>
          <div className="w-secCircle">
            <img src={Shopify} alt="" />
          </div>
          <div className="w-secCircle">
            <img src={Facebook} alt="" />
          </div>
        </motion.div>
        <div className="w-backCircle blueCircle"></div>
        <div className="w-backCircle yellowCircle"></div>
      </div>
    </div>
  );
}

export default Works;
