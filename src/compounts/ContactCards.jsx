import React from "react";

export default function ContactCards({ svg, title, text }) {
  return (
    <>
      <div className="contact__card">
        <div className="contact__card__svg">{svg}</div>
        <div className="contact__card__heading">{title}</div>
        <div className="contact__card__text">{text}</div>
      </div>
    </>
  );
}
