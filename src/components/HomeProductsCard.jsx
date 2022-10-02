import React from "react";
import { NavLink } from "react-router-dom";

export default function HomeProductsCard({ svg, title, text, to }) {
  return (
    <>
      <NavLink
        to={to}
        onClick={() => {
          window.scrollTo({ top: 0, behavior: "smooth" });
        }}
        className="products__contant__wraper__card"
      >
        <div className="products__contant__wraper__card__svg">{svg}</div>
        <div className="products__contant__wraper__card__heading">{title}</div>
        <div className="products__contant__wraper__card__sub__heading">
          {text}
        </div>
      </NavLink>
    </>
  );
}
