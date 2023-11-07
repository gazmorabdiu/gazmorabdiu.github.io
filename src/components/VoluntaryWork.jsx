import { voluntaryWorksData } from "../data";
import { generateRandomId } from "../utls/functions";
import Post from "./subComponents/Post";

export default function VoluntaryWork() {
  const voluntaryWorks = voluntaryWorksData.map(
    ({ postImage, createdAt, createdBy, shortDescription }) => (
      <div key={generateRandomId()} className="col-lg-4">
        <Post
          postImage={postImage}
          createdAt={createdAt}
          createdBy={createdBy}
          shortDescription={shortDescription}
        />
      </div>
    )
  );
  return (
    <section id="voluntary-work">
      <div className="st-height-b100 st-height-lg-b80"></div>
      <div className="container">
        <div className="st-section-heading st-style1">
          <h4 className="st-section-heading-title">VOLUNTARY WORK</h4>
          <h2 className="st-section-heading-subtitle">LATEST WORKS</h2>
        </div>
        <div className="st-height-b25 st-height-lg-b25"></div>
      </div>

      <div className="container">
        <div className="st-slider st-style2">
          <div className="slick-wrapper">
            <div className="row">{voluntaryWorks}</div>
          </div>
          <div className="pagination st-style1 st-flex st-hidden"></div>
        </div>
      </div>
      <div className="st-height-b95 st-height-lg-b75"></div>
    </section>
  );
}
