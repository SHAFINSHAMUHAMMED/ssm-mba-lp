import React, { useEffect, useRef } from "react";
import "./swiss_school.css";
import Lottie from "lottie-react";
import graph from "../../assets/TopRankedSMSLottie.json";
import { usePopup } from "../Hoocks/PopupContext";

function swiss_school() {
  const { isPopupOpen } = usePopup();
  return (
    <div id="swissSchool" className={`why-swiss-school ${isPopupOpen ? "blur-effect" : ""}`}>
      <h1 className=" swiss-school-h1">
        Elevate Your Career With &nbsp;
        <span className="wavy-underline-green">Swiss School</span> Of
        Management‘s <span className="highlight-orange">Top</span>&nbsp;
        <span className="highlight-orange">Ranked MBA</span> At An Affordable
        Fee
      </h1>
      <div className="swiss-school-p-main">
        <p className="p-margine">
          Searching for a top-tier MBA program that aligns with your career
          aspirations? Then you are at the right place.
        </p>
        <p className="p-margine">
          The Swiss School of Management (SSM), located in Bellinzona,
          Switzerland, is an esteemed institution of higher education with
          globally recognized accreditations. We are committed to fostering a
          diverse, international student body and offer programs that have
          received distinguished certifications from EduQua and Qualify.
        </p>
        <p className="p-margine">
          Our commitment to academic excellence, paired with a focus on
          affordability, makes the Swiss School of Management a prudent choice
          for those aiming to ascend in their professional journey.
        </p>
      </div>
      <Lottie animationData={graph} loop={true} />
    </div>
  );
}

export default swiss_school;
