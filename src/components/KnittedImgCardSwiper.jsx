import React, { useEffect, useState } from "react";
import { SwiperSlide, Swiper } from "swiper/react";
import KnittedImgCard from "./KnittedImgCard";
import knitedone from "../img/knitedone.png";
import knittedtwo from "../img/knittedtwo.png";
import knittedthree from "../img/knittedthree.png";
import { data } from "../data";

export default function KnittedImgCardSwiper() {
  const [slidesPerView, setSlidesPerView] = useState(7);
  function changeSlidesPerView() {
    if (window.innerWidth < 600) {
      setSlidesPerView(1);
    } else if (window.innerWidth < 800) {
      setSlidesPerView(2);
    } else if (window.innerWidth < 1000) {
      setSlidesPerView(3);
    } else if (window.innerWidth < 1200) {
      setSlidesPerView(5);
    } else setSlidesPerView(7);
  }

  useEffect(() => {
    changeSlidesPerView();
    window.addEventListener("resize", changeSlidesPerView);
  }, []);

  return (
    <div className="main__header__swiper">
      <Swiper spaceBetween={10} slidesPerView={slidesPerView}>
        {data.map((item) => {
          return (
            <SwiperSlide>
              <KnittedImgCard img={item} />
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
}
