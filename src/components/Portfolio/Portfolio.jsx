import React, { useContext } from "react";
import "./Portfolio.css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import portfolioApp from "../../img/portfolioApp.png";
import Ecommerce from "../../img/ecommercePro.png";
import weatherApp from "../../img/weatherApp.png";
import calaulaterApp from "../../img/calculaterApp.png";
import { themContext } from "../../context/contaxt";

function Portfolio() {
  const them = useContext(themContext);
  const darkMode = them.state.darkMode;
  return (
    <div className="portfolio" id="Portfolio">
      {/* heading */}
      <span style={darkMode ? { color: "white" } : { color: "" }}>
        Recent Projects
      </span>
      <span>Portfolio</span>
      {/* silder */}
      <Swiper
        spaceBetween={30}
        slidesPerView={3}
        grabCursor={true}
        className="portfolio-slider"
      >
        <SwiperSlide>
          <a href="https://ecommerce-kasie.herokuapp.com/" target="blank">
            <img src={Ecommerce} alt="" />
          </a>
        </SwiperSlide>
        <SwiperSlide>
          <a href="https://itzhak12380.github.io/Weather-app/" target="blank">
            <img src={weatherApp} alt="" />
          </a>
        </SwiperSlide>
        <SwiperSlide>
          <a href="https://itzhak12380.github.io/portfolio/" target="blank">
            <img src={portfolioApp} alt="" />
          </a>
        </SwiperSlide>
        <SwiperSlide>
          <a href="https://itzhak12380.github.io/calculator/" target="blank">
            <img src={calaulaterApp} alt="" />
          </a>
        </SwiperSlide>
      </Swiper>
    </div>
  );
}

export default Portfolio;
