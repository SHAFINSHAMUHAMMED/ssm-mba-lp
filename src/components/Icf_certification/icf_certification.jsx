import React from "react";
import MultiStepForm from "../Form/MultiStepForm";

function icf_certification() {
  const currentDate = new Date();

  const monthNames = ["January", "February", "March", "April", "May", "June",
                      "July", "August", "September", "October", "November", "December"];

                      const currentMonth = monthNames[currentDate.getMonth()];
  return (
    <div className="icf-certification-main">
      <img
        className="icf-certification-pattern-1"
        src="\images\GraphicPatter4.webp"
        alt=""
      />
      <img
        className=" icf-certification-pattern-2"
        src="\images\graphicPattern-last-mob.webp"
        alt=""
      />
      <div className="icf-certification-sub">
        <h2>
          Exclusive {currentMonth} Offer{" "}
          <span className="text-[#EE624E]">For The First 30 Registrations</span>
        </h2>

        <svg
          className="icf-progress-bar"
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
          <span className="wavy-underline-green">
            Scholarships</span> <span className="wavy-underline-green"> Of Upto 30%
          </span>{" "}
          <br />(Worth AED 9000)
        </h1>
        <img src="\images\icf-certification-banner.webp" alt="" />
        <MultiStepForm />
      </div>
      <div className="bottom-man-image-div">
        <img
          className="bottom-man-image hidden md:block"
          src="\images\bottom-man.webp"
          alt=""
        />
        <img
          className="bottom-man-image block md:hidden"
          src="\images\bottom-man-mob.webp"
          alt=""
        />
      </div>
    </div>
  );
}

export default icf_certification;
