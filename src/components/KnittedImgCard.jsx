import React from "react";

export default function KnittedImgCard({ img }) {
  return (
    <div className="knitted__filter__imgs__swiper">
      <img src={img} alt="swiper" />
    </div>
  );
}
