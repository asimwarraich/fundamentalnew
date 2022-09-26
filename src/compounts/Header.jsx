import React, { useLayoutEffect } from "react";
// import outsideClick from "../helpers/outsideClick";
export default function Header() {
  const [isOpen, setIsOpen] = React.useState(true);
  function checkNavOpenClose() {
    if (window.innerWidth < 900) {
      setIsOpen(false);
    } else {
      setIsOpen(true);
    }
  }

  useLayoutEffect(() => {
    checkNavOpenClose();
    window.addEventListener("resize", checkNavOpenClose);
  }, []);
  return (
    <>
      <div className="header__nav__bar__container">
        <div className="nav__bar__wraper">
          <div className="nav__bar__logo">svg</div>
          {isOpen ? (
            <div className="nav__bar__contant">
              <a href="#" className="nav__contant__links">
                Home
              </a>
              <a href="#" className="nav__contant__links">
                About
              </a>
              <a href="#" className="nav__contant__links">
                Products
              </a>
              <a href="#" className="nav__contant__links">
                Contact Us
              </a>
            </div>
          ) : null}
          <div className="nav__bar__btn__menu">
            <button
              className="nav__btn"
              onClick={() => {
                setIsOpen(!isOpen);
              }}
            >
              {isOpen ? (
                <Close size="24" color="white" />
              ) : (
                <Menu size="24" color="white" />
              )}
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export function Close({ size, color }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke={color}
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
      class="feather feather-x"
    >
      <line x1="18" y1="6" x2="6" y2="18"></line>
      <line x1="6" y1="6" x2="18" y2="18"></line>
    </svg>
  );
}
export function Menu({ size, color }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke={color}
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
      class="feather feather-menu"
    >
      <line x1="3" y1="12" x2="21" y2="12"></line>
      <line x1="3" y1="6" x2="21" y2="6"></line>
      <line x1="3" y1="18" x2="21" y2="18"></line>
    </svg>
  );
}