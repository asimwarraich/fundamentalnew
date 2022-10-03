import React from "react";

export default function KnittedCard({ svg, title, info }) {
  return (
    <div className="knitted__card__wraper">
      <div className="knitted__card__wraper__svg">{svg}</div>
      <div className="knitted__card__contant">
        <div className="knitted__card__contant__heading">{title} </div>
        <div className="knitted__card__contant__imfo">{info}</div>
      </div>
    </div>
  );
}
