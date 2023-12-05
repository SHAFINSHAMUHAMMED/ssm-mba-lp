import React from "react";
import { Link, Element } from "react-scroll";

function buttoonOrange() {
  // const handleClick = () => {
  //   const section = document.getElementById("contactForm");
  //   if (section) {
  //     section.scrollIntoView({ behavior: "smooth" });
  //   }
  // };
  // return (
  //   <div id="NewRootRoot" className="flex  justify-center w-screen">
  //     <button
  //       onClick={handleClick}
  //       className="light-effect-button bg-[#EE9B4E] w-[90%] sm:w-[539px] rounded-[56px] sm:rounded-[91px] pt-[25px] pb-[25px] text-[15px] sm:text-[23px] font-bold"
  //     >
  //       <span>Claim Your Free Consultation Now</span>
  //     </button>
  //   </div>
  // );
  return (
    <div id="NewRootRoot" className="flex  justify-center w-screen">
      <Link
        to="contactForm"
        // spy={true}
        smooth={true}
        duration={2000}
        delay={100}
        className="light-effect-button button bg-[#EE9B4E] w-[90%] sm:w-[539px] rounded-[56px] sm:rounded-[91px] pt-[25px] pb-[25px] text-[15px] sm:text-[23px] font-bold"
      >
        <span>Claim Your Free Consultation Now</span>
      </Link>
    </div>
  );
}

export default buttoonOrange;
