import React from "react";
import ButtonDark from "../Buttons/buttonDark";
import Claim_description from "../Description/claim_description";
function power_skills() {
  return (
    <div className="power-skill-main">
      <h1>
        <span className="highlight-green">6 Power Skills</span>
        Your MBA Will Unlock: Be the Manager Fortune 500s Hunt For
      </h1>
      <p className="power-skill-description">
        By earning an MBA, you'll gain these specific skills that Fortune 500
        companies are seeking in their managers.
      </p>
      <div className="power-skill-cards">
        {/* 1 */}
        <div className="power-skill-card">
          <img
            className="power-skill-card-icon"
            src="\images\svg\power-skill-2.svg"
            alt=""
          />
          <img
            className="power-skill-card-img"
            src="\images\project-mgmnt.png"
            alt=""
          />
          <div className="flex">
            <img src="\images\svg\power-skill-fire-icon.svg" alt="" />
            <h3>Financial Expertise</h3>
          </div>
          <p>
            From inception to execution, steer projects with finesse, all while
            juggling risks and leading teams.
          </p>
        </div>
        {/* 2 */}
        <div className="power-skill-card">
          <img
            className="power-skill-card-icon"
            src="\images\svg\power-skill-1.svg"
            alt=""
          />
          <img
            className="power-skill-card-img"
            src="\images\financial-expert.png"
            alt=""
          />
          <div className="flex">
            <img src="\images\svg\power-skill-fire-icon.svg" alt="" />
            <h3>Project Management Excellence</h3>
          </div>
          <p>
            Master the art of dissecting balance sheets, income statements, and
            cash flows like a financial sage.
          </p>
        </div>
        {/* 3 */}
        <div className="power-skill-card">
          <img
            className="power-skill-card-icon"
            src="\images\svg\power-skill-3.svg"
            alt=""
          />
          <img
            className="power-skill-card-img"
            src="\images\marketing.png"
            alt=""
          />
          <div className="flex">
            <img src="\images\svg\power-skill-fire-icon.svg" alt="" />
            <h3>Advanced Marketing Strategies</h3>
          </div>
          <p>
            Dive into market psyches, conjure brands, and craft campaigns that
            leave a mark.
          </p>
        </div>
        {/* 4 */}
        <div className="power-skill-card">
          <img
            className="power-skill-card-icon"
            src="\images\svg\power-skill-4.svg"
            alt=""
          />
          <img
            className="power-skill-card-img"
            src="\images\leadership.png"
            alt=""
          />
          <div className="flex">
            <img src="\images\svg\power-skill-fire-icon.svg" alt="" />
            <h3>Leadership and Conflict Resolution</h3>
          </div>
          <p>
            Lead with charisma, resolve conflicts like a diplomat and spark
            motivation like a coach.
          </p>
        </div>
        {/* 5 */}
        <div className="power-skill-card">
          <img
            className="power-skill-card-icon"
            src="\images\svg\power-skill-5.svg"
            alt=""
          />
          <img
            className="power-skill-card-img"
            src="\images\strategy.png"
            alt=""
          />
          <div className="flex">
            <img src="\images\svg\power-skill-fire-icon.svg" alt="" />
            <h3>Strategic Problem-Solving</h3>
          </div>
          <p>
            Dissect business challenges, spotlight the crux, and architect
            game-changing solutions.
          </p>
        </div>
        {/* 6 */}
        <div className="power-skill-card">
          <img
            className="power-skill-card-icon"
            src="\images\svg\power-skill-6.svg"
            alt=""
          />
          <img
            className="power-skill-card-img"
            src="\images\innovation.png"
            alt=""
          />
          <div className="flex">
            <img src="\images\svg\power-skill-fire-icon.svg" alt="" />
            <h3>Entrepreneurial Innovation</h3>
          </div>
          <p>
            Ignite the entrepreneurial fire within, dreaming up ventures and
            crafting business plans that could disrupt markets.
          </p>
        </div>
        <img className="power-skill-star" src="\images\svg\star-large-icon.svg" alt="" />
      </div>
        <ButtonDark/>
        <Claim_description color='rgba(11, 67, 75, 0.79)'/>
    </div>
  );
}

export default power_skills;
