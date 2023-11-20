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
          <span className="wavy-underline-orange2">Over 3000+ Successful</span>{" "}
          <span className="wavy-underline">Graduates</span> & Take Charge Of
          Your Career
        </h1>
      </div>
      <img src="images\GraphicPatter3.png" alt="" />
      <div className="successful-graduates-carousel">
        <Marquee speed={70} direction="right">
        <div className="successful-graduates-carousel-1 ">
            <img className="gradute-image" src="\images\graduate-1.png" alt="" />
            <img className="gradute-image" src="\images\graduate-2.png" alt="" />
            <img className="gradute-image" src="\images\graduate-3.png" alt="" />
            <img className="gradute-image" src="\images\graduate-4.png" alt="" />
            <img className="gradute-image" src="\images\graduate-5.png" alt="" />
            <img className="gradute-image" src="\images\graduate-6.png" alt="" />
            <img className="gradute-image" src="\images\graduate-7.png" alt="" />
        </div>
        </Marquee>
        <Marquee speed={70} direction="left">
        <div className="successful-graduates-carousel-2 ">
            <img className="gradute-image" src="\images\graduate-2.png" alt="" />
            <img className="gradute-image" src="\images\graduate-4.png" alt="" />
            <img className="gradute-image" src="\images\graduate-1.png" alt="" />
            <img className="gradute-image" src="\images\graduate-7.png" alt="" />
            <img className="gradute-image" src="\images\graduate-6.png" alt="" />
            <img className="gradute-image" src="\images\graduate-3.png" alt="" />
            <img className="gradute-image" src="\images\graduate-5.png" alt="" />
        </div>
        </Marquee>
      </div>
      <ButtonDark/>
      <Claim_description color='rgba(11, 67, 75, 0.79)'/>
    </div>
  );
}

export default successful_graduates;
