import { imagePath } from "../../../config";

/* eslint-disable react/prop-types */
export default function Post({
  postImage,
  createdBy,
  createdAt,
  shortDescription,
}) {
  return (
    <div className="col-lg-4">
      <div className="slick-slide-in">
        <div className="st-post-single st-style1">
          <a href="blog-details.html" className="st-post-thumb st-zoom">
            <img
              src={imagePath + postImage}
              // src="assets/img/blog/blog2.jpg"
              className="st-zoom-in"
              // style={{ borderRadius: "50%" }}
              alt="blog2"
            />
          </a>
          <div className="st-post-info">
            <div className="st-post-date">
              By:
              <a href="#" className="st-post-author">
                {createdBy}
              </a>
              <span className="st-post-date-divider">|</span>
              <span className="st-post-publish-date">{createdAt}</span>
            </div>
            <h4 className="st-post-title">
              <a href="blog-details.html">{shortDescription}</a>
            </h4>
          </div>
        </div>
      </div>
    </div>
  );
}
