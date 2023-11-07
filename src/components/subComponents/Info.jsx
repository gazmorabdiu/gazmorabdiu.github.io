/* eslint-disable react/prop-types */
export default function Info({ icon, title, text }) {
  return (
    <div className="st-single-contact-info">
      <i className={`fas ${icon}`}></i>
      <div className="st-single-info-details">
        <h4>{title}</h4>
        <span>{text}</span>
      </div>
    </div>
  );
}
