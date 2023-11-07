import { imagePath } from "../../../config";

/* eslint-disable react/prop-types */
export default function PortfolioItem({ imageUrl, title, info }) {
  return (
    <div className="col-lg-4 col-md-6">
      <div className="st-portfolio-single st-style1 st-lightgallery">
        <div className="st-portfolio-item">
          <a
            href="assets/img/portfolio/portfolio2_lg.jpg"
            className="st-portfolio st-zoom st-lightbox-item"
          >
            <div className="st-portfolio-img st-zoom-in">
              <img src={imagePath + imageUrl} alt="portfolio" />
            </div>
            <div className="st-portfolio-item-hover">
              <i className="fas fa-plus-circle"></i>
              <h5>{title}</h5>
              <p>{info}</p>
            </div>
          </a>
        </div>
      </div>
    </div>
  );
}
