import React, { useState } from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import ReactPlayer from "react-player";

function ReviewSection() {
  const [playing, setPlaying] = useState(false);

  const handlePlayPause = () => {
    setPlaying(!playing);
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
        <svg xmlns="http://www.w3.org/2000/svg" width="59" height="59" viewBox="0 0 59 59" fill="none">
  <circle cx="29.5" cy="29.5" r="29.5" fill="#EDE6D8"/>
  <path d="M23.5549 41.1888L35.3294 29.4143L23.5549 17.6397C23.4923 17.5772 23.4376 17.5098 23.3907 17.4388C23.2817 17.2737 23.2149 17.0888 23.1904 16.8995C23.1832 16.8446 23.1797 16.7893 23.1797 16.734C23.1797 16.4454 23.2766 16.1568 23.4704 15.9213C23.4968 15.8893 23.5249 15.8582 23.5549 15.8283C23.5783 15.8048 23.6024 15.7825 23.6272 15.7612C24.1304 15.3292 24.8895 15.3515 25.3663 15.8283L38.0464 28.5085C38.2867 28.7488 38.4217 29.0746 38.4217 29.4143C38.4217 29.754 38.2867 30.0797 38.0464 30.32L25.3663 43.0002C25.3038 43.0627 25.2364 43.1175 25.1654 43.1643C24.6682 43.4925 23.9926 43.4379 23.5549 43.0002C23.4923 42.9377 23.4376 42.8702 23.3907 42.7993C23.0625 42.302 23.1172 41.6264 23.5549 41.1888Z" fill="#0B434B"/>
</svg>
      </button>
    );
  };
  
  const CustomLeftArrow = ({ onClick }) => {
    return (
      <button onClick={onClick} className="custom-left-arrow">
        <svg xmlns="http://www.w3.org/2000/svg" width="59" height="59" viewBox="0 0 59 59" fill="none">
  <circle cx="29.5" cy="29.5" r="29.5" transform="matrix(-1 0 0 1 59 0)" fill="#EDE6D8"/>
  <path d="M36.8085 42.7682L23.4428 29.4025L36.8085 16.0368C36.8795 15.9658 36.9416 15.8893 36.9948 15.8087C37.1186 15.6212 37.1944 15.4114 37.2222 15.1965C37.2303 15.1342 37.2344 15.0714 37.2344 15.0087C37.2344 14.6811 37.1244 14.3535 36.9043 14.0861C36.8744 14.0498 36.8425 14.0145 36.8085 13.9805C36.7819 13.9539 36.7545 13.9286 36.7264 13.9044C36.1552 13.414 35.2935 13.4394 34.7523 13.9805L20.3586 28.3742C20.0858 28.647 19.9327 29.0169 19.9327 29.4025C19.9327 29.7881 20.0858 30.1578 20.3586 30.4306L34.7523 44.8243C34.8232 44.8953 34.8997 44.9575 34.9804 45.0106C35.5447 45.3832 36.3117 45.3212 36.8085 44.8243C36.8795 44.7533 36.9416 44.6768 36.9948 44.5963C37.3675 44.0318 37.3054 43.2648 36.8085 42.7682Z" fill="#0C434B"/>
</svg>
      </button>
    );
  };
  
  return (
    <div className="review-section-main">
      <h1>
        See What Our <span>Graduates Have To Say</span> About Us
      </h1>
      <div className="review-video-main">
        <Carousel responsive={responsive} infinite={true} customRightArrow={<CustomRightArrow />} customLeftArrow={<CustomLeftArrow />} >
          <div>
            <ReactPlayer
              url="https://youtu.be/Xx6SKzOUqhQ?si=gF1bUUbdUfYzEXqy"
              playing={playing}
              width="100%"
              height="620px"
              className="react-player"
            />
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
          <div>
            <ReactPlayer
              url="https://youtu.be/Xx6SKzOUqhQ?si=gF1bUUbdUfYzEXqy"
              playing={playing}
              width="100%"
              height="620px"
              className="react-player"
            />
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
          <div>
            <ReactPlayer
              url="https://youtu.be/Xx6SKzOUqhQ?si=gF1bUUbdUfYzEXqy"
              playing={playing}
              width="100%"
              height="620px"
              className="react-player"
            />
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
          <div>
            <ReactPlayer
              url="https://youtu.be/Xx6SKzOUqhQ?si=gF1bUUbdUfYzEXqy"
              playing={playing}
              width="100%"
              height="620px"
              className="react-player"
            />
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
          {/* Add more <div> elements with Player components as needed */}
        </Carousel>
      </div>
    </div>
  );
}

export default ReviewSection;
