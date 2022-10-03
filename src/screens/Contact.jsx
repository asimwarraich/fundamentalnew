import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import aboutimg from "../img/aboutimg.png";
import ContactCards from "../components/ContactCards";
import HeaderBanner from "../components/HeaderBanner";

export default function Contact() {
  return (
    <>
      <Header />
      <HeaderBanner svg="scg" title="Contanct US" />
      <div className="contact__cards__container">
        <ContactCards
          svg={
            <svg width="52" height="58" viewBox="0 0 52 58" fill="none">
              <path
                d="M2 20.727L26.078 2L50.156 20.727V50.156C50.156 51.5752 49.5922 52.9362 48.5887 53.9397C47.5852 54.9432 46.2242 55.507 44.805 55.507H7.351C5.93183 55.507 4.57078 54.9432 3.56727 53.9397C2.56376 52.9362 2 51.5752 2 50.156V20.727Z"
                stroke="currentColor"
                stroke-width="3"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M18.0518 55.508V28.754H34.1038V55.508"
                stroke="#071B36"
                stroke-width="3"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          }
          title="Headoffice"
          text="19 Stanley St, Manchester M8 8SH, UK"
        />
        <ContactCards
          svg={
            <svg width="49" height="49" viewBox="0 0 49 49" fill="none">
              <path
                d="M0.0808259 9.58072C0.178748 8.8522 0.497761 8.17124 0.994826 7.62971L8.31083 0.313714C8.88016 -0.174286 9.30683 -0.0929524 9.59083 0.557714L15.5038 11.6577C15.6642 11.963 15.7216 12.3119 15.6675 12.6525C15.6135 12.9931 15.4508 13.3071 15.2038 13.5477L12.5218 16.2297C12.0243 16.7399 11.7223 17.4091 11.6688 18.1197C11.8532 19.8289 12.5074 21.4537 13.5588 22.8137C14.672 24.5327 15.9154 26.1638 17.2778 27.6927L19.1678 29.6417C19.7378 30.2117 20.4678 30.9127 21.3678 31.7417C22.7562 32.9479 24.233 34.0483 25.7858 35.0337C27.8378 36.3957 29.4535 37.0764 30.6328 37.0757C30.9949 37.0837 31.3548 37.0174 31.6903 36.881C32.0259 36.7446 32.3299 36.541 32.5838 36.2827L35.7558 33.1127C35.9713 32.846 36.2809 32.6721 36.6207 32.6267C36.9606 32.5813 37.3049 32.6679 37.5828 32.8687L48.2538 39.1477C48.3797 39.2086 48.4894 39.2983 48.5742 39.4095C48.659 39.5207 48.7164 39.6502 48.7418 39.7877C48.7625 39.9155 48.751 40.0464 48.7084 40.1686C48.6658 40.2908 48.5934 40.4005 48.4978 40.4877L41.1818 47.8037C40.6411 48.3006 39.9607 48.6193 39.2328 48.7167C36.9534 48.97 34.6463 48.6882 32.4948 47.8937C30.0477 47.0842 27.713 45.9677 25.5468 44.5707C23.4135 43.1894 21.4322 41.7894 19.6028 40.3707C17.7735 38.952 16.3105 37.7327 15.2138 36.7127L13.6188 35.1837C13.2128 34.7777 12.6742 34.219 12.0028 33.5077C11.3315 32.7964 10.1618 31.3964 8.49383 29.3077C6.92728 27.3558 5.4819 25.3096 4.16583 23.1807C2.87352 21.0315 1.811 18.7523 0.995826 16.3807C0.149687 14.2203 -0.164147 11.888 0.0808259 9.58072V9.58072Z"
                fill="CurrentColor"
              />
            </svg>
          }
          title="Phone"
          text="+44 (161) 830 7342 "
        />
        <ContactCards
          svg={
            <svg
              width="57"
              height="47"
              viewBox="0 0 57 47"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M6.92684 2.28711H49.6268C51.041 2.29133 52.396 2.85497 53.396 3.85494C54.396 4.85491 54.9596 6.20995 54.9638 7.62411V39.6491C54.9599 41.0636 54.3962 42.4191 53.396 43.4193C52.3958 44.4195 51.0404 44.9832 49.6258 44.9871H6.92684C5.51251 44.9829 4.15732 44.4191 3.15733 43.4189C2.15733 42.4187 1.5938 41.0634 1.58984 39.6491V7.62411C1.59406 6.20995 2.15771 4.85491 3.15768 3.85494C4.15765 2.85497 5.51268 2.29133 6.92684 2.28711Z"
                stroke="CurrentColor"
                stroke-width="3"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M54.9638 7.62411L28.2768 26.3051L1.58984 7.62411"
                stroke="#071B36"
                stroke-width="3"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          }
          title="Mail"
          text=" sales@fundamentaltextiles.co.uk"
        />
      </div>
      <div className="contact__map__main__container">
        <div className="contact__map__main__container__bg">
          <img src={aboutimg} alt="Contact" />
        </div>
        <div className="contact__map__wraper">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2373.5354780265543!2d-2.239148049107507!3d53.49462927991221!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x487bb1b5d02e1ff9%3A0x119915f5f711a76!2s19%20Stanley%20St%2C%20Cheetham%20Hill%2C%20Manchester%20M8%208SH%2C%20UK!5e0!3m2!1sen!2s!4v1664275550280!5m2!1sen!2s"
            width="100%"
            height="100%"
            title="map"
            style={{ border: 0 }}
            allowfullscreen=""
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
      <Footer />
    </>
  );
}
