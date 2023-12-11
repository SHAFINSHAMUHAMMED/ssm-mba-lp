import React from 'react'
import ButtonDark from '../Buttons/buttonDark'
import { Link, Element } from "react-scroll";
import Claim_description from '../Description/claim_description'

function student_support() {
  return (
    <div className='student-support-main'>
      <div className='student-support-sub'>
        <img className='student-support-img-1' src="images/svg/student-support-img.svg" alt="" />
        <img className='student-support-img-2' src="images/svg/student-support-img-2.svg" alt="" />
        {/* <h1 className='hidden md:block'>100% Student Support Guarantee for a Smooth Learning Experience</h1> */}
        <h1>100% Student Support Guarantee <span className='wavy-underline-green'>for a</span> <span className='wavy-underline-green '> Smooth</span><span className='wavy-underline-green '>Learning</span> <span className='wavy-underline-green'> Experience</span></h1>

        <p>Receive complete support throughout your academic journey, from application to graduation, for a seamless experience.</p>
      </div>
      <div id="NewRootRoot" className="flex justify-center w-full">
    <Link
    to='contactForm'
    // spy={true}
   smooth={true}
     duration={1500}
     delay={200}
    className=" button bg-[#0b434b] w-[95%] sm:w-[539px]  rounded-[56px] sm:rounded-[91px] pt-[25px] pb-[25px] text-[15px] md:text-[15px] xl:text-[23px] font-bold cursor-pointer">
      Connect With Your Advisor
    </Link>
  </div>
        <Claim_description color='rgba(11, 67, 75, 0.79)' />
    </div>
  )
}

export default student_support
