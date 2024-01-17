import React, { useState, useEffect } from "react";
import "./header.css";
import logo from "../../assets/svg/logo.svg";
import pattern from "../../assets/svg/toglerBottom.svg";
import pattern2 from "../../assets/svg/toglerBottomMob.svg";
import { Link } from "react-scroll";
import "hamburgers/dist/hamburgers.min.css";

function header() {
  const [showStickyDiv, setShowStickyDiv] = useState(false);
  const [showList, setShowList] = useState(false);

  const toggleList = () => {
    setShowList(!showList);
  };

  function debounce(func, wait) {
    let timeout;

    return function executedFunction(...args) {
      const later = () => {
        clearTimeout(timeout);
        func(...args);
      };

      clearTimeout(timeout);
      timeout = setTimeout(later, wait);
    };
  }

  useEffect(() => {
    const debouncedHandleScroll = debounce(handleScroll, 10); // Adjust debounce time (ms) as needed
    window.addEventListener("scroll", debouncedHandleScroll);
    return () => {
      window.removeEventListener("scroll", debouncedHandleScroll);
    };
  }, []);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleScroll = () => {
    if (window.scrollY > 200) {
      setShowStickyDiv(true);
    } else {
      setShowStickyDiv(false);
    }
  };
  useEffect(() => {
    // Toggle body class to disable scrolling when showList is true
    if (showList) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [showList]);
  

  return (
    <>
      {!showStickyDiv && (
        <header className="header-section bg-backgrounds-wisdomWhite">
          <div className="flex justify-between  sm:ps-0 sm:pe-0 sm:pb-5">
            <img
              className="w-[204px] h-[53px] sm:w-[220px] md:h-[66px]"
              src={logo}
              alt=""
            />
            <div className="header-section-contact">
              <a href="tel:+971 50 418 1328">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="43"
                  height="44"
                  viewBox="0 0 43 44"
                  fill="none"
                >
                  <circle
                    cx="21.2823"
                    cy="21.8438"
                    r="20.7986"
                    stroke="#0B434B"
                    strokeWidth="0.967378"
                  />
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M23.8349 31.4928C24.8562 32.1508 26.0719 32.4394 27.28 32.3106C28.4883 32.1813 29.6159 31.6422 30.4751 30.783L31.2249 30.0352C31.5567 29.6995 31.7427 29.2465 31.7427 28.7745C31.7427 28.3025 31.5567 27.8496 31.2249 27.5139L28.0718 24.3807C27.7394 24.0496 27.2893 23.8637 26.8201 23.8637C26.3509 23.8637 25.9009 24.0496 25.5685 24.3807C25.2327 24.7125 24.7798 24.8985 24.3078 24.8985C23.8358 24.8985 23.3829 24.7125 23.0472 24.3807L18.0225 19.3561C17.6902 19.0203 17.5037 18.5669 17.5037 18.0944C17.5037 17.6219 17.6902 17.1686 18.0225 16.8328C18.353 16.5004 18.5386 16.0508 18.5386 15.5821C18.5386 15.1134 18.353 14.6638 18.0225 14.3314L14.9873 11.1783C14.6516 10.8465 14.1987 10.6605 13.7267 10.6605C13.2547 10.6605 12.8017 10.8465 12.466 11.1783L11.7162 11.9281C10.8424 12.7752 10.2856 13.8963 10.1386 15.1044C9.99156 16.3124 10.2633 17.5344 10.9085 18.5663C14.3444 23.6675 18.7337 28.0568 23.8349 31.4928Z"
                    fill="#EE9B4E"
                  />
                </svg>
              </a>
              <div className="">
                <p className="text-[#10351B] text-[15px] font-normal ">
                  Have Questions?
                </p>
                <h3 className="text-[27px] font-bold">
                  {" "}
                  <a href="tel:+971 50 418 1328">+971 50 418 1328</a>
                </h3>
              </div>
            </div>
          </div>
        </header>
      )}
      {showStickyDiv && (
        <header className="header-section-2 bg-white  ">
          <div className="header-section-2-sub ">
            <img className="header-section-2-logo" src={logo} alt="" />
            <div className="flex justify-center items-center gap-1 sm:gap-8 ">
             {!showList ? (
                <div className="header-section-2-contact">
                  <a href="tel:+971 50 418 1328">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="43"
                      height="44"
                      viewBox="0 0 43 44"
                      fill="none"
                    >
                      <circle
                        cx="21.2823"
                        cy="21.8438"
                        r="20.7986"
                        stroke="#0B434B"
                        strokeWidth="0.967378"
                      />
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M23.8349 31.4928C24.8562 32.1508 26.0719 32.4394 27.28 32.3106C28.4883 32.1813 29.6159 31.6422 30.4751 30.783L31.2249 30.0352C31.5567 29.6995 31.7427 29.2465 31.7427 28.7745C31.7427 28.3025 31.5567 27.8496 31.2249 27.5139L28.0718 24.3807C27.7394 24.0496 27.2893 23.8637 26.8201 23.8637C26.3509 23.8637 25.9009 24.0496 25.5685 24.3807C25.2327 24.7125 24.7798 24.8985 24.3078 24.8985C23.8358 24.8985 23.3829 24.7125 23.0472 24.3807L18.0225 19.3561C17.6902 19.0203 17.5037 18.5669 17.5037 18.0944C17.5037 17.6219 17.6902 17.1686 18.0225 16.8328C18.353 16.5004 18.5386 16.0508 18.5386 15.5821C18.5386 15.1134 18.353 14.6638 18.0225 14.3314L14.9873 11.1783C14.6516 10.8465 14.1987 10.6605 13.7267 10.6605C13.2547 10.6605 12.8017 10.8465 12.466 11.1783L11.7162 11.9281C10.8424 12.7752 10.2856 13.8963 10.1386 15.1044C9.99156 16.3124 10.2633 17.5344 10.9085 18.5663C14.3444 23.6675 18.7337 28.0568 23.8349 31.4928Z"
                        fill="#EE9B4E"
                      />
                    </svg>
                  </a>

                  <div>
                    <p className="text-[#10351B] text-[15px] font-normal">
                      Have Questions?
                    </p>
                    <h3 className="text-[27px] font-bold">
                      {" "}
                      <a href="tel:+971 50 418 1328">+971 50 418 1328</a>
                    </h3>
                  </div>
                </div>
              ) : (
                ""
              )}
              <div
                onClick={toggleList}
                className={`hamburger hamburger--spin hamburger-menu ${
                  showList ? "is-active" : ""
                }`}
                type="button"
              >
                <span className="hamburger-text lowercase">Menu</span>
                <span className="hamburger-box">
                  <span className="hamburger-inner"></span>
                </span>
              </div>

              {/* Full-Screen Menu */}
              <div
                className={`full-screen-menu ${showList ? "show" : "hidden"}`}
              >
                <div className="full-screen-menu-content">
                  <ul className="header-list">
                    <li className="header-list-action ">
                      <span>Ready to take action ? </span>
                      <Link
                        to="contactForm"
                        smooth={true}
                        duration={1000}
                        offset={-150}
                        onClick={() => setShowList(false)}
                      >
                        <button className="bg-[#0B434B] text-white cursor-pointer">
                          BOOK A FREE CONSULTATION
                        </button>
                      </Link>
                    </li>
                    <li className="header-li">
                      <Link
                        to="swissSchool"
                        smooth={true}
                        delay={50}
                        duration={1000}
                        offset={-150}
                        onClick={() => setShowList(false)}
                        className="cursor-pointer"
                      >
                        About SSM
                      </Link>
                    </li>
                    <li className="header-li">
                      <Link
                        to="programHighlight"
                        smooth={true}
                        delay={50}
                        duration={1000}
                        offset={-120}
                        onClick={() => setShowList(false)}
                        className="cursor-pointer"
                      >
                        Program Key Highlights
                      </Link>
                    </li>
                    <li className="header-li">
                      <Link
                        to="specialisation"
                        smooth={true}
                        duration={1000}
                        offset={-120}

                        onClick={() => setShowList(false)}
                        className="cursor-pointer"
                      >
                        Specialisations
                      </Link>
                    </li>
                    <li className="header-li">
                      <Link
                        to="acredition"
                        smooth={true}
                        duration={1000}
                        offset={-100}
                        onClick={() => setShowList(false)}
                        className="cursor-pointer"
                      >
                        Accreditations
                      </Link>
                    </li>
                    <li className="header-li">
                      <Link
                        to="review"
                        smooth={true}
                        duration={1000}
                        offset={-120}
                        onClick={() => setShowList(false)}
                        className="cursor-pointer"
                      >
                        Testimonials
                      </Link>
                    </li>
                    <li className="header-li">
                      <Link
                        to="whyLuc"
                        smooth={true}
                        duration={1000}
                        offset={-120}
                        onClick={() => setShowList(false)}
                        className="cursor-pointer"
                      >
                        Why LUC?
                      </Link>
                    </li>
                    <li className="header-li">
                      <Link
                        to="guarantee"
                        smooth={true}
                        duration={1000}
                        offset={-100}
                        onClick={() => setShowList(false)}
                        className="cursor-pointer"
                      >
                        Our Guarantee
                      </Link>
                    </li>
                  </ul>
                  <div className="cta-main">
                    <svg
                      className="arrow-animation"
                      xmlns="http://www.w3.org/2000/svg"
                      width="156"
                      height="76"
                      viewBox="0 0 156 76"
                      fill="none"
                    >
                      <path
                        d="M1 37.2924L128 37.2924"
                        stroke="white"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                      <path
                        d="M110.985 55.6517L129.256 37.3811L110.985 19.1106"
                        stroke="white"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                      <circle
                        cx="118.209"
                        cy="37.7907"
                        r="36.7907"
                        transform="rotate(180 118.209 37.7907)"
                        stroke="white"
                        stroke-width="2"
                      />
                    </svg>
                    <svg
                      className="arrow-animation2"
                      xmlns="http://www.w3.org/2000/svg"
                      width="39"
                      height="51"
                      viewBox="0 0 39 51"
                      fill="none"
                    >
                      <path
                        d="M19.5312 1L19.5312 36.2169"
                        stroke="white"
                        stroke-width="1.02022"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                      <path
                        d="M10.166 27.5375L19.486 36.8575L28.806 27.5375"
                        stroke="white"
                        stroke-width="1.02022"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                      <circle
                        cx="19.2774"
                        cy="31.2226"
                        r="18.2808"
                        transform="rotate(-90 19.2774 31.2226)"
                        stroke="white"
                        stroke-width="1.99329"
                      />
                    </svg>
                    <Link
                      to="contactForm"
                      smooth={true}
                      duration={1000}
                      offset={-150}
                      onClick={() => setShowList(false)}
                    >
                      <button className="ct-button bg-[#0B434B] text-white cursor-pointer">
                        BOOK A FREE CONSULTATION
                      </button>
                    </Link>
                  </div>
                </div>
                <img className=" pattern-desktp" src={pattern} alt="" />
                {/* <img className=" pattern-mob" src={pattern2} alt="" /> */}

              </div>
             
            </div>
          </div>
        </header>
      )}
    </>
  );
}

export default header;
