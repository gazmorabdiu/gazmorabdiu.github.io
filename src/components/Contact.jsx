import { Element } from "react-scroll";
import { socialMedialData } from "../data";
import { generateRandomId } from "../utils/functions";
import Info from "./subComponents/Info";
import SocialIcon from "./subComponents/SocialIcon";

export default function Contact() {
  const socialMedias = socialMedialData.map(
    ({ url, fontawesome, name, active }) => (
      <SocialIcon
        key={generateRandomId()}
        name={name}
        url={url}
        active={active}
        fontawesome={fontawesome}
      />
    )
  );
  return (
    <Element name="contact">
      <section id="contact" className="st-dark-bg">
        <div className="st-height-b100 st-height-lg-b80"></div>
        <div className="container">
          <div className="st-section-heading st-style1">
            <h4 className="st-section-heading-title">CONTACT ME</h4>
            <h2 className="st-section-heading-subtitle">CONTACT ME</h2>
          </div>
          <div className="st-height-b25 st-height-lg-b25"></div>
        </div>

        <div className="container">
          <div className="row">
            <div className="col-lg-5">
              <h3 className="st-contact-title">Just say Hello</h3>
              <div id="st-alert"></div>
              <form
                action="#"
                method="POST"
                className="st-contact-form"
                id="contact-form"
              >
                <div className="st-form-field">
                  <input
                    type="text"
                    id="name"
                    name="name"
                    placeholder="Your Name"
                    required
                  />
                </div>
                <div className="st-form-field">
                  <input
                    type="text"
                    id="email"
                    name="email"
                    placeholder="Your Email"
                    required
                  />
                </div>
                <div className="st-form-field">
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    placeholder="Your Subject"
                    required
                  />
                </div>
                <div className="st-form-field">
                  <textarea
                    cols="30"
                    rows="10"
                    id="msg"
                    name="msg"
                    placeholder="Your Message"
                    required
                  ></textarea>
                </div>
                <button
                  className="st-btn st-style1 st-color1"
                  type="submit"
                  id="submit"
                  name="submit"
                >
                  Send message
                </button>
              </form>
            </div>
            <div className="col-lg-2"></div>

            <div className="col-lg-5">
              <div className="st-height-b0 st-height-lg-b40"></div>
              <h3 className="st-contact-title">Contact Info</h3>
              <div className="st-contact-text">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
                ligula nulla tincidunt id faucibus sed suscipit feugiat.
              </div>
              <div className="st-contact-info-wrap">
                <Info
                  icon="fa-envelope"
                  title={"Email"}
                  text={
                    <div>
                      <a href="#">devis@example.com</a>
                      <a href="#">info@support.com</a>
                    </div>
                  }
                />

                <Info
                  icon="fa-phone-alt"
                  title={"Phone"}
                  text={
                    <div>
                      <span>+1 876-369-9009</span>
                      <span>+1 213-519-1786</span>
                    </div>
                  }
                />

                <Info
                  icon="fa-map-marker-alt"
                  title={"Address"}
                  text={
                    <span>
                      2661 High Meadow Lane Bear Creek, <br />
                      Olancha, KY 93544
                    </span>
                  }
                />

                <div className="st-social-info">
                  <div className="st-social-text">
                    Visite my social profile and get connected
                  </div>
                  <div className="st-social-link">{socialMedias}</div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="st-height-b100 st-height-lg-b80"></div>
      </section>
    </Element>
  );
}
