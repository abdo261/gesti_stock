import React, { useRef} from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-cards";

import "./swipper.css";

// import required modules
import { Autoplay, EffectCards, Pagination } from "swiper/modules";
import { HiUsers } from "react-icons/hi2";
import { LuFileBadge } from "react-icons/lu";
import { GrDocumentText } from "react-icons/gr";
import { PiPresentationChartLight } from "react-icons/pi";

export default function SwipperContainer() {
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
        <SwiperSlide className=".swiper-slide">
          {" "}
          <div className="home-item">
            <div className="home-item-icon">
              {" "}
              <PiPresentationChartLight size={40} />
            </div>
            <h3> Gestion des Absences </h3>
            <div className="home-item-text">
              Notre application offre une solution complète pour gérer
              efficacement les absences des enseignants dans chaque
              établissement scolaire.
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className=".swiper-slide">
          {" "}
          <div className="home-item">
            <div className="home-item-icon">
              <GrDocumentText size={40} />
            </div>
            <h3>Commande de Documents </h3>
            <div className="home-item-text">
              Simplifiez la gestion des commandes de documents scolaires avec
              notre application pour enseignants et les responsables de l'école
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className=".swiper-slide">
          {" "}
          <div className="home-item">
            <div className="home-item-icon">
              <LuFileBadge size={40} />
            </div>
            <h3>Organisé par Commune </h3>
            <div className="home-item-text">
              Notre application est conçue pour s'adapter aux besoins
              spécifiques de chaque commune. En associant chaque école à sa
              commune respective
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className="swiper-slide">
          {" "}
          <div className="home-item">
            <div className="home-item-icon">
              <HiUsers size={40} />
            </div>
            <h3> Utilisateurs </h3>
            <div className="home-item-text">
              Notre application distingue deux types d'utilisateurs principaux :
              les responsables et les administrateurs. Chaque type d'utilisateur
              a des fonctionnalités spécifiques adaptées à ses besoins.
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
