import React from 'react'

function buttonDark({containerStyle }) {
  const handleClick = () => {
    const section = document.getElementById('contactForm');
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };
  return (
    <div id="NewRootRoot" className="flex flex-row w-full" style={containerStyle}>
    <button onClick={handleClick} className="light-effect-button bg-[#0b434b] w-[90%] sm:w-[539px]  rounded-[56px] sm:rounded-[91px] pt-[25px] pb-[25px] text-[15px] md:text-[16px] xl:text-[23px] font-bold">
      Claim Your Free Consultation Now
    </button>
  </div>
  
  )
}

export default buttonDark
