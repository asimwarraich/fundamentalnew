import React, { useEffect, useState } from "react";
import { SwiperSlide, Swiper } from "swiper/react";
import vendor from "../img/vendor.png";
import VendorCard from "./VendorCard";

export default function VendorSwiper() {
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
    <Swiper
      data-aos="fade-up"
      data-aos-easing="ease-in-out"
      className="vendor__card__wraper__container"
      spaceBetween={10}
      slidesPerView={slidesPerView}
    >
      <SwiperSlide>
        <VendorCard img={vendor} info="Vendor Name 1" />
      </SwiperSlide>
      <SwiperSlide>
        <VendorCard img={vendor} info="Vendor Name 1" />
      </SwiperSlide>
      <SwiperSlide>
        <VendorCard img={vendor} info="Vendor Name 1" />
      </SwiperSlide>
      <SwiperSlide>
        <VendorCard img={vendor} info="Vendor Name 1" />
      </SwiperSlide>
      <SwiperSlide>
        <VendorCard img={vendor} info="Vendor Name 1" />
      </SwiperSlide>
      <SwiperSlide>
        <VendorCard img={vendor} info="Vendor Name 1" />
      </SwiperSlide>
      <SwiperSlide>
        <VendorCard img={vendor} info="Vendor Name 1" />
      </SwiperSlide>
    </Swiper>
  );
}
