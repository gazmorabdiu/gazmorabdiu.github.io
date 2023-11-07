// eslint-disable-next-line react/prop-types
export default function ProgressBar({ title, progress }) {
  return (
    <div className="st-single-progressbar">
      <div className="st-progressbar-heading">
        <h3 className="st-progressbar-title">{title}</h3>
        <div
          className="st-progressbar-percentage wow fadeInLeft"
          data-wow-duration="1.5s"
          data-wow-delay="0.5s"
        >
          {progress}%
        </div>
      </div>
      <div className="st-progressbar">
        <div
          className="st-progressbar-in wow fadeInLeft"
          style={{ width: `${progress}%` }}
        ></div>
      </div>
    </div>
  );
}
