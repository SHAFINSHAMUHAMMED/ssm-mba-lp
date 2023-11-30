import React from 'react'
import ButtonDark from '../Buttons/buttonDark'
import Claim_description from '../Description/claim_description'

function student_support() {
  return (
    <div className='student-support-main'>
      <div className='student-support-sub'>
        <img className='student-support-img-1' src="images/svg/student-support-img.svg" alt="" />
        <img className='student-support-img-2' src="images/svg/100%guarentee-icon.svg" alt="" />
        {/* <h1 className='hidden md:block'>100% Student Support Guarantee for a Smooth Learning Experience</h1> */}
        <h1>100% Student Support Guarantee <span className='wavy-underline-green'>for a</span> <span className='wavy-underline-green '> Smooth Learning</span> <span className='wavy-underline-green'> Experience</span></h1>

        <p>Receive complete support throughout your academic journey, from application to graduation, for a seamless experience.</p>
      </div>
      <ButtonDark containerStyle={{ justifyContent: 'center' }}/>
        <Claim_description color='rgba(11, 67, 75, 0.79)' />
    </div>
  )
}

export default student_support
