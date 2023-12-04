import { Link } from "react-scroll";

// eslint-disable-next-line react/prop-types
export default function Navbar({ activeLabel }) {
  const getClassForNavItem = (item) => {
    return item === activeLabel
      ? "navbar-item st-smooth-move active"
      : "navbar-item st-smooth-move";
  };

  return (
    <div className="st-main-header-right">
      <div className="st-nav">
        <ul className="st-nav-list st-onepage-nav">
          <li>
            <Link
              to="home"
              className={getClassForNavItem("home")}
              smooth={true}
              duration={300}
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              to="about"
              className={getClassForNavItem("about")}
              smooth={true}
              duration={300}
            >
              About
            </Link>
          </li>
          <li>
            <Link
              to="resume"
              className={getClassForNavItem("resume")}
              smooth={true}
              duration={300}
            >
              Resume
            </Link>
          </li>
          <li>
            <Link
              to="portfolio"
              className={getClassForNavItem("portfolio")}
              smooth={true}
              duration={300}
            >
              Portfolio
            </Link>
          </li>
          <li>
            <Link
              to="voluntary-work"
              className={getClassForNavItem("voluntary-work")}
              smooth={true}
              duration={300}
            >
              Voluntary Work
            </Link>
          </li>
          <li>
            <Link
              to="contact"
              className={getClassForNavItem("contact")}
              smooth={true}
              duration={300}
            >
              Contact
            </Link>
          </li>
        </ul>
        <div className="sp-phone">
          <svg viewBox="0 0 513.64 513.64">
            <g>
              <g>
                <path d="M499.66,376.96l-71.68-71.68c-25.6-25.6-69.12-15.359-79.36,17.92c-7.68,23.041-33.28,35.841-56.32,30.72c-51.2-12.8-120.32-79.36-133.12-133.12c-7.68-23.041,7.68-48.641,30.72-56.32c33.28-10.24,43.52-53.76,17.92-79.36l-71.68-71.68c-20.48-17.92-51.2-17.92-69.12,0l-48.64,48.64c-48.64,51.2,5.12,186.88,125.44,307.2c120.32,120.32,256,176.641,307.2,125.44l48.64-48.64C517.581,425.6,517.581,394.88,499.66,376.96z" />
              </g>
            </g>
          </svg>
          <div className="sp-phone-no">+383 49 531 486</div>
        </div>
      </div>
    </div>
  );
}
