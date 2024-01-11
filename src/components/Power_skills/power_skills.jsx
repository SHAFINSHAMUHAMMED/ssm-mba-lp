import React from "react";
import "./poweskil.css";
import ButtonDark from "../Buttons/buttonDark";
import Claim_description from "../Description/claim_description";

import fire_icon from "../../assets/svg/powerskill-fire-icon.svg";
import prof1 from "../../assets/prof1.webp";
import prof2 from "../../assets/prof2.webp";
import prof3 from "../../assets/prof3.webp";
import prof4 from "../../assets/prof4.webp";
import prof5 from "../../assets/prof5.webp";
import prof6 from "../../assets/prof6.webp";
import prof7 from "../../assets/prof7.webp";
import prof8 from "../../assets/prof8.webp";
import prof9 from "../../assets/prof9.webp";

import star_lg from '../../assets/svg/star-large-icon.svg'

function power_skills() {
  return (
    <div className="power-skill-main">
      <h2 className="main-head-h2">
      <span className="wavy-underline-orange-small">Top</span> <span className="text-[#259D4A]">MBA Specializations</span> at SSM
      </h2>

      <div className="power-skill-cards">
        {/* 1 */}

        <div className="power-skill-card">
          <svg
            className="power-skill-card-icon"
            width="85"
            height="85"
            viewBox="0 0 85 85"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle cx="42.212" cy="42.212" r="42.212" fill="#259D4A" />
            <path
              d="M42.3313 58.8516V32.1016C40.8114 33.1655 37.6197 33.9761 34.3266 34.0774V29.3151C38.9369 29.1631 41.5714 27.4913 42.5846 24.0968H48.4109V58.8516H42.3313Z"
              fill="white"
            />
          </svg>

          <img className="power-skill-card-img" src={prof1} alt="" />
          <div className="power-skill-card-main">
            <div className="power-skill-card-content">
            <img src={fire_icon} alt="" />
              <h3>MBA in Educational Leadership</h3>
            </div>
            <p>
            This specialization is ideal for those aspiring to leadership roles within educational institutions. It covers strategic management, policy formulation, and the challenges unique to the education sector.

            </p>
          </div>
        </div>
        {/* 2 */}
        <div className="power-skill-card">
          <svg
            className="power-skill-card-icon"
            width="85"
            height="86"
            viewBox="0 0 85 86"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle cx="42.212" cy="43.1007" r="42.212" fill="#259D4A" />
            <path
              d="M28.8656 58.8281V53.7112L45.6351 41.9574C47.7629 40.4882 49.1815 37.6004 49.1815 34.7633C49.1815 31.1662 46.3443 28.7344 42.038 28.7344C37.7316 28.7344 34.8945 31.9768 34.8945 36.8911H29.1696C29.1696 28.785 34.3372 23.3641 42.038 23.3641C49.9921 23.3641 55.261 27.9238 55.261 34.7633C55.261 39.3229 52.8292 43.9839 49.1815 46.4157L39.0489 53.4579H55.2103V58.8281H28.8656Z"
              fill="white"
            />
          </svg>

          <img className="power-skill-card-img" src={prof2} alt="" />
          <div className="power-skill-card-main">
            <div className="power-skill-card-content">
            <img src={fire_icon} alt="" />
              <h3>MBA in Cultural Management</h3>
            </div>
            <p>
            Designed for professionals in the arts, heritage, and cultural sectors, this program focuses on managing cultural organizations, understanding policy and funding landscapes, and developing sustainable cultural initiatives.

            </p>
          </div>
        </div>
        {/* 3 */}
        <div className="power-skill-card">
          <svg
            className="power-skill-card-icon"
            width="85"
            height="85"
            viewBox="0 0 85 85"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle cx="42.212" cy="42.212" r="42.212" fill="#259D4A" />
            <path
              d="M41.6834 59.5608C33.6786 59.5608 28.359 55.1532 28.359 48.567H34.1852C34.1852 51.9614 37.1744 54.1906 41.6834 54.1906C46.547 54.1906 49.7894 52.0121 49.7894 48.7697C49.7894 45.5272 46.547 43.3487 41.6834 43.3487H38.4409V37.9785H41.6834C45.8884 37.9785 48.7255 36.1546 48.7255 33.4188C48.7255 30.6323 45.8884 28.7578 41.6834 28.7578C37.6303 28.7578 34.9452 31.3416 34.9452 35.2427H29.2203C29.2203 28.1499 34.1852 23.3876 41.6834 23.3876C49.5361 23.3876 54.7544 27.0859 54.7544 32.6589C54.7544 35.5466 52.6772 38.6877 49.5868 40.4609C53.2851 42.0315 55.717 45.6286 55.717 49.4283C55.717 55.5078 50.0934 59.5608 41.6834 59.5608Z"
              fill="white"
            />
          </svg>

          <img className="power-skill-card-img" src={prof3} alt="" />
          <div className="power-skill-card-main">
            <div className="power-skill-card-content">
            <img src={fire_icon} alt="" />
              <h3>MBA in Construction Management</h3>
            </div>
            <p>
            Aimed at professionals in the construction industry, this specialization addresses project management, sustainable construction practices, and strategic planning in construction businesses.
            </p>
          </div>
        </div>
        {/* 4 */}
        <div className="power-skill-card">
          <svg
            className="power-skill-card-icon"
            width="85"
            height="85"
            viewBox="0 0 85 85"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle cx="42.212" cy="42.212" r="42.212" fill="#259D4A" />
            <path
              d="M42.9028 58.8516V49.9856H26.5387V45.7805L41.5349 24.0968H48.9824V44.6153H53.8967V49.9856H48.9824V58.8516H42.9028ZM33.8848 44.6153H42.9028V30.683L33.8848 44.6153Z"
              fill="white"
            />
          </svg>

          <img className="power-skill-card-img" src={prof4} alt="" />
          <div className="power-skill-card-main">
            <div className="power-skill-card-content">
            <img src={fire_icon} alt="" />
              <h3>MBA General</h3>
            </div>
            <p>
            A comprehensive program providing a broad understanding of business management, ideal for those seeking versatile roles in business administration and management.

            </p>
          </div>
        </div>
        {/* 5 */}
        <div className="power-skill-card">
          <svg
            className="power-skill-card-icon"
            width="85"
            height="85"
            viewBox="0 0 85 85"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle cx="42.212" cy="42.212" r="42.212" fill="#259D4A" />
            <path
              d="M42.9481 59.5608C34.7408 59.5608 29.2692 55.0012 29.2692 46.8951H34.8421C35.0447 51.2521 38.1858 54.1906 42.7962 54.1906C46.6972 54.1906 50.5982 51.7588 50.5982 46.7431C50.5982 42.1328 47.2038 39.093 42.0869 39.093C39.1991 39.093 36.514 40.6129 35.2981 42.9434L29.7758 42.2341L32.005 24.0968H54.7019V29.4671H36.9699L36.1087 36.2559C38.1352 34.736 41.1243 33.7228 43.5561 33.7228C51.4088 33.7228 56.6271 38.8904 56.6271 46.6925C56.6271 54.3932 51.1555 59.5608 42.9481 59.5608Z"
              fill="white"
            />
          </svg>

          <img className="power-skill-card-img" src={prof5} alt="" />
          <div className="power-skill-card-main">
            <div className="power-skill-card-content">
            <img src={fire_icon} alt="" />
              <h3>MBA in Finance</h3>
            </div>
            <p>
            For those interested in financial management roles, this program covers financial analysis, investment strategies, and global financial markets.

            </p>
          </div>
        </div>
        {/* 6 */}
        <div className="power-skill-card">
          <svg
            className="power-skill-card-icon"
            width="85"
            height="85"
            viewBox="0 0 85 85"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle cx="42.212" cy="42.212" r="42.212" fill="#259D4A" />
            <path
              d="M42.038 59.5608C33.8306 59.5608 28.359 52.3161 28.359 41.4742C28.359 30.6323 33.8306 23.3876 42.0887 23.3876C48.6242 23.3876 53.2345 26.782 54.8557 32.7602H49.0295C48.1175 30.1764 45.6351 28.7578 42.0887 28.7578C37.8836 28.7578 34.8945 32.4562 34.5906 38.0291C36.2624 35.2933 39.7075 33.4695 43.2539 33.4695C50.752 33.5201 55.717 38.7384 55.717 46.4898C55.717 54.3426 50.2454 59.5608 42.038 59.5608ZM42.3926 38.7891C38.137 38.7891 35.2998 41.8795 35.2998 46.5405C35.2998 51.1508 38.137 54.2412 42.342 54.2412C46.699 54.2412 49.6374 51.1508 49.6374 46.4898C49.6374 41.8795 46.7496 38.7891 42.3926 38.7891Z"
              fill="white"
            />
          </svg>

          <img className="power-skill-card-img" src={prof6} alt="" />
          <div className="power-skill-card-main">
            <div className="power-skill-card-content">
            <img src={fire_icon} alt="" />
              <h3>MBA in Health Management</h3>
            </div>
            <p>
            Tailored for professionals in the healthcare sector, this specialization focuses on healthcare systems management, policy, and the economics of healthcare.
            </p>
          </div>
        </div>
         {/* 7 */}
         <div className="power-skill-card">
          
<svg className="power-skill-card-icon" width="85" height="85" viewBox="0 0 62 62" fill="none" xmlns="http://www.w3.org/2000/svg">
<circle cx="30.712" cy="30.712" r="30.712" fill="#259D4A"/>
<path d="M25.6883 42.4404C25.6883 35.9898 28.2316 29.1706 33.687 21.0613H19.9749V17.1541H39.1424V20.5084C32.9867 28.9863 30.1115 36.0267 30.1115 42.4404H25.6883Z" fill="white"/>
</svg>


          <img className="power-skill-card-img" src={prof7} alt="" />
          <div className="power-skill-card-main">
            <div className="power-skill-card-content">
            <img src={fire_icon} alt="" />
              <h3>MBA in Human Resource Management</h3>
            </div>
            <p>
            Designed for individuals aiming to lead HR functions, this program covers strategic HR management, employee relations, and talent management.

            </p>
          </div>
        </div>
         {/* 8 */}
         <div className="power-skill-card">
          
<svg className="power-skill-card-icon" width="85" height="85" viewBox="0 0 62 62" fill="none" xmlns="http://www.w3.org/2000/svg">
<circle cx="30.712" cy="30.712" r="30.712" fill="#259D4A"/>
<path d="M29.5586 42.9565C23.6978 42.9565 19.7906 39.9339 19.7906 35.3632C19.7906 32.8198 21.6336 30.2027 24.3613 28.8757C22.2234 27.6962 20.8227 25.4846 20.8227 23.3098C20.8227 19.292 24.3244 16.638 29.5586 16.638C34.7928 16.638 38.2946 19.292 38.2946 23.3098C38.2946 25.4846 36.8939 27.6962 34.756 28.8757C37.4836 30.2027 39.3267 32.8198 39.3267 35.3632C39.3267 39.9339 35.4195 42.9565 29.5586 42.9565ZM29.5586 26.9221C32.1389 26.9221 33.8713 25.632 33.8713 23.7153C33.8713 21.7985 32.1389 20.5453 29.5586 20.5453C26.9784 20.5453 25.2459 21.7985 25.2459 23.7153C25.2459 25.632 26.9784 26.9221 29.5586 26.9221ZM29.5586 39.0493C32.7655 39.0493 34.9034 37.4274 34.9034 34.9577C34.9034 32.4881 32.7655 30.8294 29.5586 30.8294C26.3518 30.8294 24.2138 32.4881 24.2138 34.9577C24.2138 37.4274 26.3518 39.0493 29.5586 39.0493Z" fill="white"/>
</svg>


          <img className="power-skill-card-img" src={prof8} alt="" />
          <div className="power-skill-card-main">
            <div className="power-skill-card-content">
            <img src={fire_icon} alt="" />
              <h3>MBA in Sport Management</h3>
            </div>
            <p>
            Ideal for those pursuing careers in the sports industry, this specialization focuses on sports marketing, event management, and the business aspects of sports.
            </p>
          </div>
        </div>
         {/* 9 */}
         <div className="power-skill-card">
          
<svg className="power-skill-card-icon" width="85" height="85" viewBox="0 0 62 62" fill="none" xmlns="http://www.w3.org/2000/svg">
<circle cx="30.712" cy="30.712" r="30.712" fill="#259D4A"/>
<path d="M31.1163 16.638C37.0877 16.638 41.0687 21.9091 41.0687 29.7973C41.0687 37.6854 37.0877 42.9565 31.0794 42.9565C26.3244 42.9565 22.9701 40.4868 21.7906 36.1373H26.0295C26.693 38.0172 28.4992 39.0493 31.0794 39.0493C34.1389 39.0493 36.3136 36.3584 36.5348 32.3038C35.3184 34.2942 32.8119 35.6212 30.2316 35.6212C24.7763 35.5844 21.164 31.7877 21.164 26.1481C21.164 20.4347 25.1449 16.638 31.1163 16.638ZM30.8583 31.7509C33.9546 31.7509 36.0188 29.5024 36.0188 26.1112C36.0188 22.7569 33.9546 20.5084 30.8951 20.5084C27.7251 20.5084 25.5872 22.7569 25.5872 26.1481C25.5872 29.5024 27.6883 31.7509 30.8583 31.7509Z" fill="white"/>
</svg>


          <img className="power-skill-card-img" src={prof9} alt="" />
          <div className="power-skill-card-main">
            <div className="power-skill-card-content">
            <img src={fire_icon} alt="" />
              <h3>MBA in Transport Management</h3>
            </div>
            <p>
            Focused on the transport and logistics sector, this program covers supply chain management, transport policy, and logistics strategy.
            </p>
          </div>
        </div>
        <img
          className="power-skill-star"
          src={star_lg}
          alt=""
        />
      </div>
      <ButtonDark
        duration={2500}
        containerStyle={{ justifyContent: "center" }}
      />
      <Claim_description color="rgba(11, 67, 75, 0.79)" />
    </div>
  );
}

export default power_skills;
