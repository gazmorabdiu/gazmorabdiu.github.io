import "bootstrap/dist/css/bootstrap.min.css"; // Import Bootstrap CSS
import "./assets/css/fontawesome.css";
import "./assets/css/style.css";
import "./assets/css/slick.css";
import "./assets/css/animate.css";
import "./assets/css/textRotate.css";
import "./assets/css/flaticon.css";
import "./assets/css/select2.min.css";

import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import { useEffect, useState } from "react";
import Service from "./components/Service";
import Skill from "./components/Skill";
import Resume from "./components/Resume";
import Portfolio from "./components/Portfolio";
import Review from "./components/Review";
import Footer from "./components/Footer";
import VoluntaryWork from "./components/VoluntaryWork";
import Contact from "./components/Contact";

function App() {
  const [activeLabel, setActiveLabel] = useState("home");

  useEffect(() => {
    // TODO: get all sections using querySelector and check with id ?
    // or package
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const aboutSection = document.querySelector("#about").offsetTop;
      const resumeSection = document.querySelector("#resume").offsetTop;
      const portfolioSection = document.querySelector("#portfolio").offsetTop;
      const voluntaryWorkSection =
        document.querySelector("#voluntary-work").offsetTop;
      // const contactSection = document.querySelector("#contact").offsetTop;
      if (scrollPosition < 750) {
        setActiveLabel("home");
      } else if (scrollPosition < aboutSection) {
        setActiveLabel("about");
      } else if (scrollPosition < resumeSection) {
        setActiveLabel("resume");
      } else if (scrollPosition < portfolioSection) {
        setActiveLabel("portfolio");
      } else if (scrollPosition < voluntaryWorkSection) {
        setActiveLabel("voluntary-work");
      } else {
        setActiveLabel("contact");
      }
    };

    window.addEventListener("scroll", handleScroll);

    // Clean up the event listener on component unmount
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <>
      <Header activeLabel={activeLabel} />
      <div className="st-height-b80 st-height-lg-b80"></div>
      <Hero
        firstName="Gazmor"
        lastName="Abdiu"
        profession="Software Development"
      />
      <About
        fullName="Gazmor Abdiu"
        description="I am a skilled backend developer, passionate about 
                    crafting efficient server-side solutions. With a strong focus on 
                    optimization and security, I enjoy turning complex problems into 
                    elegant code. Experienced in database management and system 
                    architecture, I thrive in collaborative environments, 
                    aiming to create seamless user experiences. Let's build 
                    innovative applications together!"
        occupation="Software Development"
        birthday="May 16, 1996"
        phoneNumber="+383 49 531 486"
        email="gazmorabdiu@hotmail.com"
        address="Kosovo, Prishtina, Aktash"
        language={["Albanian", "English", "Turkish"]}
        freelance={false}
      />
      <Service />
      <Skill />
      <Resume />
      <Portfolio />
      <Review />
      <VoluntaryWork />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
