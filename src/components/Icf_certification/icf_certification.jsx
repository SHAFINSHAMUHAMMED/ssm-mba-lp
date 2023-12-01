import React from "react";
import MultiStepForm from "../Form/MultiStepForm";

function icf_certification() {
  const currentDate = new Date();

  const monthNames = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  const currentMonth = monthNames[currentDate.getMonth()];
  return (
    <div className="icf-certification-main">
      <img
        className="icf-certification-pattern-1"
        src="images/svg/GraphicPatter4.svg"
        alt=""
      />
      <img
        className=" icf-certification-pattern-2"
        src="images/svg/graphicPattern-last-mob.svg"
        alt=""
      />
      <div className="icf-certification-sub">
        <h2>
          Exclusive {currentMonth} Offer{" "}
          <span className="text-[#EE624E]">For The First 30 Registrations</span>
        </h2>
        <div className="progress-container">
          <div className="progress-bar">
            {/* <div className="light-effect"></div> */}
          </div>
        </div>
        <h1>
          Claim Your <span className="highlight-green">Free Career</span>{" "}
          <span className="highlight-green"> Consultation</span> With Our ICF
          Certified Career Coach & Get{" "}
          <span className="wavy-underline-green">Scholarships</span>{" "}
          <span className="wavy-underline-green"> Of Upto 30%</span> <br />
          (Worth AED 9000)
        </h1>
        <img src="images/icf-certification-banner.webp" alt="" />
        <MultiStepForm />
      </div>
      <div className="bottom-man-image-div">
        <img
          className="bottom-man-image-1 "
          src="images/bottom-man.webp"
          alt=""
        />
        <img
          className="bottom-man-image-2"
          src="images/bottom-man-mob.webp"
          alt=""
        />
      </div>
    </div>
  );
}

export default icf_certification;
