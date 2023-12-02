import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { usePopup } from "../Hoocks/PopupContext";

function ResponsiveCarousel() {
  const { isPopupOpen } = usePopup();
      const responsive = {
        superLargeDesktop: {
          // the naming can be any, depends on you.
          breakpoint: { max: 4000, min: 3000 },
          items: 5
        },
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 3
        },
        tablet: {
          breakpoint: { max: 1024, min: 640 },
          items: 3
        },
        mobile: {
          breakpoint: { max: 640, min: 0 },
          items: 2,
        }
      };

  const Divider = () => (
    <div className="divider mx- h-[200px] bg-gray-300" style={{ width: '1px' }}></div>
  );
  return (
    <div className={`carousel ${isPopupOpen ? 'blur-effect' : ''}`}>
      <div className="hidden lg:flex justify-center items-center w-full   ">
        <div className="carousel-card ">
          <img
            src="images/svg/balanced-icon.svg"
            alt="Work-Life"
            className="mb-2 carousel-svg"
          />
          <h4 className="text-sm sm:text-base">Balanced Work-Life Structure</h4>
        </div>
        <Divider/>
        <div className="carousel-card ">
          <img
            src="images/svg/timer-icon.svg"
            alt="12 Months"
            className="mb-2 carousel-svg"
          />
          <h4 className="text-sm sm:text-base">Complete in 12 Months</h4>
        </div>
        <Divider/>
        <div className="carousel-card">
          <img
            src="images/svg/faculty-icon.svg"
            alt="Industry-Leading"
            className="mb-2 carousel-svg"
          />
          <h4 className="text-sm sm:text-base">Industry-Leading Faculties</h4>
        </div>
        <Divider/>
        <div className="carousel-card">
          <img
            src="images/svg/money-icon.svg"
            alt="Scholarships"
            className="mb-2 carousel-svg"
          />
          <h4 className="text-sm sm:text-base">
            Scholarships Available: Save Up to 30%
          </h4>
        </div>
      </div>
      
      <div className=" carousel-main lg:hidden overflow-visible h-auto" >
  <Carousel responsive={responsive} infinite={true} removeArrowOnDeviceType={["tablet", "mobile"]} showDots={true} autoPlay={true} autoPlaySpeed={2000} >
    <div className=" carousel-card  ">
      <img src="images/svg/balanced-icon.svg" alt="Work-Life" className=" carousel-svg mb-2" />
      <h4 className="text-sm sm:text-base">Balanced Work-Life Structure</h4>
    </div>
    {/* Slide 2 */}
    <div className="carousel-card ">
      <img src="images/svg/timer-icon.svg" alt="12 Months" className=" carousel-svg mb-2" />
      <h4 className="text-sm sm:text-base">Complete in 12 Months</h4>
    </div>
    {/* Slide 3 */}
    <div className="carousel-card ">
      <img src="images/svg/cap-icon.svg" alt="12 Months" className=" carousel-svg mb-2" />
      <h4 className="text-sm sm:text-base">Industry-Leading Faculties</h4>
    </div>
    {/* Slide 4 */}
    <div className="carousel-card ">
      <img src="images/svg/money-icon-2.svg" alt="12 Months" className=" carousel-svg mb-2" />
      <h4 className="text-sm sm:text-base">Scholarships Available: Save Up to 30%</h4>
    </div>
</Carousel>

</div>
    </div>
  );
}

export default ResponsiveCarousel;