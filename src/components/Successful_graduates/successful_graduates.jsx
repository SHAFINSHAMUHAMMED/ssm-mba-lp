import React from "react";
import Marquee from "react-fast-marquee";
import ButtonDark from "../Buttons/buttonDark";
import Claim_description from "../Description/claim_description";

function successful_graduates() {
  return (
    <div className="successful-graduates-main">
      <div className="successful-graduates-sub-1">
        <h1>
          Join{" "}
          <span className="wavy-underline">Over 3000+</span> <span className="wavy-underline"> Successful</span>{" "}
          <span className="wavy-underline">Graduates</span> & Take Charge Of
          Your Career
        </h1>
        <img className="hidden sm:block" src="images/graduates.webp" alt="" />
        <img className="block sm:hidden" src="images/graduates-mobile.webp" alt="" />

      </div>
      <img className="hidden sm:block" src="images/GraphicPatter5.webp" alt="" />
      <img className="block sm:hidden" src="images/GraphicPatter5-mobile.webp" alt="" />

      <div className="successful-graduates-carousel">
        <Marquee speed={70} direction="right">
        <div className="successful-graduates-carousel-1 ">
            <img className="gradute-image" src="images/graduate-1.webp" alt="" />
            <img className="gradute-image" src="images/graduate-2.webp" alt="" />
            <img className="gradute-image" src="images/graduate-3.webp" alt="" />
            <img className="gradute-image" src="images/graduate-4.webp" alt="" />
            <img className="gradute-image" src="images/graduate-5.webp" alt="" />
            <img className="gradute-image" src="images/graduate-6.webp" alt="" />
            <img className="gradute-image" src="images/graduate-7.webp" alt="" />
        </div>
        </Marquee>
        <Marquee speed={70} direction="left">
        <div className="successful-graduates-carousel-2 ">
            <img className="gradute-image" src="images/graduate-2.webp" alt="" />
            <img className="gradute-image" src="images/graduate-4.webp" alt="" />
            <img className="gradute-image" src="images/graduate-1.webp" alt="" />
            <img className="gradute-image" src="images/graduate-7.webp" alt="" />
            <img className="gradute-image" src="images/graduate-6.webp" alt="" />
            <img className="gradute-image" src="images/graduate-3.webp" alt="" />
            <img className="gradute-image" src="images/graduate-5.webp" alt="" />
        </div>
        </Marquee>
      </div>
      <ButtonDark duration={2400} containerStyle={{ justifyContent: 'center' }}/>
      <Claim_description color='rgba(11, 67, 75, 0.79)'/>
    </div>
  );
}

export default successful_graduates;
