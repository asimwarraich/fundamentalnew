import React from "react";
import videoone from "../img/videoone.mp4";
import banner from "../img/banner.png";

export function Jumbotron() {
  const [isVideo, setIsVideo] = React.useState(false);
  return (
    <div className="landing__main__banner">
      <div className="video__pause__wraper">
        {isVideo ? (
          <video src={videoone} type="video/mp4" id="video" />
        ) : (
          <img src={banner} alt="banner" />
        )}
        <div className="main__video__btn__container">
          <button
            className="main__video__btn"
            title="play/pause"
            onClick={() => {
              setIsVideo(true);
              const video = document.getElementById("video");
              if (video.paused) video.play();
              else video.pause();
              document.querySelector(".main__video__btn").style.display =
                "none";
            }}
          >
            <svg width="36" height="41" viewBox="0 0 36 41" fill="none">
              <path
                d="M34.5 17.9019C36.5 19.0566 36.5 21.9434 34.5 23.0981L5.25001 39.9856C3.25001 41.1403 0.750002 39.6969 0.750002 37.3875L0.750003 3.61251C0.750004 1.30311 3.25 -0.140273 5.25 1.01443L34.5 17.9019Z"
                fill="white"
              />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
}
