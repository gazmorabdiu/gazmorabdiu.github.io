/* eslint-disable react/prop-types */
export default function Experience({
  title,
  timelineDuration,
  companyName,
  text,
  companyUrl,
}) {
  return (
    <div>
      <div className="st-resume-timeline">
        <h3 className="st-resume-timeline-title">{title}</h3>
        <div className="st-resume-timeline-duration">{timelineDuration}</div>
        <h4 className="st-resume-timeline-subtitle">
          <a href={companyUrl} target="_blank" rel="noopener noreferrer">
            {companyName}
          </a>
        </h4>
        <div className="st-resume-timeline-text">
          <p>{text}</p>
        </div>
      </div>
      <div className="st-height-b50 st-height-lg-b30"></div>
    </div>
  );
}
