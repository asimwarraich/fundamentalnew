import React from "react";

export default function ProductsFilter(svg, info) {
  return (
    <>
      <div className="knitted__input__checked">
        <div className="knitted__product__container__filter__card__svg">
          {svg}
        </div>
        <div className="knitted__product__container__filter__card__info">
          {info}
        </div>
      </div>
    </>
  );
}
