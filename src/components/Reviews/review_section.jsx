import React, { useState, useRef } from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import ReactPlayer from "react-player";
import Marquee from "react-fast-marquee";
import ButtonDark from "../Buttons/buttonDark";
import Claim_description from "../Description/claim_description";
function ReviewSection() {

  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 4
    },
    tablet: {
      breakpoint: { max: 1024, min: 640 },
      items: 3
    },
    mobile: {
      breakpoint: { max: 640, min: 0 },
      items: 3
    }
  };
  const [playing, setPlaying] = useState(false);

  const handlePlayPause = () => {
    setPlaying(!playing);
  };
  const handleCardClick = (url) => {
    setVideoUrls(url);
    setPlaying(true);
  };

  return (
    <div className="review-section-main">
      <h1>
        See What Our <span className="highlight-green">Graduates Have</span>{" "}
        <span className="highlight-green"> To Say</span> About Us
      </h1>
      <div className="review-video-main">
        {/* Render the video player */}
        <div className="player-container">
          <ReactPlayer
            url={"https://youtu.be/te8keFz5ZdI?si=a3TqyqfJSoo5JUaU"}
            width="100%"
            height="100%"
          />
        </div>
      </div>
      <div className="review-video-sub">
        <div className="review-video-sub-cards">
        <Carousel responsive={responsive} infinite={true} removeArrowOnDeviceType={["tablet", "mobile"]} showDots={true}>
        <div
              className="review-video-sub-card"
              onClick={() => handleCardClick("", 0)}
            >
              <img
                className="w-[135px] sm:w-auto"
                src="\images\video-card.webp"
                alt=""
              />
            </div>
            <div
              className="review-video-sub-card"
              onClick={() => handleCardClick("", 1)}
            >
              <img
                className="w-[135px] sm:w-auto"
                src="\images\video-card.webp"
                alt=""
              />
            </div>
            <div
              className="review-video-sub-card"
              onClick={() => handleCardClick("", 2)}
            >
              <img
                className="w-[135px] sm:w-auto"
                src="\images\video-card.webp"
                alt=""
              />
            </div>
            <div
              className="review-video-sub-card"
              onClick={() => handleCardClick("", 3)}
            >
              <img
                className="w-[135px] sm:w-auto"
                src="\images\video-card.webp"
                alt=""
              />
            </div>
        </Carousel>
        </div>
      </div>

      <div className="user-reviews">
        <Marquee speed={100}>
          <div className="flex gap-10 overflow-hidden">
            <div className="user-review-card ms-10">
              <div className="flex justify-between mb-6">
                <svg
                  className="user-review-svg"
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
                <img
                  className="review-star"
                  src="\images\svg\stars-review.svg"
                  alt=""
                />
              </div>
              <p className="">
                The flexibility of the programs, its budget friendly & the staff
                is very supportive they go extra miles to resolve the issues if
                I may have any. The provided information from admission is
                helpful through out the program.I appreciate the team of LUC,
                They are different & better then other colleges. Specially i
                could remembered and Thanks to Anousha was given me lot of ideas
                about my program and she is really very much experienced
                overall. Thanks Anousha and team gain.
              </p>
              <div className="flex justify-between items-center">
                <div className="flex gap-2 items-center">
                  <svg
                    className="review-user-icon"
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
                <img
                  className="review-verified"
                  src="\images\svg\verified-review.svg"
                  alt=""
                />
              </div>
            </div>
            <div className="user-review-card">
              <div className="flex justify-between mb-6">
                <svg
                  className="user-review-svg"
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
                <img
                  className="review-star"
                  src="\images\svg\stars-review.svg"
                  alt=""
                />
              </div>
              <p className="">
                The flexibility of the programs, its budget friendly & the staff
                is very supportive they go extra miles to resolve the issues if
                I may have any. The provided information from admission is
                helpful through out the program.I appreciate the team of LUC,
                They are different & better then other colleges. Specially i
                could remembered and Thanks to Anousha was given me lot of ideas
                about my program and she is really very much experienced
                overall. Thanks Anousha and team gain.
              </p>
              <div className="flex justify-between items-center">
                <div className="flex gap-2 items-center">
                  <svg
                    className="review-user-icon"
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
                <img
                  className="review-verified"
                  src="\images\svg\verified-review.svg"
                  alt=""
                />
              </div>
            </div>
            <div className="user-review-card">
              <div className="flex justify-between mb-6">
                <svg
                  className="user-review-svg"
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
                <img
                  className="review-star"
                  src="\images\svg\stars-review.svg"
                  alt=""
                />
              </div>
              <p className="">
                The flexibility of the programs, its budget friendly & the staff
                is very supportive they go extra miles to resolve the issues if
                I may have any. The provided information from admission is
                helpful through out the program.I appreciate the team of LUC,
                They are different & better then other colleges. Specially i
                could remembered and Thanks to Anousha was given me lot of ideas
                about my program and she is really very much experienced
                overall. Thanks Anousha and team gain.
              </p>
              <div className="flex justify-between items-center">
                <div className="flex gap-2 items-center">
                  <svg
                    className="review-user-icon"
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
                <img
                  className="review-verified"
                  src="\images\svg\verified-review.svg"
                  alt=""
                />
              </div>
            </div>
            <div className="user-review-card">
              <div className="flex justify-between mb-6">
                <svg
                  className="user-review-svg"
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
                <img
                  className="review-star"
                  src="\images\svg\stars-review.svg"
                  alt=""
                />
              </div>
              <p className="">
                The flexibility of the programs, its budget friendly & the staff
                is very supportive they go extra miles to resolve the issues if
                I may have any. The provided information from admission is
                helpful through out the program.I appreciate the team of LUC,
                They are different & better then other colleges. Specially i
                could remembered and Thanks to Anousha was given me lot of ideas
                about my program and she is really very much experienced
                overall. Thanks Anousha and team gain.
              </p>
              <div className="flex justify-between items-center">
                <div className="flex gap-2 items-center">
                  <svg
                    className="review-user-icon"
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
                <img
                  className="review-verified"
                  src="\images\svg\verified-review.svg"
                  alt=""
                />
              </div>
            </div>
          </div>
        </Marquee>
        <Marquee speed={100} direction="right">
          <div className="flex gap-10 overflow-hidden">
            <div className="user-review-card ms-10">
              <div className="flex justify-between mb-6">
                <svg
                  className="user-review-svg"
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
                <img
                  className="review-star"
                  src="\images\svg\stars-review.svg"
                  alt=""
                />
              </div>
              <p className="">
                The flexibility of the programs, its budget friendly & the staff
                is very supportive they go extra miles to resolve the issues if
                I may have any. The provided information from admission is
                helpful through out the program.I appreciate the team of LUC,
                They are different & better then other colleges. Specially i
                could remembered and Thanks to Anousha was given me lot of ideas
                about my program and she is really very much experienced
                overall. Thanks Anousha and team gain.
              </p>
              <div className="flex justify-between items-center">
                <div className="flex gap-2 items-center">
                  <svg
                    className="review-user-icon"
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
                <img
                  className="review-verified"
                  src="\images\svg\verified-review.svg"
                  alt=""
                />
              </div>
            </div>
            <div className="user-review-card">
              <div className="flex justify-between mb-6">
                <svg
                  className="user-review-svg"
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
                <img
                  className="review-star"
                  src="\images\svg\stars-review.svg"
                  alt=""
                />
              </div>
              <p className="">
                The flexibility of the programs, its budget friendly & the staff
                is very supportive they go extra miles to resolve the issues if
                I may have any. The provided information from admission is
                helpful through out the program.I appreciate the team of LUC,
                They are different & better then other colleges. Specially i
                could remembered and Thanks to Anousha was given me lot of ideas
                about my program and she is really very much experienced
                overall. Thanks Anousha and team gain.
              </p>
              <div className="flex justify-between items-center">
                <div className="flex gap-2 items-center">
                  <svg
                    className="review-user-icon"
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
                <img
                  className="review-verified"
                  src="\images\svg\verified-review.svg"
                  alt=""
                />
              </div>
            </div>
            <div className="user-review-card">
              <div className="flex justify-between mb-6">
                <svg
                  className="user-review-svg"
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
                <img
                  className="review-star"
                  src="\images\svg\stars-review.svg"
                  alt=""
                />
              </div>
              <p className="">
                The flexibility of the programs, its budget friendly & the staff
                is very supportive they go extra miles to resolve the issues if
                I may have any. The provided information from admission is
                helpful through out the program.I appreciate the team of LUC,
                They are different & better then other colleges. Specially i
                could remembered and Thanks to Anousha was given me lot of ideas
                about my program and she is really very much experienced
                overall. Thanks Anousha and team gain.
              </p>
              <div className="flex justify-between items-center">
                <div className="flex gap-2 items-center">
                  <svg
                    className="review-user-icon"
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
                <img
                  className="review-verified"
                  src="\images\svg\verified-review.svg"
                  alt=""
                />
              </div>
            </div>
            <div className="user-review-card">
              <div className="flex justify-between mb-6">
                <svg
                  className="user-review-svg"
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
                <img
                  className="review-star"
                  src="\images\svg\stars-review.svg"
                  alt=""
                />
              </div>
              <p className="">
                The flexibility of the programs, its budget friendly & the staff
                is very supportive they go extra miles to resolve the issues if
                I may have any. The provided information from admission is
                helpful through out the program.I appreciate the team of LUC,
                They are different & better then other colleges. Specially i
                could remembered and Thanks to Anousha was given me lot of ideas
                about my program and she is really very much experienced
                overall. Thanks Anousha and team gain.
              </p>
              <div className="flex justify-between items-center">
                <div className="flex gap-2 items-center">
                  <svg
                    className="review-user-icon"
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
                <img
                  className="review-verified"
                  src="\images\svg\verified-review.svg"
                  alt=""
                />
              </div>
            </div>
          </div>
        </Marquee>
      </div>
      <ButtonDark containerStyle={{ justifyContent: 'center' }}/>
      <Claim_description color="rgba(11, 67, 75, 0.79)" />
    </div>
  );
}

export default ReviewSection;
