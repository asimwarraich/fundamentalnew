import React from "react";
import Header from "../compounts/Header";
import banner from "../img/banner.png";
import aboutimg from "../img/aboutimg.png";
import aboutcloth from "../img/aboutcloth.png";
import product from "../img/product.png";
import prologo from "../img/prologo.png";
import subbg from "../img/subbg.png";
import subimg from "../img/subimg.png";
import qua from "../img/qua.png";
import quaover from "../img/quaover.png";
import Footer from "../compounts/Footer";
import HomeProductsCard from "../compounts/HomeProductsCard";
import ServicesCard from "../compounts/ServicesCard";
export default function Landing() {
  return (
    <>
      <Header />
      <div className="landing__main__banner">
        <img src={banner} alt="banner" />
      </div>
      <div className="landing__about__section">
        <div className="landing__about__section__overlay">
          <img src={aboutimg} alt="about" />
        </div>
        <div className="about__overlay__contant__wraper">
          <div className="about__overlay__laft__contant">
            <div className="about__overlay__laft__contant__heading__upper">
              About Us
            </div>
            <div className="about__overlay__laft__contant__heading">
              COMMITED TO DELIVER WITH CARE
            </div>
            <div className="about__overlay__laft__contant__sub__heading">
              Fundamental Textiles Ltd was established in 2010 as an import and
              distribution company for knitted and woven garments. Since, its
              inception FTL has emphasized on supply of quality products at
              competitive prices with innovative product ideas. This has lead to
              sustainable growth of the company. With our head office based in
              Manchester , we offer customers a complete one stop solution for
              knitted and woven garments for retail and work wear . Our range of
              services cover vertical supply chain management solutions right
              from the designing of new products till delivery to customer ’s
              warehouse covering all the important aspects including the price,
              ethical production practices, quality control and timely delivery.
            </div>
          </div>
          <div className="about__overlay__right__contant">
            <img src={aboutcloth} alt="about" />
          </div>
        </div>
      </div>
      <div className="landing__product__container">
        <div className="landing__product__container__img">
          <img src={product} alt="product" />
        </div>
        <div className="products__contant__wraper">
          <div className="products__contant__wraper__logo">
            <div className="products__contant__wraper__logo__img">
              <img src={prologo} alt="Products" />
            </div>
          </div>
          <div className="products__overlay__contant__wraper">
            <div className="products__contant__wraper__heading">
              EXPLORE OUR PRODUCTS
            </div>
            <div className="products__contant__wraper__cards__containaer">
              <HomeProductsCard
                title="Knitted Garments"
                text="We have always emphasised on the supply of quality products at competitive prices with innovative products ideas."
              />
              <HomeProductsCard
                title="Woven Garments "
                text="We have always emphasised on the supply of quality products at competitive prices with innovative products ideas."
              />
              <HomeProductsCard
                title="Work Garments "
                text="We have always emphasised on the supply of quality products at competitive prices with innovative products ideas."
              />
            </div>
          </div>
        </div>
      </div>
      <div className="landing__services__section">
        <div className="landing__services__section__heading">
          SERVICE WE OFFER
        </div>
        <div className="services__cards__container">
          <ServicesCard
            title="Heading"
            text="when it is composed, an architectonic one when it is built, and a textile one when it is woven."
          />
          <ServicesCard
            title="Heading"
            text="when it is composed, an architectonic one when it is built, and a textile one when it is woven."
          />
          <ServicesCard
            title="Heading"
            text="when it is composed, an architectonic one when it is built, and a textile one when it is woven."
          />
        </div>
      </div>
      <div className="quotation__about__secion">
        <div className="quotation__about__wraper">
          <div className="qua__img__left">
            <img src={qua} alt="quotation" />
          </div>
          <div className="qua__right__contant">
            <div className="qua__overlay">
              <img src={quaover} alt="quotation" />
            </div>
            <div className="qua__contant__text">
              <div className="qua__right__contant__heading">
                Quotation about <span>Textile Industry</span>
              </div>
              <div className="qua__right__contant__sub__heading">
                “Work on good prose has three steps: a musical stage when it is
                composed, an architectonic one when it is built, and a textile
                one when it is woven.”
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="sustain__section">
        {/* <div className="sus__right__bg__img">
          <img src={subbg} alt="" />
        </div> */}
        <div className="sustain__overlay__contant__wraper">
          <div className="sus__contant__wraper">
            <div className="sustain__section__contant__heading">
              SUSTAINABILITY
            </div>
            <div className="sustain__section__contant__sub__heading">
              Rational use of natural resources and reducing the carbon foot
              print to mitigate the negative impact on environment and saving
              the planet is the key concept of sustainability. We at Fundamental
              Textiles are full filling our social corporate responsibility and
              fair trade practices. This is achieved by using ethical raw
              materials i.e. BCI and organic Cotton, Recycled Cotton and
              Recycled polyester, Repreve, Tencel and Eco made Lycra yarns, By
              adopting the latest sustainability trends in the textile industry.
            </div>
            <div className="sustain__section__contant__sub__heading__points">
              <div className="sustain__section__contant__sub__heading__points__item">
                Use Minimal natural resources to produce & distribute the final
                garment.
              </div>
              <div className="sustain__section__contant__sub__heading__points__item">
                Promote sustainable fashion.
              </div>
              <div className="sustain__section__contant__sub__heading__points__item">
                Support millions of workers to earn fair wages and ensure proper
                working conditions for them.
              </div>
              <div className="sustain__section__contant__sub__heading__points__item">
                Minimize Landfill wastage as much as possible.
              </div>
              <div className="sustain__section__contant__sub__heading__points__item">
                Create a healthy working environment for the workers to help
                them maximize their productivity.
              </div>
            </div>
          </div>

          <div className="sustain__section__img">
            <img src={subimg} alt="SUSTAINABILITY" />
          </div>
        </div>
      </div>
      {/* <Footer /> */}
      skjffhfdhihfshfi
    </>
  );
}
