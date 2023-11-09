/* eslint-disable react/prop-types */
import { imagePath } from "../../../config";

export default function Comment({ comment, occupation, fullName, imageUrl }) {
  return (
    <div className="col-lg-4">
      <div className="slick-slide-in">
        <div
          className="st-testimonial st-style1 wow fadeInLeft"
          data-wow-duration="0.8s"
          data-wow-delay="0.2s"
        >
          <div className="st-testimonial-text">
            <p>{comment}</p>
            <div className="st-quote">
              <img src={imagePath + "review/quote.png"} alt="quote" />
            </div>
          </div>
          <div className="st-testimonial-info">
            <div className="st-testimonial-img">
              <img src={imagePath + imageUrl} alt="client1" />
            </div>
            <div className="st-testimonial-meta">
              <h4 className="st-testimonial-name">{fullName}</h4>
              <div className="st-testimonial-designation">{occupation}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
