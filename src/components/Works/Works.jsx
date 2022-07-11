import React, { useContext } from "react";
import "./Works.css";
import Upwork from "../../img/nodejs.png";
import react from "../../img/reactjs.png";
import javascript from "../../img/javascript.jpg";
import css from "../../img/css.png";
import angular from "../../img/angular.png";
import { themContext } from "../../context/contaxt";
import { motion } from "framer-motion";
function Works() {
  const them = useContext(themContext);
  const darkMode = them.state.darkMode;
  return (
    <div className="works">
      <div className="awesome">
        <span style={darkMode ? { color: "white" } : { color: "" }}>
          learned this lenguages
          <br />
          /libers
        </span>
        <span>FrontEnd & Backend</span>

        <button className="button s-button"> Hire me </button>

        <div className="blur s-blur" style={{ background: "#ABF1FF94" }}></div>
      </div>
      {/*  right side */}
      <div className="w-right">
        <motion.div
          initial={{ rotate: 45 }}
          whileInView={{ rotate: 0 }}
          viewport={{ margin: "-40px" }}
          transition={{ duration: 3.5, type: "spring" }}
          className="w-mainCircle"
        >
          <div className="w-secCircle">
            <img src={Upwork} alt="" />
          </div>
          <div className="w-secCircle">
            <img src={react} alt="" />
          </div>
          <div className="w-secCircle">
            <img src={javascript} alt="" />
          </div>
          <div className="w-secCircle">
            <img src={css} alt="" />
          </div>
          <div className="w-secCircle">
            <img src={angular} alt="" />
          </div>
        </motion.div>
        <div className="w-backCircle blueCircle"></div>
        <div className="w-backCircle yellowCircle"></div>
      </div>
    </div>
  );
}

export default Works;
