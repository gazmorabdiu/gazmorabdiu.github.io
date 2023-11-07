/* eslint-disable react/prop-types */
export default function Education({
  title,
  timelineDuration,
  schoolName,
  text,
}) {
  return (
    <div>
      <div className="st-resume-timeline">
        <h3 className="st-resume-timeline-title">{title}</h3>
        <div className="st-resume-timeline-duration">{timelineDuration}</div>
        <h4 className="st-resume-timeline-subtitle">{schoolName}</h4>
        <div className="st-resume-timeline-text">
          <p>{text}</p>
        </div>
      </div>
      <div className="st-height-b50 st-height-lg-b30"></div>
    </div>
  );
}
