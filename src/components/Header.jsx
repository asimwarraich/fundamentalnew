import React, { useLayoutEffect } from "react";
import ClickAwayListener from "react-click-away-listener";
import { Link, useLocation } from "react-router-dom";
import DropDown from "./DropDown";
import logo from "../img/logo.png";

export default function Header() {
  const location = useLocation();
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
      setIsDropDownOpen(false);
      window.scrollY > 0 ? setIsScrolling(true) : setIsScrolling(false);
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
          <ClickAwayListener
            onClickAway={() => {
              if (window.innerWidth < 900) {
                setIsOpen(false);
              }
            }}
          >
            <div className="nav__bar__contant">
              <Link
                to="/"
                onClick={() => {
                  window.scrollTo({ top: 0, behavior: "smooth" });
                  if (window.innerWidth < 900) {
                    setIsOpen(false);
                  }
                }}
                className={
                  !isDropDownOpen && location.pathname === "/"
                    ? "nav__contant__links active"
                    : "nav__contant__links"
                }
              >
                Home
              </Link>
              <Link
                to="/about"
                onClick={() => {
                  window.scrollTo({ top: 0, behavior: "smooth" });
                  if (window.innerWidth < 900) {
                    setIsOpen(false);
                  }
                }}
                className={
                  !isDropDownOpen && location.pathname === "/about"
                    ? "nav__contant__links active"
                    : "nav__contant__links"
                }
              >
                About
              </Link>
              <button
                onClick={() => {
                  setIsDropDownOpen(!isDropDownOpen);
                }}
                className={
                  isDropDownOpen ||
                  location.pathname === "/knitted" ||
                  location.pathname === "/worker" ||
                  location.pathname === "/woven"
                    ? "nav__contant__links active"
                    : "nav__contant__links"
                }
              >
                Products
                {isDropDownOpen ? (
                  <DropDown
                    dropdownlist={dropDownlistItem}
                    isOpen={isDropDownOpen}
                    setIsDropDownOpen={setIsDropDownOpen}
                  />
                ) : null}
              </button>
              <Link
                to="/Contact"
                onClick={() => {
                  window.scrollTo({ top: 0, behavior: "smooth" });
                  if (window.innerWidth < 900) {
                    setIsOpen(false);
                  }
                }}
                className={
                  !isDropDownOpen && location.pathname === "/Contact"
                    ? "nav__contant__links active"
                    : "nav__contant__links"
                }
              >
                Contact Us
              </Link>
            </div>
          </ClickAwayListener>
        ) : null}
        <div className="nav__bar__btn__menu">
          <button
            className="nav__btn"
            onClick={() => {
              setIsOpen(!isOpen);
            }}
          >
            {isOpen ? (
              <Close size="18" color="white" />
            ) : (
              <Menu size="18" color="white" />
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
