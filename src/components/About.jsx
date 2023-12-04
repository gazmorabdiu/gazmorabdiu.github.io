/* eslint-disable react/prop-types */
import { Element } from "react-scroll";
import { filePath, imagePath } from "../../config";

export default function About({
  fullName,
  description,
  occupation,
  birthday,
  phoneNumber,
  email,
  address,
  language,
  freelance,
}) {
  const handleDownloadClick = () => {
    const downloadLink = document.querySelector("#cv");
    downloadLink.href = filePath + "Gazmor_Abdiu_CV.pdf"; // Set the URL to the PNG file
    downloadLink.download = "Gazi_CV.pdf"; // Set the desired file name
  };
  return (
    <Element name="about">
      <section id="about" className="st-about-wrap">
        <div className="st-height-b100 st-height-lg-b80"></div>
        <div className="container">
          <div className="st-section-heading st-style1">
            <h4 className="st-section-heading-title">ABOUT ME</h4>
            <h2 className="st-section-heading-subtitle">ABOUT ME</h2>
          </div>
          <div className="st-height-b25 st-height-lg-b25"></div>
        </div>
        <div className="container">
          <div className="row">
            <div className="col-lg-6 wow fadeInLeft">
              <div className="st-about-img-wrap">
                <img
                  className="st-about-img st-dynamic-bg st-bg"
                  src={imagePath + "gazi.jpg"}
                />
              </div>
              <div className="st-height-b0 st-height-lg-b30"></div>
            </div>
            <div className="col-lg-6">
              <div className="st-vertical-middle">
                <div className="st-vertical-middle-in">
                  <div className="st-text-block st-style1">
                    <h2 className="st-text-block-title">
                      Hi There! I`m {fullName}
                    </h2>
                    <h4 className="st-text-block-subtitle">{occupation}</h4>
                    <div className="st-text-block-text">
                      <p>{description}</p>
                    </div>
                    <ul className="st-text-block-details st-mp0">
                      <li>
                        <span>Birthday</span> : <span>{birthday}</span>
                      </li>
                      <li>
                        <span>Phone</span> : <span>{phoneNumber}</span>
                      </li>
                      <li>
                        <span>Email</span> : <span>{email}</span>
                      </li>
                      <li>
                        <span>From</span> : <span>{address}</span>
                      </li>
                      <li>
                        <span>Language</span> :{" "}
                        <span>{language.join(", ")}</span>
                      </li>
                      {freelance && (
                        <li>
                          <span>Freelance</span> : <span>Available</span>
                        </li>
                      )}
                    </ul>
                    <div className="st-text-block-btn">
                      <a
                        id="cv"
                        onClick={handleDownloadClick}
                        title="CV"
                        href="#"
                        download={filePath + "Gazmor_Abdiu_CV.pdf"}
                        className="st-btn st-style1 st-color1"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Download CV
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Element>
  );
}
