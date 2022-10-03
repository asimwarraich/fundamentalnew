import React, { useLayoutEffect } from "react";
import OutsideClickHandler from "react-outside-click-handler";
import { NavLink, Link } from "react-router-dom";
import DropDown from "./DropDown";
import logo from "../img/logo.png";
export default function Header() {
  const dropDownlistItem = [
    { name: "produst", link: "/knitted" },
    { name: "worker", link: "/worker" },
    { name: "worker", link: "/worker" },
  ];
  const [isDropDownOpen, setIsDropDownOpen] = React.useState(false);
  const [isOpen, setIsOpen] = React.useState(true);
  const [isScrolling, setIsScrolling] = React.useState(false);
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
    window.addEventListener("scroll", () => {
      checkNavOpenClose();
      if (window.scrollY > 0) {
        setIsScrolling(true);
      } else {
        setIsScrolling(false);
      }
      window.addEventListener("scroll", () => {
        setIsDropDownOpen(false);
      });
    });
  }, []);
  return (
    <div
      className={
        isScrolling
          ? "nav__bar__wraper nav__bar__wraper__active"
          : "nav__bar__wraper"
      }
    >
      <div className="header__nav__bar__container">
        <Link to="/" className="nav__bar__logo">
          <img src={logo} alt="logo" />
        </Link>
        {isOpen ? (
          <OutsideClickHandler
            onOutsideClick={() => {
              if (window.innerWidth < 900) {
                setIsOpen(false);
              }
            }}
          >
            <div className="nav__bar__contant">
              <NavLink
                to="/"
                end
                onClick={() => {
                  window.scrollTo({ top: 0, behavior: "smooth" });
                  if (window.innerWidth < 900) {
                    setIsOpen(false);
                  }
                }}
                className="nav__contant__links"
              >
                Home
              </NavLink>

              <NavLink
                to="/about"
                onClick={() => {
                  window.scrollTo({ top: 0, behavior: "smooth" });
                  if (window.innerWidth < 900) {
                    setIsOpen(false);
                  }
                }}
                className="nav__contant__links"
              >
                About
              </NavLink>
              <div
                onClick={() => {
                  window.scrollTo({ top: 0, behavior: "smooth" });
                  setIsDropDownOpen(!isDropDownOpen);
                }}
                className="nav__contant__links"
              >
                {isDropDownOpen ? (
                  <OutsideClickHandler
                    onOutsideClick={() => {
                      setIsDropDownOpen(false);
                    }}
                  >
                    <DropDown
                      dropdownlist={dropDownlistItem}
                      isOpen={isDropDownOpen}
                    />
                  </OutsideClickHandler>
                ) : null}
                Products
              </div>
              <NavLink
                to="/Contact"
                onClick={() => {
                  window.scrollTo({ top: 0, behavior: "smooth" });
                  if (window.innerWidth < 900) {
                    setIsOpen(false);
                  }
                }}
                className="nav__contant__links"
              >
                Contact Us
              </NavLink>
            </div>
          </OutsideClickHandler>
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
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="feather feather-x"
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
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="feather feather-menu"
    >
      <line x1="3" y1="12" x2="21" y2="12"></line>
      <line x1="3" y1="6" x2="21" y2="6"></line>
      <line x1="3" y1="18" x2="21" y2="18"></line>
    </svg>
  );
}
