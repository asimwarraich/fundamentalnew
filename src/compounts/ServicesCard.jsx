import React from "react";
import servicecardone from "../img/servicecardone.png";
export default function ServicesCard({ title, text }) {
  return (
    <>
      <div className="services__card__wraper">
        <div className="services__card__wraper__img">
          <img src={servicecardone} alt="service" />
        </div>
        <div className="services__card__contant">
          <div className="services__card__heading">{title}</div>
          <div className="services__card__sub__heading">{text}</div>
        </div>
      </div>
    </>
  );
}
