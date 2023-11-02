import Navbar from "./Navbar";
import logo from "../assets/img/logo.png";

// eslint-disable-next-line react/prop-types
export default function Header({ activeLabel }) {
  return (
    <header className="st-site-header st-style1 st-sticky-header">
      <div className="st-main-header">
        <div className="container">
          <div className="st-main-header-in">
            <div className="st-main-header-left">
              <a className="st-site-branding" href="index.html">
                <img src={logo} alt="Gazi" />
              </a>
            </div>
            <Navbar activeLabel={activeLabel} />
          </div>
        </div>
      </div>
    </header>
  );
}
