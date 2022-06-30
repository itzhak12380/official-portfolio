import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import portfolioPic1 from "../../img/profile1.jpg";
import portfolioPic2 from "../../img/profile2.jpg";
import portfolioPic3 from "../../img/profile3.jpg";
import portfolioPic4 from "../../img/profile4.jpg";
import { Pagination } from "swiper";
import "./Testimonial.css";
import "swiper/css/pagination";
import "swiper/css";
function Testimonial() {
  const clients = [
    {
      img: portfolioPic1,
      review:
        "  Lorem ipsum dolor, sit amet consectetur adipisicing elit. Hic ipsum recusandae aspernatur architecto, odit a adipisci placeat ullam cumque dolorum consequatur blanditiis vitae voluptas modi minima temporibus voluptatem totam repellat",
    },
    {
      img: portfolioPic2,
      review:
        "  Lorem ipsum dolor, sit amet consectetur adipisicing elit. Hic ipsum recusandae aspernatur architecto, odit a adipisci placeat ullam cumque dolorum consequatur blanditiis vitae voluptas modi minima temporibus voluptatem totam repellat",
    },
    {
      img: portfolioPic3,
      review:
        "  Lorem ipsum dolor, sit amet consectetur adipisicing elit. Hic ipsum recusandae aspernatur architecto, odit a adipisci placeat ullam cumque dolorum consequatur blanditiis vitae voluptas modi minima temporibus voluptatem totam repellat",
    },
    {
      img: portfolioPic4,
      review:
        "  Lorem ipsum dolor, sit amet consectetur adipisicing elit. Hic ipsum recusandae aspernatur architecto, odit a adipisci placeat ullam cumque dolorum consequatur blanditiis vitae voluptas modi minima temporibus voluptatem totam repellat",
    },
  ];
  return (
    <div className="t-wrapper" id="Testimonial">
      <div className="t-heading">
        <span>Clients always get </span>
        <span>Exceptional Work </span>
        <span>From me...</span>
        <div className="blur t-blue1" style={{ background: "var(--purple)" }}>
          {" "}
        </div>
        <div className="blur t-blur2" style={{ background: "skyBlue" }}>
          {" "}
        </div>
      </div>
      {/* slider */}
      <Swiper
        modules={[Pagination]}
        slidesPerView={1}
        pagination={{ clickable: true }}
      >
        |
        {clients.map((client, index) => {
          return (
            <SwiperSlide key={index}>
              <div className="testimonial">
                <img src={client.img} alt="" />
                <span>{client.review}</span>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
}

export default Testimonial;
