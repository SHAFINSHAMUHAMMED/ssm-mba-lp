import React from "react";
import Marquee from "react-fast-marquee";

function AluminiCarousel() {
  return (
    <div className="alumini-carousel-main">
      <h1 className="">
        After the Cap and Gown: Discover Where{" "}
        <span className="highlight-green">Our Alumni Thrive</span>
      </h1>
      <div className="alumini-carousel-cards m-auto">
        <Marquee direction="right" speed={150}>
          <div className="alumini-carousel-cards-1 ">
            <div className="alumini-carousel-card ms-2 sm:ms-10"></div>
            <div className="alumini-carousel-card "></div>
            <div className="alumini-carousel-card "></div>
            <div className="alumini-carousel-card "></div>
            <div className="alumini-carousel-card "></div>
            <div className="alumini-carousel-card "></div>
            <div className="alumini-carousel-card "></div>
            <div className="alumini-carousel-card "></div>
            <div className="alumini-carousel-card "></div>
          </div>
        </Marquee>
        <Marquee direction="left" speed={150}>
          <div className="alumini-carousel-cards-2">
            <div className="alumini-carousel-card ms-2 sm:ms-10"></div>
            <div className="alumini-carousel-card"></div>
            <div className="alumini-carousel-card"></div>
            <div className="alumini-carousel-card"></div>
            <div className="alumini-carousel-card"></div>
            <div className="alumini-carousel-card"></div>
            <div className="alumini-carousel-card"></div>
            <div className="alumini-carousel-card"></div>
            <div className="alumini-carousel-card"></div>
          </div>
        </Marquee>
      </div>
    </div>
  );
}

export default AluminiCarousel;
