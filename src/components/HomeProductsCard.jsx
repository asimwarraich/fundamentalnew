import React from "react";

export default function HomeProductsCard({ svg, title, text }) {
  return (
    <>
      <div className="products__contant__wraper__card">
        <div className="products__contant__wraper__card__svg">{svg}</div>
        <div className="products__contant__wraper__card__heading">{title}</div>
        <div className="products__contant__wraper__card__sub__heading">
          {text}
        </div>
      </div>
    </>
  );
}
