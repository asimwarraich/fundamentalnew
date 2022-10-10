import React, { useEffect } from "react";
import videosecond from "../img/videosecond.mp4";
import banner from "../img/banner.png";

export function Jumbotronsecond() {
  useEffect(() => {
    const video = document.getElementById("video1");
    video?.play();
  }, []);
  return (
    <div className="landingsecond__main__banner">
      <div className="videosecond__pause__wraper">
        <video
          src={videosecond}
          type="video/mp4"
          id="video1"
          loop
          muted
          autoPlay
        />
        <img src={banner} alt="banner" />
      </div>
    </div>
  );
}
