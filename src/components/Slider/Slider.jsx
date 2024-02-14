import React from "react";
import s from "./slider.module.css";
import { Navigation, Virtual, Pagination, Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide, useSwiper } from "swiper/react";
import "swiper/css";
import "swiper/css/virtual";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import { Slides } from "../../Slides";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowRightLong,
  faArrowLeftLong,
} from "@fortawesome/free-solid-svg-icons";
const paginationStyle = {
  // Стили для активной точки пагинации
  "--swiper-pagination-color": "#FF9143", // Замените на ваш желаемый цвет

  // Стили для неактивных точек пагинации
  "--swiper-pagination-bullet-color": "#cccccc", // Замените на ваш желаемый цвет
};
const Slider = ({ images }) => {
  console.log(Object.values(Slides)[1]);
  const swiper = useSwiper();
  return (
    <div className={s.slider_container}>
      {images.length > 1 ? (
        <Swiper
          className={s.projects_swiper}
          pagination={{
            dynamicBullets: true,
            clickable: true,
          }}
          style={paginationStyle}
          navigation={{
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
          }}
          centeredSlides={true}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          modules={[Virtual, Pagination, Navigation, Autoplay]}
          slidesPerView={1}
          virtual
        >
          {images.map((slideContent, index) => (
            <SwiperSlide
              key={slideContent}
              virtualIndex={index}
              className={s.swiper_slide}
            >
              <img src={slideContent} alt="projectImage" />
            </SwiperSlide>
          ))}

          <div className={`swiper-button-prev ${s.prevBtn}`}>
            <span className="custom-icon">
              <FontAwesomeIcon
                icon={faArrowLeftLong}
                className={s.faleftLong}
              ></FontAwesomeIcon>
            </span>
          </div>
          <div className={`swiper-button-next ${s.nextBtn}`}>
            <span className="custom-icon">
              <FontAwesomeIcon
                icon={faArrowRightLong}
                className={s.farightLong}
              ></FontAwesomeIcon>
            </span>
          </div>
        </Swiper>
      ) : (
        <div className={s.slider_img_container}>
          <div className={s.slider_img}>
            <img src={images[0]} alt="sliderImg" />
          </div>
        </div>
      )}
    </div>
  );
};

export default Slider;
