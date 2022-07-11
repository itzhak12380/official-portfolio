import React, { useContext } from "react";
import "./Services.css";
import HeartEmoji from "../../img/heartemoji.png";
import Glasses from "../../img/glasses.png";
import Humble from "../../img/humble.png";
import Card from "../card/Card";
import Resume from "../../Resume/Resume.pdf";
import { themContext } from "../../context/contaxt";
import { motion } from "framer-motion";
export default function Service() {
  const them = useContext(themContext);
  const darkMode = them.state.darkMode;
  const duration = { duration: 1, type: "spring" };
  return (
    <div className="Services" id="Services">
      {/*  left side */}
      <div className="awesome">
        <span style={darkMode ? { color: "white" } : { color: "var(--black)" }}>
          My Awesome
        </span>
        <span>Serviecs</span>
        <span>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem
          <br />
          esse inventore similique,
        </span>
        <a href={Resume} download>
          <button className="button s-button"> Download CV </button>
        </a>
        <div className="blur s-blur" style={{ background: "#ABF1FF94" }}></div>
      </div>
      {/* right side */}
      <div className="cards">
        <motion.div
          whileInView={{ left: "14rem" }}
          initial={{ left: "25%" }}
          transition={duration}
          style={{ left: "14rem" }}
        >
          <Card
            emoji={HeartEmoji}
            heading={"design"}
            detali={"Figma, photoshop"}
          />
        </motion.div>
        {/* secound card */}
        <motion.div
          initial={{ left: "-11rem", top: "12rem" }}
          whileInView={{ left: "-4rem" }}
          transition={duration}
          style={{ top: "12rem", left: "-4rem" }}
        >
          <Card
            emoji={HeartEmoji}
            heading={"Front-end"}
            detali={"html,css,javascript,react,angular"}
          />
        </motion.div>
        {/* thierd card */}
        <motion.div
          initial={{ top: "19rem", left: "25rem" }}
          whileInView={{ left: "12rem" }}
          transition={duration}
          style={{ top: "19rem", left: "12rem" }}
        >
          <Card
            emoji={HeartEmoji}
            heading={"Back-end"}
            detali={"nodejs,MongoDb,Sql,c#"}
          />
        </motion.div>
        <div
          className="blur s-blur2"
          style={{ background: "var(--purple" }}
        ></div>
      </div>
    </div>
  );
}
