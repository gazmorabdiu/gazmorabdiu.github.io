import { imagePath } from "../../config";
import { educationsData, experiencesData } from "../data";
import { generateRandomId } from "../utls/functions/generateRandomId";
import Education from "./subComponents/Education";
import Experience from "./subComponents/Experience";

export default function Resume() {
  const educations = educationsData.map(
    ({ text, timelineDuration, title, schoolName }) => (
      <Education
        key={generateRandomId()}
        text={text}
        schoolName={schoolName}
        timelineDuration={timelineDuration}
        title={title}
      />
    )
  );

  const experiences = experiencesData.map(
    ({ text, timelineDuration, title, companyName }) => (
      <Experience
        key={generateRandomId()}
        text={text}
        companyName={companyName}
        timelineDuration={timelineDuration}
        title={title}
      />
    )
  );
  return (
    <section id="resume" className="st-dark-bg">
      <div className="st-height-b100 st-height-lg-b80"></div>
      <div className="container">
        <div className="st-section-heading st-style1">
          <h4 className="st-section-heading-title">RESUME</h4>
          <h2 className="st-section-heading-subtitle">RESUME</h2>
        </div>
        <div className="st-height-b25 st-height-lg-b25"></div>
      </div>
      <div className="container">
        <div className="row">
          <div className="col-lg-6">
            <div className="st-resume-wrap">
              <div className="st-resume-heading">
                <img
                  src={imagePath + "/resume/resume-icon1.png"}
                  alt="resume-icon"
                />
                <h2 className="st-resume-heading-title">Experience</h2>
              </div>

              <div className="st-height-b50 st-height-lg-b30"></div>

              <div className="st-resume-timeline-wrap">{experiences}</div>
            </div>
          </div>

          <div className="col-lg-6">
            <div className="st-height-b0 st-height-lg-b50"></div>
            <div className="st-resume-wrap">
              <div className="st-resume-heading">
                <img
                  src={imagePath + "/resume/resume-icon2.png"}
                  alt="resume-icon"
                />
                <h2 className="st-resume-heading-title">Education</h2>
              </div>
              <div className="st-height-b50 st-height-lg-b30"></div>

              <div className="st-resume-timeline-wrap">{educations}</div>
            </div>
          </div>
        </div>
      </div>
      <div className="st-height-b100 st-height-lg-b80"></div>
    </section>
  );
}
