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
      <HeaderBanner
        svg={
          <svg
            width="118"
            height="131"
            viewBox="0 0 118 131"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M28.5732 0.149673C31.9009 0.997776 35.2113 1.89227 38.5564 2.68228C43.6407 3.84407 45.2118 6.39413 44.748 11.6338C44.4332 15.5013 44.4623 19.3892 44.835 23.2516C45.1886 27.1726 44.5915 29.473 41.2521 31.2738C35.2402 34.5151 35.7968 35.1076 38.4115 40.5273C41.2406 46.3943 45.0553 51.7851 48.5337 57.321C49.9657 59.6039 52.0122 60.0222 54.2094 58.3666C58.4068 55.2124 62.1867 55.6829 66.2681 58.9126C69.0276 61.1026 72.3611 62.6012 75.5439 64.1987C79.7355 66.3015 80.9703 68.8459 79.6021 73.4059C78.8253 75.9908 77.9672 78.5526 77.1208 81.1143C75.283 86.6851 72.0886 88.1605 66.6855 85.8834C53.4858 80.393 42.1809 71.1478 34.1677 59.2902C24.1324 44.6343 20.1786 28.3229 21.3149 10.7102C21.454 8.5319 21.6337 6.06311 22.7468 4.32044C23.8599 2.57776 26.1905 1.52627 27.9645 0.178605L28.5732 0.149673Z"
              fill="white"
            />
            <path
              d="M43.0717 130.85C40.9093 129.601 40.66 127.748 40.9556 125.407C41.918 117.647 42.6949 109.863 43.5703 101.666H39.3962C31.761 101.666 24.1257 101.573 16.4905 101.666C6.36822 101.823 -0.165444 93.9172 0.00268116 85.0818C0.373716 66.4061 0.0896256 47.7247 0.130208 29.0432C0.130208 20.3298 5.30732 14.4046 13.8353 13.086C14.3488 13.0503 14.864 13.0503 15.3774 13.086C15.3247 14.0689 15.3247 15.054 15.3774 16.0369C15.5919 18.0062 14.9137 18.8774 12.8324 19.3364C10.8287 19.7926 9.043 20.9267 7.77592 22.5476C6.50883 24.1684 5.8377 26.1771 5.87548 28.2357C5.82523 47.6917 5.82523 67.1477 5.87548 86.6037C5.87548 91.396 9.40029 95.2241 14.4093 95.6017C19.4182 95.9793 24.4446 95.8051 29.4826 95.8341C34.793 95.8341 40.1093 95.8341 45.4255 95.8341C49.0083 95.8341 49.7677 96.6008 49.4489 100.133C48.8691 106.377 48.2024 112.61 47.4951 119.651C48.6894 118.576 49.3851 118.007 50.0228 117.373C56.5855 110.949 63.183 104.547 69.6645 98.0414C70.3442 97.3024 71.1754 96.7195 72.101 96.3325C73.0266 95.9454 74.0248 95.7635 75.0271 95.7992C83.6228 95.8689 92.2223 95.8689 100.826 95.7992C107.899 95.7586 110.762 93.1329 112.235 86.1273C112.467 85.0236 114.131 83.6005 115.273 83.4611C116.943 83.252 117.824 84.6752 117.876 86.5573C118.108 94.6898 111.006 101.527 101.997 101.608C93.691 101.686 85.3813 101.686 77.0678 101.608C76.1696 101.557 75.2714 101.706 74.4368 102.042C73.6021 102.378 72.8516 102.894 72.2386 103.554C63.9715 111.838 55.6058 120.017 47.2517 128.213C46.3009 129.154 45.2168 129.956 44.1964 130.833L43.0717 130.85Z"
              fill="white"
            />
            <path
              d="M50.4106 18.7846V12.9757H59.8894C73.7047 12.9757 87.5199 13.1326 101.329 12.9293C111 12.7841 118.438 20.1729 117.968 29.6589C117.585 37.3789 117.968 45.1338 117.858 52.8945C117.632 70.269 101.179 84.8436 83.9313 82.9906C83.5196 82.8911 83.1164 82.7591 82.7255 82.5956C83.0698 81.1592 83.5233 79.7512 84.0821 78.3841C84.3077 78.0724 84.6005 77.8155 84.9387 77.6325C85.2769 77.4495 85.6519 77.345 86.0358 77.3269C89.5686 77.3448 93.0681 76.6426 96.3215 75.2627C99.5749 73.8829 102.514 71.8542 104.96 69.3003C107.407 66.7465 109.309 63.7207 110.552 60.407C111.794 57.0933 112.351 53.561 112.188 50.025C111.858 43.1704 112.136 36.2869 112.13 29.4149C112.13 22.7637 108.275 18.8427 101.463 18.8195C85.5257 18.7556 69.5769 18.8194 53.6514 18.7904L50.4106 18.7846Z"
              fill="white"
            />
          </svg>
        }
        title="Contact Us"
      />
      <div className="contact__cards__container">
        <ContactCards
          svg={
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25"
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
                fill="currentColor"
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
                stroke="currentColor"
                strokeWidth="3"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M54.9638 7.62411L28.2768 26.3051L1.58984 7.62411"
                stroke="currentColor"
                strokeWidth="3"
                strokeLinecap="round"
                strokeLinejoin="round"
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
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
      <Footer />
    </>
  );
}
