import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import aboutimg from "../img/aboutimg.png";
import ServicesCard from "../components/ServicesCard";
import servicecardone from "../img/servicecardone.png";
import servicecardtwo from "../img/servicecardtwo.png";
import servicecardthre from "../img/servicecardthre.png";
import servicecardfour from "../img/servicecardfour.png";

export function LandingServicesSection() {
  const [slidesPerView, setSlidesPerView] = useState(4);
  function changeSlidesPerView() {
    if (window.innerWidth < 600) {
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
      <img src={aboutimg} alt="about" />
      <div className="landing__services__container">
        <div
          data-aos="fade-up"
          data-aos-offset="200"
          data-aos-delay="50"
          data-aos-duration="1500"
          data-aos-easing="ease-in-out"
          className="landing__services__section__heading"
        >
          SERVICE WE OFFER
        </div>
        <div
          data-aos="fade-up"
          data-aos-offset="200"
          data-aos-delay="50"
          data-aos-duration="1500"
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
                text="FTL have developed systems where we stay connected with our customers and suppliers, exchanging real time data which helps us mitigating the issues and keeping our supply chain transparent and reliable."
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
                text="FTL have developed systems where we stay connected with our customers and suppliers, exchanging real time data which helps us mitigating the issues and keeping our supply chain transparent and reliable."
              />
            </SwiperSlide>
            <SwiperSlide>
              <ServicesCard
                img={servicecardfour}
                title="Production 
              Follow-up"
                text="FTL have developed systems where we stay connected with our customers and suppliers, exchanging real time data which helps us mitigating the issues and keeping our supply chain transparent and reliable."
              />
            </SwiperSlide>
            <SwiperSlide>
              <ServicesCard
                img={servicecardone}
                title="Product Research
              & Development "
                text="FTL have developed systems where we stay connected with our customers and suppliers, exchanging real time data which helps us mitigating the issues and keeping our supply chain transparent and reliable."
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
                text="FTL have developed systems where we stay connected with our customers and suppliers, exchanging real time data which helps us mitigating the issues and keeping our supply chain transparent and reliable."
              />
            </SwiperSlide>
            <SwiperSlide>
              <ServicesCard
                img={servicecardfour}
                title="Production 
              Follow-up"
                text="FTL have developed systems where we stay connected with our customers and suppliers, exchanging real time data which helps us mitigating the issues and keeping our supply chain transparent and reliable."
              />
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </div>
  );
}
