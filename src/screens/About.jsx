import React, { useState } from "react";
import Header from "../components/Header";
import aboutmain from "../img/aboutmain.png";
import Footer from "../components/Footer";
import videoone from "../img/videoone.mp4";
import abouttwo from "../img/abouttwo.png";
import quapolice from "../img/quapolice.png";
import Strategic from "../img/Strategic.png";
import VendorSwiper from "../components/VendorSwiper";
import pak from "../img/pak.png";
import uk from "../img/uk.png";
import { LandingServicesSection } from "./LandingServicesSection";
export default function About() {
  const [videoPaused, setVideoPaused] = useState(true);
  return (
    <>
      <Header />
      <div className="about__header__container">
        <div className="about__main__header__video">
          <video src={videoone} type="video/mp4" id="video" />
          <div className="main__video__btn__container">
            <button
              className="main__video__btn"
              onClick={() => {
                const video = document.getElementById("video");
                setVideoPaused(false);
                if (video.paused) video.play();
                else video.pause();
              }}
            >
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
            </button>
          </div>
        </div>
      </div>
      <div className="about__section__container">
        <div className="about__section__wraper">
          <div
            data-aos="fade-right"
            data-aos-offset="200"
            data-aos-delay="50"
            data-aos-duration="1900"
            data-aos-easing="ease-in-out"
            className="about__section__container__img"
          >
            <img src={aboutmain} alt="About" />
          </div>
          <div
            data-aos="fade-left"
            data-aos-offset="200"
            data-aos-delay="50"
            data-aos-duration="2000"
            data-aos-easing="ease-in-out"
            className="about__section__container__right__contant"
          >
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
      <div className="about__vision__container">
        <div className="vision__and__mission">
          <div className="vision__container__left">
            <div
              data-aos="fade-up"
              data-aos-offset="200"
              data-aos-delay="50"
              data-aos-duration="1200"
              data-aos-easing="ease-in-out"
              className="vision__container__vision__svg"
            >
              <svg
                width="81"
                height="81"
                viewBox="0 0 81 81"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M37.0363 47.0577L45.6414 52.5684L49.7604 48.1736L53.8908 52.5684L62.3955 46.8827L80.5809 80.4834H19.1091C25.1097 69.2956 31.0472 58.2283 37.0363 47.0577Z"
                  fill="white"
                />
                <path
                  d="M47.3422 14.0565H37.9713V0H52.1897V1.54048C52.1897 9.95714 52.1897 18.3709 52.2155 26.7847C52.2267 27.5792 52.4232 28.3601 52.7892 29.0653C55.1699 33.5777 57.6138 38.0557 60.1236 42.703L54.4873 46.4982L49.7574 41.4895C48.1683 43.1734 46.6309 44.7971 45.0274 46.4896L39.305 42.8407C41.7919 38.2508 44.2702 33.7298 46.6768 29.1715C47.0679 28.4249 47.2828 27.5986 47.3049 26.7561C47.3795 22.6051 47.3422 18.4455 47.3422 14.0565Z"
                  fill="white"
                />
                <path
                  d="M0 80.5751L26.1537 37.7316C27.9923 40.7437 29.7392 43.555 31.4114 46.4093C31.5921 46.7191 31.486 47.3387 31.2967 47.6973C25.5772 58.4261 19.8357 69.1444 14.0722 79.8522C13.903 80.1649 13.4756 80.5464 13.1658 80.5493C8.86611 80.5952 4.5779 80.5751 0 80.5751Z"
                  fill="white"
                />
                <path
                  d="M14.4566 23.3911L23.8591 14.0852L14.3447 4.74194H33.2759V18.8271H37.7936V23.3911H14.4566Z"
                  fill="white"
                />
              </svg>
            </div>
            <div className="vision__container__vision__title">Mission</div>
            <div className="vision__container__vision__info">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Commodi
              voluptates autem officia esse.t consectetur, adipisicing elit.
              Commodi voluptates autem officia esse.
            </div>
          </div>
          <div className="mid__line__about__vision"></div>
          <div className="vision__container__left">
            <div
              data-aos="fade-up"
              data-aos-offset="200"
              data-aos-delay="50"
              data-aos-duration="1500"
              data-aos-easing="ease-in-out"
              className="vision__container__vision__svg"
            >
              <svg
                width="80"
                height="81"
                viewBox="0 0 80 81"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M30.6049 39.945L23.9332 41.7236L17.9182 19.0931L58.5544 8.17505C60.5557 15.7062 62.5428 23.1892 64.5638 30.7998L48.5934 35.0803C47.4969 32.0167 45.662 29.7503 42.6151 28.6525C40.5715 27.9028 38.3263 27.9301 36.3013 28.7291C31.9465 30.3658 29.7142 34.6803 30.6049 39.945Z"
                  fill="white"
                />
                <path
                  d="M42.0484 50.5398V75.2183H46.4004V79.8703H32.7497V75.3034H37.1214V50.2079C36.7748 50.8519 36.5352 51.266 36.3238 51.6943C31.9136 60.6977 27.5099 69.7049 23.1128 78.7158C22.6731 79.6179 22.1855 80.0462 21.1088 80.0008C18.8257 79.8987 16.5313 79.9696 14.1665 79.9696V75.2438C15.7337 75.2438 17.2275 75.3034 18.713 75.207C18.9673 75.1774 19.2121 75.0926 19.4307 74.9584C19.6492 74.8242 19.8361 74.6438 19.9785 74.4297C25.3602 63.5428 30.7081 52.6408 36.0222 41.7237C36.1001 41.4824 36.1256 41.2271 36.0969 40.975C36.0682 40.723 35.986 40.4801 35.8559 40.2628C34.4635 38.0729 34.6862 35.6335 36.5183 33.9769C37.3726 33.2276 38.4686 32.8168 39.6019 32.821C40.7351 32.8251 41.8281 33.2441 42.677 33.9996C44.4865 35.6448 44.6867 38.0729 43.2915 40.2912C43.1672 40.5127 43.0913 40.7584 43.0689 41.0118C43.0466 41.2652 43.0783 41.5204 43.1618 41.7605C48.4609 52.6399 53.7965 63.4984 59.1688 74.3361C59.3887 74.7758 60.1243 75.1587 60.6486 75.2041C62.0804 75.3204 63.5292 75.2438 65.0344 75.2438V79.9611C62.3962 79.9611 59.7833 80.015 57.1789 79.9044C56.7899 79.8874 56.3333 79.1555 56.0824 78.6619C51.6459 69.6661 47.23 60.6627 42.8348 51.6518C42.6488 51.2717 42.4543 50.8972 42.2711 50.5171L42.0484 50.5398Z"
                  fill="white"
                />
                <path
                  d="M63.2078 6.92416L67.4499 5.74413L66.3675 1.24243L70.7956 0C73.6142 10.5749 76.3878 21.059 79.2036 31.6594L74.7727 32.9046C74.333 31.3729 73.9073 29.8978 73.4761 28.3973C72.2105 28.7405 71.0493 29.1093 69.8598 29.339C69.5526 29.3986 68.9127 29.0894 68.8451 28.8341C66.9143 21.6547 65.0343 14.4639 63.1543 7.2759C63.1317 7.1908 63.1796 7.09152 63.2078 6.92416Z"
                  fill="white"
                />
                <path
                  d="M6.00935 46.5799C3.98275 38.9466 2.00405 31.4977 0 23.9466L4.46753 22.7212C5.27648 25.7308 6.06569 28.6781 6.89437 31.7529L11.3196 30.5587C10.9419 29.0497 10.584 27.6115 10.1922 26.0429L14.64 24.8231C15.8464 29.3617 17.0245 33.801 18.2394 38.3679C16.9231 38.7423 15.7364 39.131 14.5188 39.3777C14.2369 39.4345 13.6732 39.06 13.5717 38.765C13.1715 37.6304 12.9065 36.4277 12.5514 35.1115L8.10075 36.3085C8.90125 39.3465 9.66229 42.2399 10.4712 45.3148L6.00935 46.5799Z"
                  fill="white"
                />
              </svg>
            </div>
            <div className="vision__container__vision__title">Vision</div>
            <div className="vision__container__vision__info">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Commodi
              voluptates autem officia esse. t consectetur, adipisicing elit.
              Commodi voluptates autem officia esse.
            </div>
          </div>
        </div>
      </div>
      <div className="about__wraper__page">
        <div className="police__left__contant">
          <div className="police__overlay">
            <img src={quapolice} alt="quotation" />
          </div>
          <div className="about__police__contant__text">
            <div className="police__right__contant__heading">
              Quality Policy
            </div>
            <div className="police__right__contant__sub__heading">
              “Work on good prose has three steps: a musical stage when it is
              composed, an architectonic one when it is built, and a textile one
              when it is woven.”
            </div>
          </div>
        </div>
        <div className="police__img__right">
          <img src={abouttwo} alt="quotation" />
        </div>
      </div>

      <LandingServicesSection />
      <div
        data-aos="fade-up"
        data-aos-offset="200"
        data-aos-delay="50"
        data-aos-duration="1200"
        data-aos-easing="ease-in-out"
        className="about__team__section"
      >
        <div className="about__team__heading">OUR TEAM</div>
        <div className="about__team__section__wraper">
          <div className="about__team__section__wraper__card">
            <div className="about__team__section__wraper__card__svg">
              <img src={uk} alt="uk" />
            </div>
            <div className="about__team__section__wraper__card__title">
              UK Office
            </div>
            <div className="about__team__section__wraper__card__info">
              Manchester based team is responsible for marketing , sales,
              merchandising and after sales service to customers. We have a team
              with vast experience in their respective fields.
            </div>
          </div>
          <div className="about__team__section__wraper__card">
            <div className="about__team__section__wraper__card__svg">
              <img src={pak} alt="pakistan" />
            </div>
            <div className="about__team__section__wraper__card__title">
              Pakistan Office
            </div>
            <div className="about__team__section__wraper__card__info">
              Our team of in Pakistan covers SMS ranges and bulk production
              follow ups, in line and pre shipment inspections , shipping follow
              ups and coordination with customers.
            </div>
          </div>
        </div>
      </div>

      <div
        data-aos="fade-up"
        data-aos-offset="200"
        data-aos-delay="50"
        data-aos-duration="1000"
        className="Strategic__container"
      >
        <div className="Strategic__container__contant">
          <div className="Strategic__container__contant__text">
            <div className="Strategic__container__contant__text__heading">
              Our Strategic Supply Partnerships
            </div>
            <div className="Strategic__container__contant__text__sun__heading">
              FTL has formed a strategic partnership with selected leading
              manufacturers of knitted and wovem garments in order to supply a
              complete product range to customers right from development of SMS
              ranges to successful execution of bulk orders.
            </div>
          </div>
          <div className="Strategic__container__contant__img">
            <img src={Strategic} alt="about" />
          </div>
        </div>
      </div>
      <div className="Vendor__container">
        <div
          data-aos="fade-up"
          data-aos-offset="200"
          data-aos-delay="50"
          data-aos-duration="900"
          data-aos-easing="ease-in-out"
          className="Vendor__container__heading"
        >
          Vendor Certifications
        </div>
        <VendorSwiper />
      </div>

      <Footer />
    </>
  );
}
