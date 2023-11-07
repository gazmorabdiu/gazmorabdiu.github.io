import { imagePath } from "../../../config";

// eslint-disable-next-line react/prop-types
export default function Card({ title, imageUrl, description }) {
  return (
    <div className="col-lg-4 col-md-6">
      <div className="st-iconbox st-style1">
        <div className="st-iconbox-icon">
          <img src={imagePath + imageUrl} />
        </div>
        <h2 className="st-iconbox-title">{title}</h2>
        <div className="st-iconbox-text">{description}</div>
      </div>
      <div className="st-height-b30 st-height-lg-b30"></div>
    </div>
  );
}
