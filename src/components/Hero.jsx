import { useState } from "react";
import logo from "../assets/img/section/hero-img.jpg";
import socialMediaData from "../data/socialMedia.json";

// eslint-disable-next-line react/prop-types
export default function Hero({ firstName, lastName, profession }) {
  const [socialMedia /* setSocialMedia */] = useState(socialMediaData);

  const socialMedias = socialMedia.map((item, index) => (
    <a
      key={index}
      href={item.url}
      className={`${item.active ? "st-social-btn active" : "st-social-btn"}`}
    >
      <span className="st-social-icon">
        <i className={`fab ${item.fontawesome}`}></i>
      </span>
      <span className="st-icon-name">{item.name}</span>
    </a>
  ));
  return (
    <section className="st-hero-wrap st-parallax">
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
        <img className="wow fadeInRight" src={logo} alt="Hero" />
        <div className="st-social-group wow fadeInLeft">
          <div className="st-social-link">{socialMedias}</div>
        </div>
      </div>
      <div id="particles-js"></div>
    </section>
  );
}
