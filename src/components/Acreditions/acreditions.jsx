import React from 'react'
import ButtonDark from '../Buttons/buttonDark';
import Marquee from 'react-fast-marquee';
import Claim_description from '../Description/claim_description';
function acreditions() {
  return (
    <div class="accredit-main">
    <div className="accredit-overlay"></div>
  {/* <img src="\images\earth.png" alt="Globe Background" class="glob-background"/> */}
  {/* <div className='gradient-div h-full'> */}
  <div class="accredit-content w-screen z-10">
    <h1 class="accredit-h1 text-center">Globally <span className='wavy-underline-green'>Recognised</span> & <span className='wavy-underline-green'>Accredited</span> By</h1>
    <Marquee speed={200}>
    <div class="accredit-cards">
      {/* <!-- Repeat this structure for each card --> */}
      <div class="accredit-card">
        <img src="/images/svg/Accredit-iao-1-icon.svg" alt="" />
      </div>
      <div class="accredit-card">
        <img src="/images/svg/Accredit-iao-icon.svg" alt="" />
      </div>
      <div class="accredit-card">
        <img src="\images\svg\Accredit-eduqua-icon.svg" alt="" />
      </div>
      <div class="accredit-card">
        <img src="\images\svg\Accredit-usr-lazio-icon.svg" alt="" />
      </div>
      <div class="accredit-card">
        <img src="\images\svg\Accredit-businet-icon.svg" alt="" />
      </div>
      <div class="accredit-card">
        <img src="\images\svg\Accredit-chea-icon.svg" alt="" />
      </div>
      <div class="accredit-card">
        <img src="\images\svg\Accredit-xila-icon.svg" alt="" />
      </div>
      <div class="accredit-card">
        <img src="\images\svg\Accredit-indian-icon.svg" alt="" />
      </div>
    </div>
    </Marquee>
    <ButtonDark/>
    <Claim_description color='rgba(11, 67, 75, 0.79)'/>
  </div>
  {/* </div> */}
</div>
  )
}

export default acreditions
