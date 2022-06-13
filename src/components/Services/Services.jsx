import React from "react";
import "./Services.css";
import HeartEmoji from "../../img/heartemoji.png";
import Glasses from "../../img/glasses.png";
import Humble from "../../img/humble.png";
import Card from "../card/Card";
export default function Service() {
  return (
    <div className="Services">
      {/*  left side */}
      <div className="awesome">
        <span>My Awesome</span>
        <span>Serviecs</span>
        <span>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem
          <br />
          esse inventore similique,
        </span>
        <button className="button s-button"> Download CV </button>
        <div className="blur s-blur" style={{ background: "#ABF1FF94" }}></div>
      </div>
      {/* right side */}
      <div className="cards">
        <div style={{left:'14rem'}}>
          <Card 
          emoji={HeartEmoji}
          heading={'design'}
          detali={'Figma, photoshop'}
          />
        </div>
        {/* secound card */}
        <div style={{top:'12rem', left:'-4rem'}}>
          <Card 
          emoji={HeartEmoji}
          heading={'Developer'}
          detali={'html,css,javascript,react,nodejs,c#'}
          />
        </div>
        {/* thierd card */}
        <div style={{top:'19rem', left:'12rem'}}>
          <Card 
          emoji={HeartEmoji}
          heading={'Developer'}
          detali={'html,css,javascript,react,nodejs,c#'}
          />
        </div>
        
      </div>
    </div>
  );
}
