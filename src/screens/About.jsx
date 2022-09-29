import React from "react";
import Header from "../compounts/Header";
import aboutvi from "../img/aboutvi.png";
import aboutimg from "../img/aboutimg.png";
import aboutmain from "../img/aboutmain.png";
import Footer from "../compounts/Footer";
export default function About() {
  return (
    <>
      <Header />
      <div className="about__main__container">
        <div className="about__main__container__video">
          <img src={aboutvi} alt="about" />
          <div className="about__main__video__svg">
            <svg
              width="36"
              height="41"
              viewBox="0 0 36 41"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M34.5 17.9019C36.5 19.0566 36.5 21.9434 34.5 23.0981L5.25001 39.9856C3.25001 41.1403 0.750002 39.6969 0.750002 37.3875L0.750003 3.61251C0.750004 1.30311 3.25 -0.140273 5.25 1.01443L34.5 17.9019Z"
                fill="white"
              />
            </svg>
          </div>
        </div>
      </div>
      <div className="about__section__container">
        <div className="about__section__container__bg">
          <img src={aboutimg} alt="About" />
        </div>
        <div className="about__section__wraper">
          <div className="about__section__container__img">
            <img src={aboutmain} alt="About" />
          </div>
          <div className="about__section__container__right__contant">
            <div className="about__section__container__right__contant__heading">
              ABOUT <br /> FUNDAMENTAL TEXTILES
            </div>
            <div className="about__section__container__right__contant__sub__heading">
              Fundamental Textiles Ltd was established in 2010 as an import and
              distribution company for knitted and woven garments. Since its
              inception FTL has emphasised on supply of quality products at
              competitive prices with innovative product ideas. This has led to
              the sustainable growth of the company. With our head office based
              in Manchester, we offer customers a complete one-stop solution for
              knitted and woven garments for retail and work wear. <br /> Our
              range of services covers vertical supply chain management
              solutions right from the designing of new products through to
              product development, production follow up, in line and pre
              shipment inspections and shipping follow ups. We cover all the
              important aspects including the price, ethical production
              practices, quality control, and timely delivery. We have joined
              hands with some leading manufacturing companies based in Pakistan.
              This strategic partnership has enabled us to work in close liaison
              with our partner factories and successfully delivering required
              supply chain solutions to our customers.
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
