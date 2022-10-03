import React from "react";

export default function KnittedProductIntry({ svg, title }) {
  return (
    <div className="knitted__product__container__filter__card">
      <input
        type="radio"
        name="knitted__input__checked"
        className="knitted__input__checked__input"
      />
      <div className="knitted__input__checked">
        <div className="knitted__product__container__filter__card__svg">
          {svg}
        </div>
        <div className="knitted__product__container__filter__card__info">
          {title}
        </div>
      </div>
    </div>
  );
}
