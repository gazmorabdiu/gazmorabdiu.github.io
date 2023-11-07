import PortfolioItem from "./subComponents/PortfolioItem";
import { portfolioData } from "../data";
import { generateRandomId } from "../utls/functions/generateRandomId";

export default function Portfolio() {
  const portfolioItems = portfolioData.map((item) => (
    <PortfolioItem
      key={generateRandomId()}
      title={item.title}
      imageUrl={item.imageUrl}
      info={item.info}
    />
  ));
  return (
    <section id="portfolio">
      <div className="st-height-b100 st-height-lg-b80"></div>
      <div className="container">
        <div className="st-section-heading st-style1">
          <h4 className="st-section-heading-title">PORTFOLIOS</h4>
          <h2 className="st-section-heading-subtitle">PORTFOLIOS</h2>
        </div>
        <div className="st-height-b25 st-height-lg-b25"></div>
      </div>
      <div className="container">
        <div className="row">
          {portfolioItems}
          <div className="col-lg-12 text-center">
            <div className="st-portfolio-btn">
              <a href="#" className="st-btn st-style1 st-color1">
                Load More
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="st-height-b100 st-height-lg-b80"></div>
    </section>
  );
}
