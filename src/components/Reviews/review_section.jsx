import React, { useState, useRef } from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import ReactPlayer from "react-player";
import Marquee from "react-fast-marquee";
import ButtonDark from "../Buttons/buttonDark";
import Claim_description from "../Description/claim_description";
function ReviewSection() {
  const initialVideoUrls = [
    "",
    "",
    "",
    "",
  ];
  const carouselRef = useRef();
  const [videoUrls, setVideoUrls] = useState(initialVideoUrls);
  const [activeIndex, setActiveIndex] = useState(0); // Track the active carousel index
  const [playing, setPlaying] = useState(false);

  const handlePlayPause = () => {
    setPlaying(!playing);
  };
  const handleCardClick = (url) => {
    const newVideoUrls = [...videoUrls];
    newVideoUrls[activeIndex] = url; // Update the URL at the active index
    setVideoUrls(newVideoUrls);
    setPlaying(true);
  };

  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 1,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 1,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 1,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };
  const CustomRightArrow = ({ onClick }) => {
    return (
      <button onClick={onClick} className="custom-right-arrow">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="59"
          height="59"
          viewBox="0 0 59 59"
          fill="none"
        >
          <circle cx="29.5" cy="29.5" r="29.5" fill="#EDE6D8" />
          <path
            d="M23.5549 41.1888L35.3294 29.4143L23.5549 17.6397C23.4923 17.5772 23.4376 17.5098 23.3907 17.4388C23.2817 17.2737 23.2149 17.0888 23.1904 16.8995C23.1832 16.8446 23.1797 16.7893 23.1797 16.734C23.1797 16.4454 23.2766 16.1568 23.4704 15.9213C23.4968 15.8893 23.5249 15.8582 23.5549 15.8283C23.5783 15.8048 23.6024 15.7825 23.6272 15.7612C24.1304 15.3292 24.8895 15.3515 25.3663 15.8283L38.0464 28.5085C38.2867 28.7488 38.4217 29.0746 38.4217 29.4143C38.4217 29.754 38.2867 30.0797 38.0464 30.32L25.3663 43.0002C25.3038 43.0627 25.2364 43.1175 25.1654 43.1643C24.6682 43.4925 23.9926 43.4379 23.5549 43.0002C23.4923 42.9377 23.4376 42.8702 23.3907 42.7993C23.0625 42.302 23.1172 41.6264 23.5549 41.1888Z"
            fill="#0B434B"
          />
        </svg>
      </button>
    );
  };

  const CustomLeftArrow = ({ onClick }) => {
    return (
      <button onClick={onClick} className="custom-left-arrow">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="59"
          height="59"
          viewBox="0 0 59 59"
          fill="none"
        >
          <circle
            cx="29.5"
            cy="29.5"
            r="29.5"
            transform="matrix(-1 0 0 1 59 0)"
            fill="#EDE6D8"
          />
          <path
            d="M36.8085 42.7682L23.4428 29.4025L36.8085 16.0368C36.8795 15.9658 36.9416 15.8893 36.9948 15.8087C37.1186 15.6212 37.1944 15.4114 37.2222 15.1965C37.2303 15.1342 37.2344 15.0714 37.2344 15.0087C37.2344 14.6811 37.1244 14.3535 36.9043 14.0861C36.8744 14.0498 36.8425 14.0145 36.8085 13.9805C36.7819 13.9539 36.7545 13.9286 36.7264 13.9044C36.1552 13.414 35.2935 13.4394 34.7523 13.9805L20.3586 28.3742C20.0858 28.647 19.9327 29.0169 19.9327 29.4025C19.9327 29.7881 20.0858 30.1578 20.3586 30.4306L34.7523 44.8243C34.8232 44.8953 34.8997 44.9575 34.9804 45.0106C35.5447 45.3832 36.3117 45.3212 36.8085 44.8243C36.8795 44.7533 36.9416 44.6768 36.9948 44.5963C37.3675 44.0318 37.3054 43.2648 36.8085 42.7682Z"
            fill="#0C434B"
          />
        </svg>
      </button>
    );
  };

  return (
    <div className="review-section-main">
      <h1>
        See What Our{" "}
        <span className="highlight-green">Graduates Have To Say</span> About Us
      </h1>
      <div className="review-video-main">
        <Carousel
          responsive={responsive}
          infinite={true}
          customRightArrow={<CustomRightArrow />}
          customLeftArrow={<CustomLeftArrow />}
          afterChange={(previousSlide, { currentSlide }) => {
            console.log(currentSlide);
            setActiveIndex(currentSlide); // Update active index on slide change
          }}
        >
          {/* <div className="rounded-xl">
            <div className="player-container">
            <ReactPlayer
              url="https://youtu.be/Xx6SKzOUqhQ?si=gF1bUUbdUfYzEXqy"
              playing={playing}
              width="100%"
              height="620px"
              className="react-player"
            />
            </div>
            {!playing && (
              <button onClick={handlePlayPause} className="custom-play-button">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="197"
                  height="197"
                  viewBox="0 0 197 197"
                  fill="none"
                >
                  <g filter="url(#filter0_b_440_1519)">
                    <circle
                      cx="98.5"
                      cy="98.5"
                      r="98.5"
                      fill="white"
                      fill-opacity="0.09"
                    />
                  </g>
                  <g filter="url(#filter1_b_440_1519)">
                    <circle
                      cx="98.5059"
                      cy="98.5059"
                      r="71.5059"
                      fill="#259D4A"
                    />
                  </g>
                  <path
                    d="M127.372 93.2702C132.631 96.3067 132.631 103.898 127.372 106.934L90.8852 128C85.6259 131.036 79.0517 127.241 79.0517 121.168L79.0517 79.0368C79.0517 72.9638 85.6259 69.1683 90.8852 72.2047L127.372 93.2702Z"
                    fill="white"
                  />
                  <defs>
                    <filter
                      id="filter0_b_440_1519"
                      x="-8.96177"
                      y="-8.96177"
                      width="214.924"
                      height="214.924"
                      filterUnits="userSpaceOnUse"
                      color-interpolation-filters="sRGB"
                    >
                      <feFlood flood-opacity="0" result="BackgroundImageFix" />
                      <feGaussianBlur
                        in="BackgroundImageFix"
                        stdDeviation="4.48088"
                      />
                      <feComposite
                        in2="SourceAlpha"
                        operator="in"
                        result="effect1_backgroundBlur_440_1519"
                      />
                      <feBlend
                        mode="normal"
                        in="SourceGraphic"
                        in2="effect1_backgroundBlur_440_1519"
                        result="shape"
                      />
                    </filter>
                    <filter
                      id="filter1_b_440_1519"
                      x="20.2193"
                      y="20.2193"
                      width="156.573"
                      height="156.573"
                      filterUnits="userSpaceOnUse"
                      color-interpolation-filters="sRGB"
                    >
                      <feFlood flood-opacity="0" result="BackgroundImageFix" />
                      <feGaussianBlur
                        in="BackgroundImageFix"
                        stdDeviation="3.39037"
                      />
                      <feComposite
                        in2="SourceAlpha"
                        operator="in"
                        result="effect1_backgroundBlur_440_1519"
                      />
                      <feBlend
                        mode="normal"
                        in="SourceGraphic"
                        in2="effect1_backgroundBlur_440_1519"
                        result="shape"
                      />
                    </filter>
                  </defs>
                </svg>
              </button>
            )}
          </div>
          <div className="rounded-xl">
          <div className="player-container">
            <ReactPlayer
              url="https://youtu.be/Xx6SKzOUqhQ?si=gF1bUUbdUfYzEXqy"
              playing={playing}
              width="100%"
              height="620px"
              className="react-player"
            />
          </div>
            {!playing && (
              <button onClick={handlePlayPause} className="custom-play-button">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="197"
                  height="197"
                  viewBox="0 0 197 197"
                  fill="none"
                >
                  <g filter="url(#filter0_b_440_1519)">
                    <circle
                      cx="98.5"
                      cy="98.5"
                      r="98.5"
                      fill="white"
                      fill-opacity="0.09"
                    />
                  </g>
                  <g filter="url(#filter1_b_440_1519)">
                    <circle
                      cx="98.5059"
                      cy="98.5059"
                      r="71.5059"
                      fill="#259D4A"
                    />
                  </g>
                  <path
                    d="M127.372 93.2702C132.631 96.3067 132.631 103.898 127.372 106.934L90.8852 128C85.6259 131.036 79.0517 127.241 79.0517 121.168L79.0517 79.0368C79.0517 72.9638 85.6259 69.1683 90.8852 72.2047L127.372 93.2702Z"
                    fill="white"
                  />
                  <defs>
                    <filter
                      id="filter0_b_440_1519"
                      x="-8.96177"
                      y="-8.96177"
                      width="214.924"
                      height="214.924"
                      filterUnits="userSpaceOnUse"
                      color-interpolation-filters="sRGB"
                    >
                      <feFlood flood-opacity="0" result="BackgroundImageFix" />
                      <feGaussianBlur
                        in="BackgroundImageFix"
                        stdDeviation="4.48088"
                      />
                      <feComposite
                        in2="SourceAlpha"
                        operator="in"
                        result="effect1_backgroundBlur_440_1519"
                      />
                      <feBlend
                        mode="normal"
                        in="SourceGraphic"
                        in2="effect1_backgroundBlur_440_1519"
                        result="shape"
                      />
                    </filter>
                    <filter
                      id="filter1_b_440_1519"
                      x="20.2193"
                      y="20.2193"
                      width="156.573"
                      height="156.573"
                      filterUnits="userSpaceOnUse"
                      color-interpolation-filters="sRGB"
                    >
                      <feFlood flood-opacity="0" result="BackgroundImageFix" />
                      <feGaussianBlur
                        in="BackgroundImageFix"
                        stdDeviation="3.39037"
                      />
                      <feComposite
                        in2="SourceAlpha"
                        operator="in"
                        result="effect1_backgroundBlur_440_1519"
                      />
                      <feBlend
                        mode="normal"
                        in="SourceGraphic"
                        in2="effect1_backgroundBlur_440_1519"
                        result="shape"
                      />
                    </filter>
                  </defs>
                </svg>
              </button>
            )}
          </div>
          <div className="rounded-xl">
          <div className="player-container">
            <ReactPlayer
              url="https://youtu.be/Xx6SKzOUqhQ?si=gF1bUUbdUfYzEXqy"
              playing={playing}
              width="100%"
              height="620px"
              className="react-player"
            />
            </div>
            {!playing && (
              <button onClick={handlePlayPause} className="custom-play-button">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="197"
                  height="197"
                  viewBox="0 0 197 197"
                  fill="none"
                >
                  <g filter="url(#filter0_b_440_1519)">
                    <circle
                      cx="98.5"
                      cy="98.5"
                      r="98.5"
                      fill="white"
                      fill-opacity="0.09"
                    />
                  </g>
                  <g filter="url(#filter1_b_440_1519)">
                    <circle
                      cx="98.5059"
                      cy="98.5059"
                      r="71.5059"
                      fill="#259D4A"
                    />
                  </g>
                  <path
                    d="M127.372 93.2702C132.631 96.3067 132.631 103.898 127.372 106.934L90.8852 128C85.6259 131.036 79.0517 127.241 79.0517 121.168L79.0517 79.0368C79.0517 72.9638 85.6259 69.1683 90.8852 72.2047L127.372 93.2702Z"
                    fill="white"
                  />
                  <defs>
                    <filter
                      id="filter0_b_440_1519"
                      x="-8.96177"
                      y="-8.96177"
                      width="214.924"
                      height="214.924"
                      filterUnits="userSpaceOnUse"
                      color-interpolation-filters="sRGB"
                    >
                      <feFlood flood-opacity="0" result="BackgroundImageFix" />
                      <feGaussianBlur
                        in="BackgroundImageFix"
                        stdDeviation="4.48088"
                      />
                      <feComposite
                        in2="SourceAlpha"
                        operator="in"
                        result="effect1_backgroundBlur_440_1519"
                      />
                      <feBlend
                        mode="normal"
                        in="SourceGraphic"
                        in2="effect1_backgroundBlur_440_1519"
                        result="shape"
                      />
                    </filter>
                    <filter
                      id="filter1_b_440_1519"
                      x="20.2193"
                      y="20.2193"
                      width="156.573"
                      height="156.573"
                      filterUnits="userSpaceOnUse"
                      color-interpolation-filters="sRGB"
                    >
                      <feFlood flood-opacity="0" result="BackgroundImageFix" />
                      <feGaussianBlur
                        in="BackgroundImageFix"
                        stdDeviation="3.39037"
                      />
                      <feComposite
                        in2="SourceAlpha"
                        operator="in"
                        result="effect1_backgroundBlur_440_1519"
                      />
                      <feBlend
                        mode="normal"
                        in="SourceGraphic"
                        in2="effect1_backgroundBlur_440_1519"
                        result="shape"
                      />
                    </filter>
                  </defs>
                </svg>
              </button>
            )}
          </div>
          <div className="rounded-xl">
          <div className="player-container">
            <ReactPlayer
              url="https://youtu.be/Xx6SKzOUqhQ?si=gF1bUUbdUfYzEXqy"
              playing={playing}
              width="100%"
              height="620px"
              className="react-player"
            />
            </div>
            {!playing && (
              <button onClick={handlePlayPause} className="custom-play-button">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="197"
                  height="197"
                  viewBox="0 0 197 197"
                  fill="none"
                >
                  <g filter="url(#filter0_b_440_1519)">
                    <circle
                      cx="98.5"
                      cy="98.5"
                      r="98.5"
                      fill="white"
                      fill-opacity="0.09"
                    />
                  </g>
                  <g filter="url(#filter1_b_440_1519)">
                    <circle
                      cx="98.5059"
                      cy="98.5059"
                      r="71.5059"
                      fill="#259D4A"
                    />
                  </g>
                  <path
                    d="M127.372 93.2702C132.631 96.3067 132.631 103.898 127.372 106.934L90.8852 128C85.6259 131.036 79.0517 127.241 79.0517 121.168L79.0517 79.0368C79.0517 72.9638 85.6259 69.1683 90.8852 72.2047L127.372 93.2702Z"
                    fill="white"
                  />
                  <defs>
                    <filter
                      id="filter0_b_440_1519"
                      x="-8.96177"
                      y="-8.96177"
                      width="214.924"
                      height="214.924"
                      filterUnits="userSpaceOnUse"
                      color-interpolation-filters="sRGB"
                    >
                      <feFlood flood-opacity="0" result="BackgroundImageFix" />
                      <feGaussianBlur
                        in="BackgroundImageFix"
                        stdDeviation="4.48088"
                      />
                      <feComposite
                        in2="SourceAlpha"
                        operator="in"
                        result="effect1_backgroundBlur_440_1519"
                      />
                      <feBlend
                        mode="normal"
                        in="SourceGraphic"
                        in2="effect1_backgroundBlur_440_1519"
                        result="shape"
                      />
                    </filter>
                    <filter
                      id="filter1_b_440_1519"
                      x="20.2193"
                      y="20.2193"
                      width="156.573"
                      height="156.573"
                      filterUnits="userSpaceOnUse"
                      color-interpolation-filters="sRGB"
                    >
                      <feFlood flood-opacity="0" result="BackgroundImageFix" />
                      <feGaussianBlur
                        in="BackgroundImageFix"
                        stdDeviation="3.39037"
                      />
                      <feComposite
                        in2="SourceAlpha"
                        operator="in"
                        result="effect1_backgroundBlur_440_1519"
                      />
                      <feBlend
                        mode="normal"
                        in="SourceGraphic"
                        in2="effect1_backgroundBlur_440_1519"
                        result="shape"
                      />
                    </filter>
                  </defs>
                </svg>
              </button>
            )}
          </div> */}
          {videoUrls.map((url, index) => (
            <div
              key={index}
              className={`rounded-xl ${index === activeIndex ? "active" : ""}`}
            >
              {/* Render the video player */}
              <div className="player-container">
                <ReactPlayer
                  url={url}
                  playing={playing && activeIndex === index}
                  onClick={() => setActiveIndex(index)}
                  width="100%"
                  height="620px"
                  className="react-player"
                />
              </div>
            </div>
          ))}
        </Carousel>
      </div>
      <div className="review-video-sub">
        <div className="review-video-sub-cards">
          <div
            className="review-video-sub-card"
            onClick={() =>
              handleCardClick(
                "",
                0
              )
            }
          >
            <img src="\images\video-card.png" alt="" />
          </div>
          <div
            className="review-video-sub-card"
            onClick={() =>
              handleCardClick(
                "",
                1
              )
            }
          >
            <img src="\images\video-card.png" alt="" />
          </div>
          <div
            className="review-video-sub-card"
            onClick={() =>
              handleCardClick(
                "",
                2
              )
            }
          >
            <img src="\images\video-card.png" alt="" />
          </div>
          <div
            className="review-video-sub-card"
            onClick={() =>
              handleCardClick(
                "",
                3
              )
            }
          >
            <img src="\images\video-card.png" alt="" />
          </div>
        </div>
      </div>

      <div className="user-reviews">
      <Marquee speed={100}>
        <div className="flex gap-10 overflow-hidden">
          <div className="user-review-card ms-10">
            <div className="flex justify-between mb-6">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="74"
                height="52"
                viewBox="0 0 74 52"
                fill="none"
              >
                <path
                  d="M17.0194 0C12.4734 0 8.19945 1.77031 4.98488 4.9848C1.77031 8.19937 0 12.4733 0 17.0193C0 19.3568 0.387601 21.5676 1.15212 23.5904C1.94137 25.6786 3.11311 27.5154 4.63479 29.0496C7.87213 32.3136 12.538 34.0388 18.1276 34.0388C18.1703 34.0388 18.2028 34.0413 18.2264 34.0443C18.396 34.5054 18.2193 36.4834 16.1736 39.7794C14.0288 43.2347 10.7892 46.5559 7.28551 48.8911C6.73429 49.2586 6.48852 49.9435 6.68048 50.5775C6.87236 51.2116 7.45672 51.6452 8.11918 51.6452C11.0143 51.6452 17.4565 49.6884 23.338 44.2975C28.2197 39.8231 34.0388 31.6508 34.0388 18.1277C34.0388 13.0159 32.2754 8.37051 29.0736 5.04719C25.9377 1.7924 21.6568 0 17.0194 0Z"
                  fill="#0B434B"
                />
                <path
                  d="M69.0344 5.04711C65.8986 1.79241 61.6178 0 56.9803 0C52.4343 0 48.1603 1.77031 44.9458 4.9848C41.7312 8.19937 39.9609 12.4733 39.9609 17.0193C39.9609 19.3568 40.3485 21.5676 41.1131 23.5904C41.9023 25.6786 43.074 27.5154 44.5957 29.0496C47.8331 32.3136 52.4989 34.0388 58.0886 34.0388C58.1313 34.0388 58.1638 34.0413 58.1873 34.0443C58.3569 34.5054 58.1803 36.4834 56.1345 39.7794C53.9898 43.2348 50.7502 46.5559 47.2464 48.8911C46.6952 49.2586 46.4494 49.9435 46.6414 50.5775C46.8334 51.2116 47.4177 51.6452 48.0801 51.6452C50.9753 51.6452 57.4174 49.6884 63.2989 44.2975C68.1806 39.8231 73.9998 31.6508 73.9998 18.1277C73.9997 13.0158 72.2363 8.37044 69.0344 5.04711Z"
                  fill="#0B434B"
                />
              </svg>
              <img src="\images\svg\stars-review.svg" alt="" />
            </div>
            <p className="">
              The flexibility of the programs, its budget friendly & the staff
              is very supportive they go extra miles to resolve the issues if I
              may have any. The provided information from admission is helpful
              through out the program.I appreciate the team of LUC, They are
              different & better then other colleges. Specially i could
              remembered and Thanks to Anousha was given me lot of ideas about
              my program and she is really very much experienced overall. Thanks
              Anousha and team gain.
            </p>
            <div className="flex justify-between">
              <div className="flex gap-2 items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="48"
                  height="48"
                  viewBox="0 0 48 48"
                  fill="none"
                >
                  <circle cx="24" cy="24" r="24" fill="#DCEEF0" />
                </svg>
                <h5>Chef jayaweera</h5>
              </div>
              <img src="\images\svg\verified-review.svg" alt="" />
            </div>
          </div>
          <div className="user-review-card">
            <div className="flex justify-between mb-6">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="74"
                height="52"
                viewBox="0 0 74 52"
                fill="none"
              >
                <path
                  d="M17.0194 0C12.4734 0 8.19945 1.77031 4.98488 4.9848C1.77031 8.19937 0 12.4733 0 17.0193C0 19.3568 0.387601 21.5676 1.15212 23.5904C1.94137 25.6786 3.11311 27.5154 4.63479 29.0496C7.87213 32.3136 12.538 34.0388 18.1276 34.0388C18.1703 34.0388 18.2028 34.0413 18.2264 34.0443C18.396 34.5054 18.2193 36.4834 16.1736 39.7794C14.0288 43.2347 10.7892 46.5559 7.28551 48.8911C6.73429 49.2586 6.48852 49.9435 6.68048 50.5775C6.87236 51.2116 7.45672 51.6452 8.11918 51.6452C11.0143 51.6452 17.4565 49.6884 23.338 44.2975C28.2197 39.8231 34.0388 31.6508 34.0388 18.1277C34.0388 13.0159 32.2754 8.37051 29.0736 5.04719C25.9377 1.7924 21.6568 0 17.0194 0Z"
                  fill="#0B434B"
                />
                <path
                  d="M69.0344 5.04711C65.8986 1.79241 61.6178 0 56.9803 0C52.4343 0 48.1603 1.77031 44.9458 4.9848C41.7312 8.19937 39.9609 12.4733 39.9609 17.0193C39.9609 19.3568 40.3485 21.5676 41.1131 23.5904C41.9023 25.6786 43.074 27.5154 44.5957 29.0496C47.8331 32.3136 52.4989 34.0388 58.0886 34.0388C58.1313 34.0388 58.1638 34.0413 58.1873 34.0443C58.3569 34.5054 58.1803 36.4834 56.1345 39.7794C53.9898 43.2348 50.7502 46.5559 47.2464 48.8911C46.6952 49.2586 46.4494 49.9435 46.6414 50.5775C46.8334 51.2116 47.4177 51.6452 48.0801 51.6452C50.9753 51.6452 57.4174 49.6884 63.2989 44.2975C68.1806 39.8231 73.9998 31.6508 73.9998 18.1277C73.9997 13.0158 72.2363 8.37044 69.0344 5.04711Z"
                  fill="#0B434B"
                />
              </svg>
              <img src="\images\svg\stars-review.svg" alt="" />
            </div>
            <p className="">
              The flexibility of the programs, its budget friendly & the staff
              is very supportive they go extra miles to resolve the issues if I
              may have any. The provided information from admission is helpful
              through out the program.I appreciate the team of LUC, They are
              different & better then other colleges. Specially i could
              remembered and Thanks to Anousha was given me lot of ideas about
              my program and she is really very much experienced overall. Thanks
              Anousha and team gain.
            </p>
            <div className="flex justify-between">
              <div className="flex gap-2 items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="48"
                  height="48"
                  viewBox="0 0 48 48"
                  fill="none"
                >
                  <circle cx="24" cy="24" r="24" fill="#DCEEF0" />
                </svg>
                <h5>Chef jayaweera</h5>
              </div>
              <img src="\images\svg\verified-review.svg" alt="" />
            </div>
          </div>
          <div className="user-review-card">
            <div className="flex justify-between mb-6">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="74"
                height="52"
                viewBox="0 0 74 52"
                fill="none"
              >
                <path
                  d="M17.0194 0C12.4734 0 8.19945 1.77031 4.98488 4.9848C1.77031 8.19937 0 12.4733 0 17.0193C0 19.3568 0.387601 21.5676 1.15212 23.5904C1.94137 25.6786 3.11311 27.5154 4.63479 29.0496C7.87213 32.3136 12.538 34.0388 18.1276 34.0388C18.1703 34.0388 18.2028 34.0413 18.2264 34.0443C18.396 34.5054 18.2193 36.4834 16.1736 39.7794C14.0288 43.2347 10.7892 46.5559 7.28551 48.8911C6.73429 49.2586 6.48852 49.9435 6.68048 50.5775C6.87236 51.2116 7.45672 51.6452 8.11918 51.6452C11.0143 51.6452 17.4565 49.6884 23.338 44.2975C28.2197 39.8231 34.0388 31.6508 34.0388 18.1277C34.0388 13.0159 32.2754 8.37051 29.0736 5.04719C25.9377 1.7924 21.6568 0 17.0194 0Z"
                  fill="#0B434B"
                />
                <path
                  d="M69.0344 5.04711C65.8986 1.79241 61.6178 0 56.9803 0C52.4343 0 48.1603 1.77031 44.9458 4.9848C41.7312 8.19937 39.9609 12.4733 39.9609 17.0193C39.9609 19.3568 40.3485 21.5676 41.1131 23.5904C41.9023 25.6786 43.074 27.5154 44.5957 29.0496C47.8331 32.3136 52.4989 34.0388 58.0886 34.0388C58.1313 34.0388 58.1638 34.0413 58.1873 34.0443C58.3569 34.5054 58.1803 36.4834 56.1345 39.7794C53.9898 43.2348 50.7502 46.5559 47.2464 48.8911C46.6952 49.2586 46.4494 49.9435 46.6414 50.5775C46.8334 51.2116 47.4177 51.6452 48.0801 51.6452C50.9753 51.6452 57.4174 49.6884 63.2989 44.2975C68.1806 39.8231 73.9998 31.6508 73.9998 18.1277C73.9997 13.0158 72.2363 8.37044 69.0344 5.04711Z"
                  fill="#0B434B"
                />
              </svg>
              <img src="\images\svg\stars-review.svg" alt="" />
            </div>
            <p className="">
              The flexibility of the programs, its budget friendly & the staff
              is very supportive they go extra miles to resolve the issues if I
              may have any. The provided information from admission is helpful
              through out the program.I appreciate the team of LUC, They are
              different & better then other colleges. Specially i could
              remembered and Thanks to Anousha was given me lot of ideas about
              my program and she is really very much experienced overall. Thanks
              Anousha and team gain.
            </p>
            <div className="flex justify-between">
              <div className="flex gap-2 items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="48"
                  height="48"
                  viewBox="0 0 48 48"
                  fill="none"
                >
                  <circle cx="24" cy="24" r="24" fill="#DCEEF0" />
                </svg>
                <h5>Chef jayaweera</h5>
              </div>
              <img src="\images\svg\verified-review.svg" alt="" />
            </div>
          </div>
          <div className="user-review-card">
            <div className="flex justify-between mb-6">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="74"
                height="52"
                viewBox="0 0 74 52"
                fill="none"
              >
                <path
                  d="M17.0194 0C12.4734 0 8.19945 1.77031 4.98488 4.9848C1.77031 8.19937 0 12.4733 0 17.0193C0 19.3568 0.387601 21.5676 1.15212 23.5904C1.94137 25.6786 3.11311 27.5154 4.63479 29.0496C7.87213 32.3136 12.538 34.0388 18.1276 34.0388C18.1703 34.0388 18.2028 34.0413 18.2264 34.0443C18.396 34.5054 18.2193 36.4834 16.1736 39.7794C14.0288 43.2347 10.7892 46.5559 7.28551 48.8911C6.73429 49.2586 6.48852 49.9435 6.68048 50.5775C6.87236 51.2116 7.45672 51.6452 8.11918 51.6452C11.0143 51.6452 17.4565 49.6884 23.338 44.2975C28.2197 39.8231 34.0388 31.6508 34.0388 18.1277C34.0388 13.0159 32.2754 8.37051 29.0736 5.04719C25.9377 1.7924 21.6568 0 17.0194 0Z"
                  fill="#0B434B"
                />
                <path
                  d="M69.0344 5.04711C65.8986 1.79241 61.6178 0 56.9803 0C52.4343 0 48.1603 1.77031 44.9458 4.9848C41.7312 8.19937 39.9609 12.4733 39.9609 17.0193C39.9609 19.3568 40.3485 21.5676 41.1131 23.5904C41.9023 25.6786 43.074 27.5154 44.5957 29.0496C47.8331 32.3136 52.4989 34.0388 58.0886 34.0388C58.1313 34.0388 58.1638 34.0413 58.1873 34.0443C58.3569 34.5054 58.1803 36.4834 56.1345 39.7794C53.9898 43.2348 50.7502 46.5559 47.2464 48.8911C46.6952 49.2586 46.4494 49.9435 46.6414 50.5775C46.8334 51.2116 47.4177 51.6452 48.0801 51.6452C50.9753 51.6452 57.4174 49.6884 63.2989 44.2975C68.1806 39.8231 73.9998 31.6508 73.9998 18.1277C73.9997 13.0158 72.2363 8.37044 69.0344 5.04711Z"
                  fill="#0B434B"
                />
              </svg>
              <img src="\images\svg\stars-review.svg" alt="" />
            </div>
            <p className="">
              The flexibility of the programs, its budget friendly & the staff
              is very supportive they go extra miles to resolve the issues if I
              may have any. The provided information from admission is helpful
              through out the program.I appreciate the team of LUC, They are
              different & better then other colleges. Specially i could
              remembered and Thanks to Anousha was given me lot of ideas about
              my program and she is really very much experienced overall. Thanks
              Anousha and team gain.
            </p>
            <div className="flex justify-between">
              <div className="flex gap-2 items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="48"
                  height="48"
                  viewBox="0 0 48 48"
                  fill="none"
                >
                  <circle cx="24" cy="24" r="24" fill="#DCEEF0" />
                </svg>
                <h5>Chef jayaweera</h5>
              </div>
              <img src="\images\svg\verified-review.svg" alt="" />
            </div>
          </div>
        </div>
        </Marquee>
        <Marquee speed={100} direction="right">
        <div className="flex gap-10 overflow-hidden">
          <div className="user-review-card ms-10">
            <div className="flex justify-between mb-6">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="74"
                height="52"
                viewBox="0 0 74 52"
                fill="none"
              >
                <path
                  d="M17.0194 0C12.4734 0 8.19945 1.77031 4.98488 4.9848C1.77031 8.19937 0 12.4733 0 17.0193C0 19.3568 0.387601 21.5676 1.15212 23.5904C1.94137 25.6786 3.11311 27.5154 4.63479 29.0496C7.87213 32.3136 12.538 34.0388 18.1276 34.0388C18.1703 34.0388 18.2028 34.0413 18.2264 34.0443C18.396 34.5054 18.2193 36.4834 16.1736 39.7794C14.0288 43.2347 10.7892 46.5559 7.28551 48.8911C6.73429 49.2586 6.48852 49.9435 6.68048 50.5775C6.87236 51.2116 7.45672 51.6452 8.11918 51.6452C11.0143 51.6452 17.4565 49.6884 23.338 44.2975C28.2197 39.8231 34.0388 31.6508 34.0388 18.1277C34.0388 13.0159 32.2754 8.37051 29.0736 5.04719C25.9377 1.7924 21.6568 0 17.0194 0Z"
                  fill="#0B434B"
                />
                <path
                  d="M69.0344 5.04711C65.8986 1.79241 61.6178 0 56.9803 0C52.4343 0 48.1603 1.77031 44.9458 4.9848C41.7312 8.19937 39.9609 12.4733 39.9609 17.0193C39.9609 19.3568 40.3485 21.5676 41.1131 23.5904C41.9023 25.6786 43.074 27.5154 44.5957 29.0496C47.8331 32.3136 52.4989 34.0388 58.0886 34.0388C58.1313 34.0388 58.1638 34.0413 58.1873 34.0443C58.3569 34.5054 58.1803 36.4834 56.1345 39.7794C53.9898 43.2348 50.7502 46.5559 47.2464 48.8911C46.6952 49.2586 46.4494 49.9435 46.6414 50.5775C46.8334 51.2116 47.4177 51.6452 48.0801 51.6452C50.9753 51.6452 57.4174 49.6884 63.2989 44.2975C68.1806 39.8231 73.9998 31.6508 73.9998 18.1277C73.9997 13.0158 72.2363 8.37044 69.0344 5.04711Z"
                  fill="#0B434B"
                />
              </svg>
              <img src="\images\svg\stars-review.svg" alt="" />
            </div>
            <p className="">
              The flexibility of the programs, its budget friendly & the staff
              is very supportive they go extra miles to resolve the issues if I
              may have any. The provided information from admission is helpful
              through out the program.I appreciate the team of LUC, They are
              different & better then other colleges. Specially i could
              remembered and Thanks to Anousha was given me lot of ideas about
              my program and she is really very much experienced overall. Thanks
              Anousha and team gain.
            </p>
            <div className="flex justify-between">
              <div className="flex gap-2 items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="48"
                  height="48"
                  viewBox="0 0 48 48"
                  fill="none"
                >
                  <circle cx="24" cy="24" r="24" fill="#DCEEF0" />
                </svg>
                <h5>Chef jayaweera</h5>
              </div>
              <img src="\images\svg\verified-review.svg" alt="" />
            </div>
          </div>
          <div className="user-review-card">
            <div className="flex justify-between mb-6">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="74"
                height="52"
                viewBox="0 0 74 52"
                fill="none"
              >
                <path
                  d="M17.0194 0C12.4734 0 8.19945 1.77031 4.98488 4.9848C1.77031 8.19937 0 12.4733 0 17.0193C0 19.3568 0.387601 21.5676 1.15212 23.5904C1.94137 25.6786 3.11311 27.5154 4.63479 29.0496C7.87213 32.3136 12.538 34.0388 18.1276 34.0388C18.1703 34.0388 18.2028 34.0413 18.2264 34.0443C18.396 34.5054 18.2193 36.4834 16.1736 39.7794C14.0288 43.2347 10.7892 46.5559 7.28551 48.8911C6.73429 49.2586 6.48852 49.9435 6.68048 50.5775C6.87236 51.2116 7.45672 51.6452 8.11918 51.6452C11.0143 51.6452 17.4565 49.6884 23.338 44.2975C28.2197 39.8231 34.0388 31.6508 34.0388 18.1277C34.0388 13.0159 32.2754 8.37051 29.0736 5.04719C25.9377 1.7924 21.6568 0 17.0194 0Z"
                  fill="#0B434B"
                />
                <path
                  d="M69.0344 5.04711C65.8986 1.79241 61.6178 0 56.9803 0C52.4343 0 48.1603 1.77031 44.9458 4.9848C41.7312 8.19937 39.9609 12.4733 39.9609 17.0193C39.9609 19.3568 40.3485 21.5676 41.1131 23.5904C41.9023 25.6786 43.074 27.5154 44.5957 29.0496C47.8331 32.3136 52.4989 34.0388 58.0886 34.0388C58.1313 34.0388 58.1638 34.0413 58.1873 34.0443C58.3569 34.5054 58.1803 36.4834 56.1345 39.7794C53.9898 43.2348 50.7502 46.5559 47.2464 48.8911C46.6952 49.2586 46.4494 49.9435 46.6414 50.5775C46.8334 51.2116 47.4177 51.6452 48.0801 51.6452C50.9753 51.6452 57.4174 49.6884 63.2989 44.2975C68.1806 39.8231 73.9998 31.6508 73.9998 18.1277C73.9997 13.0158 72.2363 8.37044 69.0344 5.04711Z"
                  fill="#0B434B"
                />
              </svg>
              <img src="\images\svg\stars-review.svg" alt="" />
            </div>
            <p className="">
              The flexibility of the programs, its budget friendly & the staff
              is very supportive they go extra miles to resolve the issues if I
              may have any. The provided information from admission is helpful
              through out the program.I appreciate the team of LUC, They are
              different & better then other colleges. Specially i could
              remembered and Thanks to Anousha was given me lot of ideas about
              my program and she is really very much experienced overall. Thanks
              Anousha and team gain.
            </p>
            <div className="flex justify-between">
              <div className="flex gap-2 items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="48"
                  height="48"
                  viewBox="0 0 48 48"
                  fill="none"
                >
                  <circle cx="24" cy="24" r="24" fill="#DCEEF0" />
                </svg>
                <h5>Chef jayaweera</h5>
              </div>
              <img src="\images\svg\verified-review.svg" alt="" />
            </div>
          </div>
          <div className="user-review-card">
            <div className="flex justify-between mb-6">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="74"
                height="52"
                viewBox="0 0 74 52"
                fill="none"
              >
                <path
                  d="M17.0194 0C12.4734 0 8.19945 1.77031 4.98488 4.9848C1.77031 8.19937 0 12.4733 0 17.0193C0 19.3568 0.387601 21.5676 1.15212 23.5904C1.94137 25.6786 3.11311 27.5154 4.63479 29.0496C7.87213 32.3136 12.538 34.0388 18.1276 34.0388C18.1703 34.0388 18.2028 34.0413 18.2264 34.0443C18.396 34.5054 18.2193 36.4834 16.1736 39.7794C14.0288 43.2347 10.7892 46.5559 7.28551 48.8911C6.73429 49.2586 6.48852 49.9435 6.68048 50.5775C6.87236 51.2116 7.45672 51.6452 8.11918 51.6452C11.0143 51.6452 17.4565 49.6884 23.338 44.2975C28.2197 39.8231 34.0388 31.6508 34.0388 18.1277C34.0388 13.0159 32.2754 8.37051 29.0736 5.04719C25.9377 1.7924 21.6568 0 17.0194 0Z"
                  fill="#0B434B"
                />
                <path
                  d="M69.0344 5.04711C65.8986 1.79241 61.6178 0 56.9803 0C52.4343 0 48.1603 1.77031 44.9458 4.9848C41.7312 8.19937 39.9609 12.4733 39.9609 17.0193C39.9609 19.3568 40.3485 21.5676 41.1131 23.5904C41.9023 25.6786 43.074 27.5154 44.5957 29.0496C47.8331 32.3136 52.4989 34.0388 58.0886 34.0388C58.1313 34.0388 58.1638 34.0413 58.1873 34.0443C58.3569 34.5054 58.1803 36.4834 56.1345 39.7794C53.9898 43.2348 50.7502 46.5559 47.2464 48.8911C46.6952 49.2586 46.4494 49.9435 46.6414 50.5775C46.8334 51.2116 47.4177 51.6452 48.0801 51.6452C50.9753 51.6452 57.4174 49.6884 63.2989 44.2975C68.1806 39.8231 73.9998 31.6508 73.9998 18.1277C73.9997 13.0158 72.2363 8.37044 69.0344 5.04711Z"
                  fill="#0B434B"
                />
              </svg>
              <img src="\images\svg\stars-review.svg" alt="" />
            </div>
            <p className="">
              The flexibility of the programs, its budget friendly & the staff
              is very supportive they go extra miles to resolve the issues if I
              may have any. The provided information from admission is helpful
              through out the program.I appreciate the team of LUC, They are
              different & better then other colleges. Specially i could
              remembered and Thanks to Anousha was given me lot of ideas about
              my program and she is really very much experienced overall. Thanks
              Anousha and team gain.
            </p>
            <div className="flex justify-between">
              <div className="flex gap-2 items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="48"
                  height="48"
                  viewBox="0 0 48 48"
                  fill="none"
                >
                  <circle cx="24" cy="24" r="24" fill="#DCEEF0" />
                </svg>
                <h5>Chef jayaweera</h5>
              </div>
              <img src="\images\svg\verified-review.svg" alt="" />
            </div>
          </div>
          <div className="user-review-card">
            <div className="flex justify-between mb-6">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="74"
                height="52"
                viewBox="0 0 74 52"
                fill="none"
              >
                <path
                  d="M17.0194 0C12.4734 0 8.19945 1.77031 4.98488 4.9848C1.77031 8.19937 0 12.4733 0 17.0193C0 19.3568 0.387601 21.5676 1.15212 23.5904C1.94137 25.6786 3.11311 27.5154 4.63479 29.0496C7.87213 32.3136 12.538 34.0388 18.1276 34.0388C18.1703 34.0388 18.2028 34.0413 18.2264 34.0443C18.396 34.5054 18.2193 36.4834 16.1736 39.7794C14.0288 43.2347 10.7892 46.5559 7.28551 48.8911C6.73429 49.2586 6.48852 49.9435 6.68048 50.5775C6.87236 51.2116 7.45672 51.6452 8.11918 51.6452C11.0143 51.6452 17.4565 49.6884 23.338 44.2975C28.2197 39.8231 34.0388 31.6508 34.0388 18.1277C34.0388 13.0159 32.2754 8.37051 29.0736 5.04719C25.9377 1.7924 21.6568 0 17.0194 0Z"
                  fill="#0B434B"
                />
                <path
                  d="M69.0344 5.04711C65.8986 1.79241 61.6178 0 56.9803 0C52.4343 0 48.1603 1.77031 44.9458 4.9848C41.7312 8.19937 39.9609 12.4733 39.9609 17.0193C39.9609 19.3568 40.3485 21.5676 41.1131 23.5904C41.9023 25.6786 43.074 27.5154 44.5957 29.0496C47.8331 32.3136 52.4989 34.0388 58.0886 34.0388C58.1313 34.0388 58.1638 34.0413 58.1873 34.0443C58.3569 34.5054 58.1803 36.4834 56.1345 39.7794C53.9898 43.2348 50.7502 46.5559 47.2464 48.8911C46.6952 49.2586 46.4494 49.9435 46.6414 50.5775C46.8334 51.2116 47.4177 51.6452 48.0801 51.6452C50.9753 51.6452 57.4174 49.6884 63.2989 44.2975C68.1806 39.8231 73.9998 31.6508 73.9998 18.1277C73.9997 13.0158 72.2363 8.37044 69.0344 5.04711Z"
                  fill="#0B434B"
                />
              </svg>
              <img src="\images\svg\stars-review.svg" alt="" />
            </div>
            <p className="">
              The flexibility of the programs, its budget friendly & the staff
              is very supportive they go extra miles to resolve the issues if I
              may have any. The provided information from admission is helpful
              through out the program.I appreciate the team of LUC, They are
              different & better then other colleges. Specially i could
              remembered and Thanks to Anousha was given me lot of ideas about
              my program and she is really very much experienced overall. Thanks
              Anousha and team gain.
            </p>
            <div className="flex justify-between">
              <div className="flex gap-2 items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="48"
                  height="48"
                  viewBox="0 0 48 48"
                  fill="none"
                >
                  <circle cx="24" cy="24" r="24" fill="#DCEEF0" />
                </svg>
                <h5>Chef jayaweera</h5>
              </div>
              <img src="\images\svg\verified-review.svg" alt="" />
            </div>
          </div>
        </div>
        </Marquee>
      </div>
      <ButtonDark/>
      <Claim_description color='rgba(11, 67, 75, 0.79)'/>
    </div>
  );
}

export default ReviewSection;
