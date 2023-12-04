import PortfolioItem from "./subComponents/PortfolioItem";
import { portfolioData } from "../data";
import { generateRandomId } from "../utils/functions";
import { useState } from "react";
import { useEffect } from "react";
import { Element } from "react-scroll";

export default function Portfolio() {
  const [page, setPage] = useState(1);
  const [take, setTake] = useState(3);

  useEffect(() => {
    setTake(() => page * 3);
  }, [page]);

  const portfolioDataLength = portfolioData.length;
  const portfolioItems = portfolioData
    .map((item) => (
      <PortfolioItem
        key={generateRandomId()}
        title={item.title}
        imageUrl={item.imageUrl}
        info={item.info}
      />
    ))
    .slice(0, take);

  return (
    <Element name="portfolio">
      <section id="portfolio">
        <div className="st-height-b100 st-height-lg-b80"></div>
        <div className="container">
          <div className="st-section-heading st-style1">
            <h4 className="st-section-heading-title">PORTFOLIOS</h4>
            <h2 className="st-section-heading-subtitle">LATEST WORKS</h2>
          </div>
          <div className="st-height-b25 st-height-lg-b25"></div>
        </div>
        <div className="container">
          <div className="row">
            {portfolioItems}
            {portfolioDataLength > take && (
              <div className="col-lg-12 text-center">
                <div className="st-portfolio-btn">
                  <button
                    // href="#portfolio"
                    className="st-btn st-style1 st-color1"
                    onClick={() => setPage((prevPage) => prevPage + 1)}
                  >
                    Load More
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
        <div className="st-height-b100 st-height-lg-b80"></div>
      </section>
    </Element>
  );
}
