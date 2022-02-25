import React from "react";
import logo from "../../assets/images/logo_white.png";
import bg from "../../assets/video/Y2Mate.is - hi tech global connection lines background 4k H4RDJ9P-cR1FyHv_rJE-1080p-1645360527831.mp4";

const WelcomeComponent = () => {
  return (
    <div className="w-full items-center justify-center text-center md:h-1/2">
      <div className="relative w-full select-none snap-none object-cover">
        <video autoPlay loop muted>
          <source src={bg} type="video/mp4" />
        </video>
      </div>
      <div className="container absolute top-2.5 mx-auto grid h-16 w-1/2 items-center justify-center space-y-3 px-3 lg:top-1/4">
        <div className="mx-auto">
          <img
            className="mx-auto h-auto w-1/2 items-center"
            src={logo}
            alt="logo"
          />
        </div>
        <div className="top-1/4 grid text-center text-2xl font-medium text-white  md:text-4xl lg:text-6xl ">
          <h1>Be Smart Be creative</h1>
        </div>
      </div>
    </div>
  );
};

export default WelcomeComponent;
