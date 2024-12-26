import React from "react";
import './acredition.css'
import ButtonDark from "../Buttons/buttonDark";
import Marquee from "react-fast-marquee";
import Claim_description from "../Description/claim_description";
import { usePopup } from "../Hoocks/PopupContext";

import iao1 from "../../assets/svg/Accredit-iao-1-icon.svg";
import un from "../../assets/svg/Accredit-un-icon.svg"
import iao from "../../assets/svg/Accredit-iao-icon.svg";
import eduqua from "../../assets/svg/Accredit-eduqua-icon.svg";
import usrLazio from "../../assets/svg/Accredit-usr-lazio-icon.svg";
import businet from "../../assets/svg/Accredit-businet-icon.svg";
import xila from "../../assets/svg/Accredit-xila-icon.svg";
import indian from "../../assets/svg/Accredit-indian-icon.svg";
import iacbe from "../../assets/svg/Accredit-iacbe-icon.svg"
import Deac from "../../assets/svg/Acredit-deac.svg"
function acreditions() {

  const { isPopupOpen, togglePopup } = usePopup();

  return (
    <div id="acredition" className="accredit-main">
      <div className="accredit-overlay"></div>
      <div className="accredit-content w-screen z-10">
        <h1 className="accredit-h1 text-center">
          Globally <span className="wavy-underline-green">Recognised</span> &{" "}
          <span className="wavy-underline-green">Accredited</span> By
        </h1>
        <div className=" acredits-marquee-1">
          <Marquee speed={200}>
            <div className="accredit-cards">
              <div className="accredit-card">
                <img src={iao1} alt="" />
              </div>
              <div className="accredit-card">
                <img src={iao} alt="" />
              </div>
              <div className="accredit-card">
                <img src={eduqua} alt="" />
              </div>
              <div className="accredit-card">
                <img src={usrLazio} alt="" />
              </div>
              <div className="accredit-card">
                <img src={businet} alt="" />
              </div>

              <div className="accredit-card">
                <img src={un} alt="" />
              </div>
              <div className="accredit-card">
                <img src={xila} alt="" />
              </div>
              <div className="accredit-card">
                <img src={indian} alt="" />
              </div>
              <div className="accredit-card">
                <img src={iacbe} alt="" />
              </div>
              <div className="accredit-card">
                <img src={Deac} alt="" />
              </div>
            </div>
          </Marquee>
        </div>

        {/* //only for mobile screens */}
        <div className=" acredits-marquee-2 block  pb-5 pt-5">
          <Marquee>
            <div className="accredit-cards">
              <div className="accredit-card">
                <img className="accredit-card-img" src={iao1} alt="" />
              </div>
              <div className="accredit-card">
                <img className="accredit-card-img" src={iao} alt="" />
              </div>
              <div className="accredit-card">
                <img className="accredit-card-img" src={eduqua} alt="" />
              </div>
              <div className="accredit-card">
                <img className="accredit-card-img" src={usrLazio} alt="" />
              </div>
              <div className="accredit-card">
                <img className="accredit-card-img" src={indian} alt="" />
              </div>
              <div className="accredit-card">
                <img className="accredit-card-img" src={businet} alt="" />
              </div>
            </div>
          </Marquee>
          <Marquee direction="right">
            <div className="accredit-cards">
              <div className="accredit-card">
                <img className="accredit-card-img" src={iacbe} alt="" />
              </div>
              <div className="accredit-card">
                <img className="accredit-card-img" src={usrLazio} alt="" />
              </div>

              <div className="accredit-card">
                <img className="accredit-card-img" src={xila} alt="" />
              </div>
              <div className="accredit-card">
                <img className="accredit-card-img" src={businet} alt="" />
              </div>
              <div className="accredit-card">
                <img className="accredit-card-img" src={indian} alt="" />
              </div>
              <div className="accredit-card">
                <img className="accredit-card-img" src={Deac} alt="" />
              </div>
            </div>
          </Marquee>
        </div>
        <div
            id="NewRootRoot"
            className="flex flex-row justify-center w-full  our-mba-button"
          >
            <a
             onClick={togglePopup}
              className="light-effect-button button bg-[#0b434b] w-[95%] sm:w-[539px]  rounded-[56px] sm:rounded-[91px] pt-[25px] pb-[25px] text-[15px] md:text-[15px] xl:text-[23px] font-bold cursor-pointer"
            >
              Request a Call
            </a>
          </div>
      </div>
      {/* </div> */}
    </div>
  );
}

export default acreditions;
