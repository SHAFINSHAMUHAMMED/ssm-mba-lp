import React from "react";
import ButtonDark from "../Buttons/buttonDark";
import Claim_description from "../Description/claim_description";
function uae_professionals() {
  return (
    <div className="uae-professional-main">
      <div className="uae-professional-inner">
        <div className=" flex flex-col justify-center items-center">
          <h1>
            How <span className="highlight-green">UAE</span><span className="highlight-green"> Professionals</span> are{" "}
            <span className="wavy-underline-green">Rising to the Top</span>—And
            the Pathway for You to Join Them!
          </h1>
          <img
          className="uae-professionals-img-1"
          src="\images\professionals-mobile.png"
          alt=""
        />
          <p className="uae-professional-p">
            Heads up! According to the eye-opening HAYS GCC Survey, half of UAE
            employees boosted their paychecks last year. The secret? Stellar
            individual performance, backed by skill sets that turn heads and
            open doors. This is where an MBA comes in.
          </p>
          <p className="uae-professional-p">
            If you don’t have an MBA, it’s time to consider investing in one. An
            MBA doesn't just add letters behind your name; it supercharges you
            with skills like financial mastery, project orchestration, and
            charismatic leadership. Without it, you're not just stalling—you're
            letting lucrative opportunities and desired salaries pass you by.
          </p>
          <p className="uae-professional-p">
            In today’s competitive job market, an MBA isn't a luxury—it's your
            career lifejacket. Take control of your career and invest in your
            future by pursuing an MBA.  Time's ticking—take charge of your
            destiny now.
          </p>
          <ButtonDark containerStyle={{ justifyContent: 'center' }} />
          <Claim_description color="rgba(11, 67, 75, 0.79)" />
        </div>
        <img
          className=" uae-professionals-img-2"
          src="\images\professionals.png"
          alt=""
        />
      </div>
      {/* </div> */}
    </div>
  );
}

export default uae_professionals;
