import React from 'react'

function buttonDark() {
  const handleClick = () => {
    const section = document.getElementById('contactForm');
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };
  return (
    <div id="NewRootRoot" className="flex  justify-center w-screen">
    <button onClick={handleClick} className="bg-[#EE9B4E] w-[90%] sm:w-[539px] rounded-[56px] sm:rounded-[91px] pt-[25px] pb-[25px] text-[15px] sm:text-[23px] font-bold">
      Claim Your Free Consultation Now
    </button>
  </div>
  
  )
}

export default buttonDark
