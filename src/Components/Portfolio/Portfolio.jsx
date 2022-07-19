import React from "react";
import "./Portfolio.css";
import { Swiper, SwiperSlide } from "swiper/react";
import Sidebar from "../../img/p1.PNG";
import Ecommerce from "../../img/p2.PNG";
import Hoc from "../../img/p3.PNG";
import Musicapp from "../../img/p5.PNG";
import "swiper/css";

const Portfolio = () => {
  return (
    <div className="portfolio" id="Portfolio">
      {/* heading */}
      <span>Recent project</span>
      <span>Portfolio</span>

      {/* slider */}
      <Swiper
        spaceBetween={30}
        slidesPerView={3}
        grabCursor={true}
        className="portfolio-slider"
      >
        <SwiperSlide>
          <img src={Sidebar} alt="" />
        </SwiperSlide>

        <SwiperSlide>
          <img src={Ecommerce} alt="" />
        </SwiperSlide>

        <SwiperSlide>
          <img src={Hoc} alt="" />
        </SwiperSlide>

        <SwiperSlide>
          <img src={Musicapp} alt="" />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Portfolio;
