/* eslint-disable react/prop-types */

import skillsData from "../data/skills.json";
import { generateRandomId } from "../utls/functions";
import ProgressBar from "./subComponents/ProgressBar";
export default function Skill({
  skillTitle,
  firstSkillSubtitle,
  secondSkillSubtitle,
}) {
  const skillsBars = skillsData.map((item) => (
    <div key={generateRandomId()}>
      <ProgressBar title={item.title} progress={item.progress} />
      <div className="st-height-b30 st-height-lg-b20"></div>
    </div>
  ));
  return (
    <section id="skills" className="st-dark-bg">
      <div className="st-height-b100 st-height-lg-b80"></div>
      <div className="container">
        <div className="st-section-heading st-style1">
          <h4 className="st-section-heading-title">MY SKILLS</h4>
          <h2 className="st-section-heading-subtitle">MY SKILLS</h2>
        </div>
        <div className="st-height-b25 st-height-lg-b25"></div>
      </div>

      <div className="container">
        <div className="row">
          <div className="col-lg-6">
            <div className="st-skill-wrap">
              <div className="st-skill-heading">
                <h2 className="st-skill-title">{skillTitle}</h2>
                <div className="st-skill-subtitle">
                  {firstSkillSubtitle} <br />
                  <br />
                  {secondSkillSubtitle}
                </div>
              </div>
            </div>
          </div>

          <div className="col-lg-6">
            <div className="st-height-b0 st-height-lg-b30"></div>
            <div className="st-progressbar-wrap">{skillsBars}</div>
          </div>
        </div>
      </div>
    </section>
  );
}
