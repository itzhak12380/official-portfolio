import React, { useContext } from "react";
import "./Portfolio.css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import portfolioApp from "../../img/portfolioApp.png";
import Ecommerce from "../../img/ecommercePro.png";
import weatherApp from "../../img/weatherApp.png";
import calaulaterApp from "../../img/calculaterApp.png";
import { themContext } from "../../context/contaxt";
import { Pagination } from "swiper";

function Portfolio() {
  const them = useContext(themContext);
  const darkMode = them.state.darkMode;
  const pagination = {
    clickable: true,
    renderBullet: function (index, className) {
      return '<li  class="' + className + ' ">' + "</li>";
    },
    
  };
  return (
    <div className="portfolio" id="Portfolio">
      {/* heading */}
      <span style={darkMode ? { color: "white" } : { color: "" }}>
        Recent Projects
      </span>
      <span>Portfolio</span>
      <span>press the image to view the project</span>
      {/* silder */}
      <Swiper
        pagination={pagination}
        modules={[Pagination]}
        className="portfolio-slider"
        spaceBetween={30}
        slidesPerView={3}
        breakpoints={{
          380: {
            slidesPerView: 1,
          },
          900: {
            slidesPerView: 3,
          },
        }}
      >
        <SwiperSlide>
          <h4>
            Github -{" "}
            <a href="https://github.com/itzhak12380/TypeScritpt-Ecommerce">
              source code
            </a>{" "}
          </h4>
          <a href="https://ecommerce-kasie.herokuapp.com/" target="blank">
            <img src={Ecommerce} alt="" />
          </a>
        </SwiperSlide>
        <SwiperSlide>
          <h4>
            Github -{" "}
            <a href="https://github.com/itzhak12380/Weather-app">source code</a>{" "}
          </h4>
          <a href="https://itzhak12380.github.io/Weather-app/" target="blank">
            <img src={weatherApp} alt="" />
          </a>
        </SwiperSlide>
        <SwiperSlide>
          <h4>
            Github -{" "}
            <a href="https://github.com/itzhak12380/portfolio">source code</a>{" "}
          </h4>
          <a href="https://itzhak12380.github.io/portfolio/" target="blank">
            <img src={portfolioApp} alt="" />
          </a>
        </SwiperSlide>
        <SwiperSlide>
          <h4>
            Github -{" "}
            <a href="https://github.com/itzhak12380/calculator">source code</a>{" "}
          </h4>
          <a href="https://itzhak12380.github.io/calculator/" target="blank">
            <img src={calaulaterApp} alt="" />
          </a>
        </SwiperSlide>
      </Swiper>
      {/* <span>swipe right to see other projects</span> */}
    </div>
  );
}

export default Portfolio;
