import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import ServicesCard from "../components/ServicesCard";
import servicecardone from "../img/servicecardone.png";
import servicecardtwo from "../img/servicecardtwo.png";
import servicecardthre from "../img/servicecardthre.png";

export function LandingServicesSection({ distance }) {
  const [slidesPerView, setSlidesPerView] = useState(4);
  function changeSlidesPerView() {
    if (window.innerWidth < 700) {
      setSlidesPerView(1);
    } else if (window.innerWidth < 900) {
      setSlidesPerView(2);
    } else if (window.innerWidth < 1200) {
      setSlidesPerView(3);
    } else {
      setSlidesPerView(4);
    }
  }
  useEffect(() => {
    changeSlidesPerView();
    window.addEventListener("resize", changeSlidesPerView);
  }, []);

  return (
    <div className="landing__services__section">
      <div className="landing__services__container">
        <div
          style={distance ? { marginTop: "3.5em" } : { marginTop: "4.5em" }}
          data-aos="fade-up"
          data-aos-duration="900"
          data-aos-easing="ease-in-out"
          className="landing__services__section__heading"
        >
          SERVICE WE OFFER
        </div>
        <div
          data-aos="fade-up"
          data-aos-easing="ease-in-out"
          style={{ padding: "0em 2em", width: "100%" }}
        >
          <Swiper
            className="services__cards__container"
            spaceBetween={40}
            slidesPerView={slidesPerView}
          >
            <SwiperSlide>
              <ServicesCard
                img={servicecardone}
                title="Product Research
              & Development "
                text="We at Fundamental Textiles are equipped with the fabric technologists and state-of-art machinery to innovate, invent, initiate & replicate any specific requirement  in textiles, apparels and treatments."
              />
            </SwiperSlide>
            <SwiperSlide>
              <ServicesCard
                img={servicecardtwo}
                title="In-Line Quality Inspections "
                text="FTL have developed systems where we stay connected with our customers and suppliers, exchanging real time data which helps us mitigating the issues and keeping our supply chain transparent and reliable."
              />
            </SwiperSlide>
            <SwiperSlide>
              <ServicesCard
                img={servicecardthre}
                title="Your 
              One-Stop Shop   "
                text="Fundamental Textile ensures ready-to-wear clothing and uniforms for industrial clothing, healthcare, uniforms and casual fast-fashion products. You just have to book an order and rest will be taken care by our teams."
              />
            </SwiperSlide>
            <SwiperSlide>
              <ServicesCard
                img={servicecardone}
                title="Product Research
              & Development "
                text="We at Fundamental Textiles are equipped with the fabric technologists and state-of-art machinery to innovate, invent, initiate & replicate any specific requirement  in textiles, apparels and treatments."
              />
            </SwiperSlide>
            <SwiperSlide>
              <ServicesCard
                img={servicecardtwo}
                title="In-Line Quality Inspections "
                text="FTL have developed systems where we stay connected with our customers and suppliers, exchanging real time data which helps us mitigating the issues and keeping our supply chain transparent and reliable."
              />
            </SwiperSlide>
            <SwiperSlide>
              <ServicesCard
                img={servicecardthre}
                title="Your 
              One-Stop Shop   "
                text="Fundamental Textile ensures ready-to-wear clothing and uniforms for industrial clothing, healthcare, uniforms and casual fast-fashion products. You just have to book an order and rest will be taken care by our teams."
              />
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </div>
  );
}
