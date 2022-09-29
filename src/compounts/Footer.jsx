import React from "react";
import { NavLink } from "react-router-dom";
import footerbg from "../img/footerbg.png";
import logo from "../img/logo.png";
export default function Footer() {
  return (
    <>
      <div className="footer__main__container">
        <div className="footer__container__img">
          <img src={footerbg} alt="Footer" />
        </div>
        <div className="footer__contant__container">
          <div className="footer__contact__col">
            <div className="footer__contact__logo">
              <img src={logo} alt="logo" />
            </div>
            <div className="footer__contact__text">
              Fundamental Textile ensures ready-to-wear clothing and uniforms
              for industrial clothing, healthcare, uniforms and casual
              fast-fashion products. You just have to book an order and rest
              will be taken care by our teams.
            </div>
          </div>
          <div className="footer__contact__col">
            <div className="footer__contact__col__heading">Quick Link</div>
            <NavLink to="/" className="footer__contact__col__link">
              Home
            </NavLink>
            <NavLink to="/" className="footer__contact__col__link">
              About
            </NavLink>
            <NavLink to="/" className="footer__contact__col__link">
              Why
            </NavLink>
            <NavLink to="/" className="footer__contact__col__link">
              Services
            </NavLink>
            <NavLink to="/" className="footer__contact__col__link">
              Work
            </NavLink>
            <NavLink to="/" className="footer__contact__col__link">
              Quotation
            </NavLink>
          </div>
          <div className="footer__contact__col">
            <div className="footer__contact__col__heading">Services</div>
            <NavLink to="/" className="footer__contact__col__link">
              Product Research & Development
            </NavLink>
            <NavLink to="/" className="footer__contact__col__link">
              In-Line Quality Inspections
            </NavLink>
            <NavLink to="/" className="footer__contact__col__link">
              Production Follow Up
            </NavLink>
            <NavLink to="/" className="footer__contact__col__link">
              Your One-Stop Shop
            </NavLink>
          </div>
          <div className="footer__contact__col">
            <div className="footer__contact__col__heading">Social info</div>
            <div className="footer__contact__col__link">+32 434 54554543</div>
            <div className="footer__contact__col__link">
              fundamentaltextiles@gmail.com
            </div>
            <div className="footer__contact__col__link">
              www.fundamentaltextiles.com
            </div>
            <div className="footer__contact__col__button">Contact Us</div>
          </div>
        </div>
      </div>
    </>
  );
}
