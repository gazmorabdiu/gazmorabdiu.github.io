import { useParams } from "react-router-dom";
import Layout from "./Layout";
import { portfolioData } from "../data";
import { imagePath } from "../../config";

export default function PostDetails() {
  const { slug } = useParams();
  const data = portfolioData.find((item) => {
    return item.info.split(" ").join("_").toLowerCase() === slug;
  });
  const content = (
    <div className="st-content">
      <div
        className="st-page-heading st-dynamic-bg"
        data-src={imagePath + data.imageUrl}
        style={{
          backgroundImage: `url("${imagePath}${data.imageUrl}")`,
        }}
      >
        <div className="container">
          <div className="st-page-heading-in text-center">
            <h1 className="st-page-heading-title">
              {data.title} <br />
              {data.info}
            </h1>
            <div className="st-post-label">
              <span>
                By <a href="#">{data.createdBy}</a>
              </span>
              <span>{data.date}</span>
            </div>
          </div>
        </div>
      </div>
      <div className="st-height-b100 st-height-lg-b80"></div>
      <div className="container">
        <div className="row">
          <div className="col-lg-10 offset-md-1">
            <div className="st-post-details st-style1">
              <p>
                Bring to the table win-win survival strategies to ensure
                proactive domination. At the end of the day, going forward, a
                new normal that has evolved from generation X is on the runway
                heading towards a streamlined cloud solution. User generated
                content in real-time will have multiple touchpoints for
                offshoring.
              </p>
              <p>
                Capitalize on low hanging fruit to identify a ballpark value
                added activity to beta test. Override the digital divide with
                additional clickthroughs from DevOps.
              </p>
              <img
                className="st-zoom-in"
                src={imagePath + data.firstDetailsImage}
                alt="blog1"
              />
              <h2>Description</h2>
              <div className="st-post-info">
                <div className="st-post-text">
                  <p>{data.longDescription}</p>

                  {/* <blockquote>
                Integer accumsan arcu ligula, eget dictum augue egestas
                sed. Curabitur bibendum, lorem ac dapibus pellentesque,
                justo lectus bibendum enim.
                <small>
                  by: <span>Mark Parker</span>
                </small>
              </blockquote> */}

                  {/* <div className="st-height-b20 st-height-lg-b20"></div> */}
                  {/* <p>{data.usedTechnologies}</p> */}
                </div>
                <div className="st-height-b35 st-height-lg-b35"></div>
                <div className="st-post-meta">
                  <div className="st-post-tages">
                    <h4 className="st-post-tage-title">Tags:</h4>
                    <ul className="st-post-tage-list st-mp0">
                      <li>{data.tags}</li>
                    </ul>
                  </div>
                  <div className="st-post-share">
                    <h4 className="st-post-share-title">Source:</h4>
                    <div className="st-post-share-btn-list">
                      <a href="#">
                        <i className="fab fa-github"></i>
                      </a>
                    </div>
                  </div>
                </div>
                <div className="st-height-b60 st-height-lg-b60"></div>
              </div>
              <div className="st-post-btn-gropu">
                <a
                  href="#"
                  className="st-btn st-style2 st-color1 st-size-medium"
                >
                  Previous Post
                </a>
                <a
                  href="#"
                  className="st-btn st-style2 st-color1 st-size-medium"
                >
                  Next Post
                </a>
              </div>
            </div>
            <div className="st-height-b60 st-height-lg-b60"></div>
            <div className="comments-area">
              <div className="comment-list-outer">
                <h2 className="comments-title">
                  Comments({data.comments.length})
                </h2>
                <ol className="comment-list">
                  <li className="comment">
                    <div className="comment-body">
                      <div className="comment-meta">
                        <div className="comment-author">
                          <img
                            src="assets/img/comment1.jpg"
                            alt="comment1"
                            className="avatar"
                          />
                          <a href="#" className="nm">
                            Smith Jhon
                          </a>
                        </div>
                        <div className="comment-metadata">
                          <a href="#">
                            <span>15 Jan, 2020</span>
                          </a>
                        </div>
                      </div>
                      <div className="comment-content">
                        <p>
                          Lorem ipsum dolor sit amet, consectetuer adipiscing
                          elit.
                        </p>
                      </div>
                      <div className="reply">
                        <a href="#" className="comment-reply-link">
                          Reply
                        </a>
                      </div>
                    </div>
                  </li>
                </ol>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="st-height-b100 st-height-lg-b80"></div>
    </div>
  );
  // eslint-disable-next-line no-undef
  return <Layout postDetails={true} content={content} />;
}
