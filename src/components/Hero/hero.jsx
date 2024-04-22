import React, { useEffect, useRef, useState } from "react";
import "./hero.css";
import Button1 from "../Buttons/buttonDark";
import Popup from "../Popup_page/popup";
import { usePopup } from "../Hoocks/PopupContext";
import { Link, Element } from "react-scroll";

import heroImg from '../../assets/hero.webp'
import target from "../../assets/svg/target.svg";
import bagIcon from "../../assets/svg/bag-icon.svg";
import graphIcon2 from "../../assets/svg/graph-icon2.svg";
import rankIcon from "../../assets/svg/rank-icon.svg";
import graphicPattern from "../../assets/svg/GraphicPattern.svg";
import graphicPatternMob from "../../assets/svg/GraphicPattern-mob.svg";

function hero() {
  const { isPopupOpen, togglePopup } = usePopup();



  return (
    <>
      <div
        className={`hero-section  ${
          isPopupOpen ? "blur-effect" : ""
        }`}
      >
        <div className="hero-sub">
          <div className="hero-left">
            <div className="sub-heading  md:pe-8">
              <div className="subheding-icon">
                <img
                  className="w-[36px] h-[36px] md:w-[54px] md:h-[54px]"
                  src={target}
                  alt=""
                />
              </div>
              <h4 className="sub-heading-h4 font-bold">
              Are You Missing Out on Salary Raises?
              </h4>
            </div>
              <h1 className="Hero-Headline"><span className="highlight-green">70%</span> Of Companies In The <span className="highlight-green">UAE</span> Have <span className="highlight-green wawy-orange ">  Hiked  Salaries. </span> An <span className="highlight-orange ">MBA </span> Could Be Your Key To Success!</h1>
            <p className="">
            Dive into a world of knowledge and skills that align with market demands, and join the ranks of successful professionals who've elevated their careers with an Online MBA. Start your journey towards success today!
            </p>
            <div
            id="NewRootRoot"
            className="flex flex-row justify-center w-full  our-mba-button"
          >
            <a
             onClick={togglePopup}
              className="light-effect-button button bg-[#0b434b] w-[95%] sm:w-[539px]  rounded-[56px] sm:rounded-[91px] pt-[25px] pb-[25px] text-[15px] md:text-[15px] xl:text-[23px] font-bold cursor-pointer"
            >
              Download Brochure
            </a>
          </div>
            <Link
            to="contactForm"
            // spy={true}
            smooth={true}
            duration={3000}
            delay={100}
            className="flex gap-2 items-center justify-center text-[15px] sm:text-[25px] mt-[15px] mb-0 sm:mb-5">
              <a
                // onClick={togglePopup}
                // href="\images\SSM MBA.pdf"
                // download
                className="flex gap-2 items-center"
                style={{ cursor: "pointer" }}
              >
                <h3 className="">Claim Your Free Consultation Now</h3>
              </a>
            </Link>
          </div>
          <img className="hero-right-img" src={heroImg} alt="" />
          <div className="hero-right">
            <div className="hero-icons-main">
              <img className="bag-icon animated-icon-1" src={bagIcon} alt="" />
              <img
                className="graph-icon2 animated-icon-2"
                src={graphIcon2}
                alt=""
              />
              <img
                className="rank-icon animated-icon-3"
                src={rankIcon}
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
      <img
        className={`graphic-devider hidden sm:block ${
          isPopupOpen ? "blur-effect" : ""
        } `}
        src={graphicPattern}
        alt=""
      />
      <img
        className={`graphic-devider block sm:hidden  ${
          isPopupOpen ? "blur-effect" : ""
        }`}
        src={graphicPatternMob}
        alt=""
      />
      {isPopupOpen && <Popup closePopup={togglePopup} />}
    </>
  );
}

export default hero;
