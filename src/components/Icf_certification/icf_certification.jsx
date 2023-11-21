import React from "react";
import MultiStepForm from "../Form/MultiStepForm";
function icf_certification() {
  return (
    <div className="icf-certification-main">
      <div className="icf-certification-sub">
        <h2>
          Exclusive Current_Month Offer{" "}
          <span className="text-[#EE624E]">For The First 30 Registrations</span>
        </h2>

        <svg
          width="430"
          height="16"
          viewBox="0 0 430 16"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect
            width="430"
            height="16"
            rx="8"
            fill="#9EA39F"
            fill-opacity="0.22"
          />
          <rect width="388" height="16" rx="8" fill="#DD8534" />
        </svg>
        <h1>
          Claim Your <span className="highlight-green">Free Career</span>{" "}
          <span className="highlight-green"> Consultation</span> With Our ICF
          Certified Career Coach & Get{" "}
          <span className="wavy-underline-green2">
            Scholarships Of Upto 30%
          </span>{" "}
          (Worth AED 9000)
        </h1>
        <img src="\images\icf-certification-banner.png" alt="" />
        <MultiStepForm />
      </div>
      <div className="bottom-man-image-div">
      <img className="bottom-man-image" src="\images\bottom-man.png" alt="" />
      </div>
    </div>
  );
}

export default icf_certification;
