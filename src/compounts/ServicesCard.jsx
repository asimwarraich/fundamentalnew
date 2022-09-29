import React from "react";

export default function ServicesCard({ img, title, text }) {
  return (
    <>
      <div className="services__card__wraper">
        <img src={img} alt="img" />
        <div className="services__card__contant">
          <div className="services__card__heading">{title}</div>
          <div className="services__card__sub__heading">{text}</div>
        </div>
      </div>
    </>
  );
}
