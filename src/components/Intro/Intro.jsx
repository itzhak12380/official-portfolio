import React, { useContext } from "react";
import FloatingDiv from "../FloatingDiv/FloatingDiv";
import "./Intro.css";
import Github from "../../img/github.png";
import LinkedIn from "../../img/linkedin.png";
import Facebook from "@iconscout/react-unicons/icons/uil-facebook";
import Vector1 from "../../img/Vector1.png";
import Vector2 from "../../img/Vector2.png";
import boy from "../../img/profilePic1.png";
import thumbup from "../../img/thumbup.png";
import Crown from "../../img/crown.png";
import glassesimoji from "../../img/glassesimoji.png";
import { themContext } from "../../context/contaxt";
import { motion } from "framer-motion";
import { Link } from "react-scroll";

function Intro() {
  const transition = { duration: 2, type: "spring" };
  const them = useContext(themContext);
  const darkMode = them.state.darkMode;
  return (
    <div className="intro">
      <div className="i-left">
        <div className="i-name">
          <span style={darkMode ? { color: "white" } : { color: "" }}>
            Hey! I Am{" "}
          </span>
          <span>Yitzhak Kasie</span>
          <span>
            Full Stack Developer, experience through personal projects written
            on javascript , with type-script react and node js, very efficient
            and fast learner
          </span>
        </div>
        <Link to="Contact" spy={true} smooth={true}>
          <button className=" i-button button"> Hire me</button>
        </Link>
        <div className="i-icons">
          <a href="https://github.com/itzhak12380" target="blank">
            <img src={Github} alt="" />
          </a>
          <a
            href="https://www.linkedin.com/in/itzhak-kasie-01457b203/"
            target="blank"
          >
            <img src={LinkedIn} alt="" />
          </a>
          <a href="https://www.facebook.com/iascc.kasay/" target="blank">
            <Facebook color="#FCA61F" size="5rem" />
          </a>
        </div>
      </div>
      <div className="i-right">
        <img src={Vector1} alt="" />
        <img src={Vector2} alt="" />
        <img src={boy} alt="" />
        <motion.img
          initial={{ left: "-36%" }}
          whileInView={{ left: "-24%" }}
          transition={transition}
          src={glassesimoji}
          alt=""
          className="Floating-div"
        />
        <motion.div
          initial={{ top: "-4%", left: "74%" }}
          whileInView={{ left: "64%" }}
          transition={transition}
          className="Floating-div"
        >
          <FloatingDiv image={Crown} text1="web" text2="developer" />
        </motion.div>
        <motion.div
          initial={{ left: "9rem", top: "18rem" }}
          whileInView={{ left: "0rem" }}
          transition={transition}
          className="Floating-div"
        >
          <FloatingDiv image={thumbup} text1="Bext Desighn" text2="Award" />
        </motion.div>
        <div
          className="blur"
          style={{ background: "rgb(238, 210, 255)" }}
        ></div>
        <div
          className="blur"
          style={{
            background: "#C1F5FF",
            top: "17rem",
            width: "21rem",
            height: "11rem",
            left: "-9rem",
          }}
        ></div>
      </div>
    </div>
  );
}

export default Intro;
