import React from "react";
export default function VendorCard({ img, info }) {
  return (
    <>
      <div className="Vendor__card__wraper">
        <div className="Vendor__card__wraper__img">
          <img src={img} alt="vendor" />
        </div>
        <div className="Vendor__card__wraper__info">{info}</div>
      </div>
    </>
  );
}
