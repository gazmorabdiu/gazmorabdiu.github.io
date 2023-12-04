// import { imagePath } from "../../config";

import socialMediaData from "../data/socialMedia.json";
import { generateRandomId } from "../utils/functions";
import SocialIcon from "./subComponents/SocialIcon";
import { imagePath } from "../../config";
import { Element } from "react-scroll";

// eslint-disable-next-line react/prop-types
export default function Hero({ firstName, lastName, profession }) {
  const socialMedias = socialMediaData.map(
    ({ url, active, fontawesome, name }) => (
      <SocialIcon
        key={generateRandomId()}
        url={url}
        active={active}
        fontawesome={fontawesome}
        name={name}
      />
    )
  );
  return (
    <Element name="home">
      <div className="st-height-b80 st-height-lg-b80"></div>
      <section className="st-hero-wrap st-parallax" id="home">
        <div className="st-hero st-style1 st-ripple-version">
          <div className="container">
            <div className="st-hero-text">
              <h3>Hello, I`m</h3>
              <h1>
                {firstName} <br />
                {lastName}
              </h1>
              <h2>{profession}</h2>
              <div className="st-hero-btn">
                <a
                  href="#contact"
                  className="st-btn st-style1 st-color1 st-smooth-move"
                >
                  Hire me
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="st-hero-img st-to-right">
          <img
            className="wow fadeInRight"
            src={imagePath + "gazi.jpg"}
            alt="Hero"
          />
          <div className="st-social-group wow fadeInLeft">
            <div className="st-social-link">{socialMedias}</div>
          </div>
        </div>
        <div id="particles-js"></div>
      </section>
    </Element>
  );
}
