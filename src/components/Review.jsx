import Comment from "./subComponents/Comment";
import { reviewsData } from "../data";
import { generateRandomId } from "../utils/functions";

export default function Review() {
  const comments = reviewsData.map(
    ({ comment, imageUrl, fullName, occupation }) => (
      <Comment
        key={generateRandomId()}
        comment={comment}
        imageUrl={imageUrl}
        fullName={fullName}
        occupation={occupation}
      />
    )
  );
  return (
    <section className="st-dark-bg">
      <div className="st-height-b100 st-height-lg-b80"></div>
      <div className="container">
        <div className="st-section-heading st-style1">
          <h4 className="st-section-heading-title">REVIEWS</h4>
          <h2 className="st-section-heading-subtitle">REVIEWS</h2>
        </div>
        <div className="st-height-b25 st-height-lg-b25"></div>
      </div>

      <div className="container">
        <div className="st-slider st-style1 st-reviews-wrap">
          <div className="slick-wrapper">
            <div className="row">{comments}</div>
            <div className="pagination st-style1 st-flex st-hidden"></div>
            <div className="swipe-arrow st-style1 st-hidden">
              <div className="slick-arrow-left">
                <i className="fa fa-chevron-left"></i>
              </div>
              <div className="slick-arrow-right">
                <i className="fa fa-chevron-right"></i>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="st-height-b100 st-height-lg-b80"></div>
    </section>
  );
}
