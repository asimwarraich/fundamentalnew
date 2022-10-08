import React, { useState } from "react";
import KnittedImgCardSwiper from "./KnittedImgCardSwiper";
import KnittedProductIntry from "./KnittedProductIntry";

export function ProductShowCase({ title, list }) {
  const [selected, setSelected] = useState(list[0].data);
  return (
    <div className="knitted__product__container">
      <div className="knitted__product__container__heading">{title}</div>
      <div className="knitted__product__container__filter">
        {list.map((item, index) => (
          <KnittedProductIntry
            svg={item.svg}
            title={item.title}
            defaultChecked={index === 0 ? true : false}
            onClick={() => {
              setSelected(item.data);
            }}
          />
        ))}
      </div>
      <KnittedImgCardSwiper data={selected} />
    </div>
  );
}
