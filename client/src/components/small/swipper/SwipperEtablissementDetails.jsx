import React, { useRef } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-cards";

import "./swipper.css";

// import required modules
import { Autoplay, EffectCards, Pagination } from "swiper/modules";
import { HiUsers } from "react-icons/hi2";
export default function SwipperEtablissementDetails() {
  const progressCircle = useRef(null);
  const progressContent = useRef(null);
  const onAutoplayTimeLeft = (s, time, progress) => {
    progressCircle.current?.style.setProperty('--progress', 1 - progress);
    progressContent.current.textContent = `${Math.ceil(time / 1000)}s`;
  };
  return (
    <>
      <Swiper
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        centeredSlides={true}
        pagination={{
          clickable: true,
        }}
        loop={true}
        effect={"cards"}
        grabCursor={true}
        modules={[Autoplay, Pagination,EffectCards]}
        className="mySwiper"
        onAutoplayTimeLeft={onAutoplayTimeLeft}
      >
       
        <SwiperSlide className="swiper-slide">
          {" "}
          <div className="home-item">
            <div className="home-item-icon">
              <HiUsers size={40} />
            </div>
            <h3> Enseignant </h3>
            <div className="home-item-text">
             <div><strong>Nome:</strong><span>mohamed</span></div>
             <div><strong>Prenom:</strong><span>lmomni</span></div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className="swiper-slide">
          {" "}
          <div className="home-item">
            <div className="home-item-icon">
              <HiUsers size={40} />
            </div>
            <h3> Enseignant </h3>
            <div className="home-item-text">
             <div><strong>Nome:</strong><span>mohamed</span></div>
             <div><strong>Prenom:</strong><span>lmomni</span></div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className="swiper-slide">
          {" "}
          <div className="home-item">
            <div className="home-item-icon">
              <HiUsers size={40} />
            </div>
            <h3> Enseignant </h3>
            <div className="home-item-text">
             <div><strong>Nome:</strong><span>mohamed</span></div>
             <div><strong>Prenom:</strong><span>lmomni</span></div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className="swiper-slide">
          {" "}
          <div className="home-item">
            <div className="home-item-icon">
              <HiUsers size={40} />
            </div>
            <h3> Enseignant </h3>
            <div className="home-item-text">
             <div><strong>Nome:</strong><span>mohamed</span></div>
             <div><strong>Prenom:</strong><span>lmomni</span></div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className="swiper-slide">
          {" "}
          <div className="home-item">
            <div className="home-item-icon">
              <HiUsers size={40} />
            </div>
            <h3> Enseignant </h3>
            <div className="home-item-text">
             <div><strong>Nome:</strong><span>mohamed</span></div>
             <div><strong>Prenom:</strong><span>lmomni</span></div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className="swiper-slide">
          {" "}
          <div className="home-item">
            <div className="home-item-icon">
              <HiUsers size={40} />
            </div>
            <h3> Enseignant </h3>
            <div className="home-item-text">
             <div><strong>Nome:</strong><span>mohamed</span></div>
             <div><strong>Prenom:</strong><span>lmomni</span></div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className="swiper-slide">
          {" "}
          <div className="home-item">
            <div className="home-item-icon">
              <HiUsers size={40} />
            </div>
            <h3> Enseignant </h3>
            <div className="home-item-text">
             <div><strong>Nome:</strong><span>mohamed</span></div>
             <div><strong>Prenom:</strong><span>lmomni</span></div>
            </div>
          </div>
        </SwiperSlide>
        <div className="autoplay-progress" slot="container-end">
          <svg viewBox="0 0 48 48" ref={progressCircle}>
            <circle cx="24" cy="24" r="20"></circle>
          </svg>
          <span ref={progressContent}></span>
        </div>
      </Swiper>
    </>
  );
}
