import { useEffect, useState } from "react";
import About from "./About";
import Contact from "./Contact";
import Hero from "./Hero";
import Portfolio from "./Portfolio";
import Resume from "./Resume";
import Review from "./Review";
import Service from "./Service";
import Skill from "./Skill";
import VoluntaryWork from "./VoluntaryWork";
import Layout from "./Layout";

export default function Main() {
  const [activeLabel, setActiveLabel] = useState("home");

  useEffect(() => {
    // TODO: get all sections using querySelector and check with id ?
    // or package
    const handleScroll = () => {
      const scrollPosition = window.scrollY;

      const sections = document.querySelectorAll("section");

      sections.forEach((section) => {
        const sectionTop = section.offsetTop - 50;
        if (scrollPosition >= sectionTop) {
          const id = section.getAttribute("id");
          console.log("sections", id);
          if (
            [
              "home",
              "about",
              "resume",
              "portfolio",
              "voluntary-work",
              "contact",
            ].includes(id)
          ) {
            setActiveLabel(id);
          }
        }
      });
    };

    window.addEventListener("scroll", handleScroll);

    // Clean up the event listener on component unmount
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const content = (
    <>
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
        address="Kosovo, Prishtina"
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
    </>
  );

  return <Layout activeLabel={activeLabel} content={content} />;
}
