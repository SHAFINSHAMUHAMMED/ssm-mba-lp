import React, { useState } from "react";
import ReactPlayer from "react-player";

function Player() {
  const [playing, setPlaying] = useState(false);

  const handlePlayPause = () => {
    setPlaying(!playing);
  };

  return (
    <div className="player-wrapper">
      <ReactPlayer
        url="https://youtu.be/Xx6SKzOUqhQ?si=gF1bUUbdUfYzEXqy"
        width="100%"
        height="620px"
        playing={playing}
        className="react-player"
      />
      <div className="custom-play-button" onClick={handlePlayPause}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="play-icon"
          width="216"
          height="217"
          viewBox="0 0 216 217"
          fill="none"
        >
          <g filter="url(#filter0_b_571_299)">
            <ellipse
              cx="107.747"
              cy="108.389"
              rx="107.747"
              ry="108.389"
              fill="#EDE6D8"
              fill-opacity="0.72"
            />
            <path
              d="M214.13 108.389C214.13 167.504 166.493 215.413 107.747 215.413C49.0013 215.413 1.36465 167.504 1.36465 108.389C1.36465 49.2733 49.0013 1.36465 107.747 1.36465C166.493 1.36465 214.13 49.2733 214.13 108.389Z"
              stroke="url(#paint0_linear_571_299)"
              stroke-width="2.72929"
            />
          </g>
          <path
            d="M147.923 99.3405C154.867 103.373 154.867 113.402 147.923 117.435L95.5877 147.831C88.6129 151.881 79.871 146.849 79.871 138.783L79.871 77.9917C79.871 69.9259 88.6129 64.8938 95.5877 68.9447L147.923 99.3405Z"
            fill="#0B434B"
            stroke="white"
            stroke-width="0.909763"
          />
          <defs>
            <filter
              id="filter0_b_571_299"
              x="-10.0074"
              y="-10.0074"
              width="235.509"
              height="236.792"
              filterUnits="userSpaceOnUse"
              color-interpolation-filters="sRGB"
            >
              <feFlood flood-opacity="0" result="BackgroundImageFix" />
              <feGaussianBlur in="BackgroundImageFix" stdDeviation="5.0037" />
              <feComposite
                in2="SourceAlpha"
                operator="in"
                result="effect1_backgroundBlur_571_299"
              />
              <feBlend
                mode="normal"
                in="SourceGraphic"
                in2="effect1_backgroundBlur_571_299"
                result="shape"
              />
            </filter>
            <linearGradient
              id="paint0_linear_571_299"
              x1="-1.30833e-06"
              y1="57.4647"
              x2="108.624"
              y2="216.177"
              gradientUnits="userSpaceOnUse"
            >
              <stop stop-color="white" />
              <stop offset="1" stop-color="white" stop-opacity="0" />
            </linearGradient>
          </defs>
        </svg>
      </div>
    </div>
  );
}

export default Player;
