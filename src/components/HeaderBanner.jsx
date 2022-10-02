import React from "react";
import contactbaner from "../img/contactbaner.png";

export default function HeaderBanner({ svg, title }) {
  return (
    <>
      <div className="contact__main__banner">
        <div className="contact__banner__img">
          <img src={contactbaner} alt="Contact" />
          <div className="contact__overlay">
            <div className="contact__overlay__svg">{svg}</div>
            <div className="contact__overlay__text">{title}</div>
          </div>
        </div>
      </div>
    </>
  );
}
