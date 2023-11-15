import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function ResponsiveCarousel() {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 4, // Default number of slides to show for larger screens
        slidesToScroll: 1,
        adaptiveHeight: true,
        responsive: [
          {
            breakpoint: 768, // Width up to which the setting applies
            settings: {
              slidesToShow: 2, // Show 2 slides per page on mobile
              slidesToScroll: 2, // Scroll 2 slides at a time
              infinite: true,
              dots: true,
            },
          },
        ],
      };
  const Divider = () => (
    <div className="divider mx- h-[200px] bg-gray-300" style={{ width: '1px' }}></div>
  );
  return (
    <div className="carousel">
      <div className="hidden sm:flex justify-between items-center w-full  ps-[89px] pe-[89px] pb-[32px]">
        <div className="flex flex-col items-center text-center px-4 mt-10 w-[165px]">
          <img
            src="images/svg/balanced-icon.svg"
            alt="Work-Life"
            className="mb-2 carousel-svg"
          />
          <h4 className="text-sm sm:text-base">Balanced Work-Life Structure</h4>
        </div>
        <Divider/>
        <div className="flex flex-col items-center text-center px-4 mt-10 w-[140px]">
          <img
            src="\images\svg\timer-icon.svg"
            alt="12 Months"
            className="mb-2 carousel-svg"
          />
          <h4 className="text-sm sm:text-base">Complete in 12 Months</h4>
        </div>
        <Divider/>
        <div className="flex flex-col items-center text-center px-4 mt-10 w-[179px]">
          <img
            src="images/svg/faculty-icon.svg"
            alt="Industry-Leading"
            className="mb-2 carousel-svg"
          />
          <h4 className="text-sm sm:text-base">Industry-Leading Faculties</h4>
        </div>
        <Divider/>
        <div className="flex flex-col items-center text-center px-4 mt-10 w-[160px]">
          <img
            src="images\svg\money-icon.svg"
            alt="Scholarships"
            className="mb-2 carousel-svg"
          />
          <h4 className="text-sm sm:text-base">
            Scholarships Available: Save Up to 30%
          </h4>
        </div>
      </div>
      <div className=" sm:hidden">
  <Slider {...settings}>
    {/* Slide 1 */}
    <div className="flex flex-col justify-center items-center w-24 text-center px-4 ">
      <img src="images/svg/balanced-icon.svg" alt="Work-Life" className="mb-2" />
      <h4 className="text-sm sm:text-base">Balanced Work-Life Structure</h4>
    </div>
    {/* Slide 2 */}
    <div className="flex flex-col items-center text-center px-4 ">
      <img src="images/svg/timer-icon.svg" alt="12 Months" className="mb-2" />
      <h4 className="text-sm sm:text-base">Complete in 12 Months</h4>
    </div>
    {/* Slide 3 */}
    <div className="flex flex-col items-center text-center px-4 ">
      <img src="images/svg/timer-icon.svg" alt="12 Months" className="mb-2" />
      <h4 className="text-sm sm:text-base">Complete in 12 Months</h4>
    </div>
    {/* Slide 4 */}
    <div className="flex flex-col items-center text-center px-4 ">
      <img src="images/svg/timer-icon.svg" alt="12 Months" className="mb-2" />
      <h4 className="text-sm sm:text-base">Complete in 12 Months</h4>
    </div>
  </Slider>
</div>
    </div>
  );
}

export default ResponsiveCarousel;

