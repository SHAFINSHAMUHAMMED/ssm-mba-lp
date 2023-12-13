import React from "react";
import Marquee from "react-fast-marquee";

function AluminiCarousel() {
  return (
    <div className="alumini-carousel-main">
      <h1 className="">
        After the Cap and Gown: Discover Where{" "}
        <span className="highlight-green">Our</span><span className="text-[#259D4A]"> Alumni</span><span className="text-[#259D4A]">&nbsp;Thrive </span>
      </h1>
      <div className="alumini-carousel-cards m-auto">
        <Marquee direction="right" speed={100}>
          <div className="alumini-carousel-cards-1 ">
            <img className="alumini-carousel-card " src="images/icon1-loreal.webp" alt="" />
            <img className="alumini-carousel-card " src="images/icon2-mashreeq.webp" alt="" />
            <img className="alumini-carousel-card " src="images/icon3-rakbank.webp" alt="" />
            <img className="alumini-carousel-card " src="images/icon4-almarai.webp" alt="" />
            <img className="alumini-carousel-card " src="images/icon5-emirates-nbd.webp" alt="" />
            <img className="alumini-carousel-card " src="images/icon6-standard-chartered.webp" alt="" />
            <img className="alumini-carousel-card " src="images/icon7-emirates.webp" alt="" />
            <img className="alumini-carousel-card " src="images/icon8-unilever.webp" alt="" />
            <img className="alumini-carousel-card " src="images/icon9-nestle.webp" alt="" />            
          </div>
        </Marquee>
      </div>
    </div>
  );
}

export default AluminiCarousel;
