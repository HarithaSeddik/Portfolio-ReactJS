import "./App.css";

import { useEffect, useState } from "react";

import Media from "react-media";

import ExperiencesSection from "./component/page_sections/experiences_section/ExperiencesSection";
import DisabledSection from "./component/page_sections/disabled_section/DisabledSection";
import Contact from "./component/page_sections/contact_section/Contact";
import Cursor from "./component/cursor_component/Cursor";
import Navbar from "./component/navbar/Navbar";
import BackToTop from "./component/back_to_top_button/BackToTop";
import HomeSection from "./component/page_sections/home_section/HomeSection";
import AboutSection from "./component/page_sections/about_section/AboutSection";
import Skills from "./component/page_sections/skills_section/Skills";

function App() {
  const [showButton, setShowButton] = useState(false);
  const [showNavBackground, setShowNavBackground] = useState(null);

  const bodyElement = document.getElementsByTagName("BODY")[0];
  const htmlElement = document.getElementsByTagName("HTML")[0];
  const sections = document.querySelectorAll("section");
  const navLi = document.querySelectorAll(
    ".navbarContainer .textContainer ul li"
  );

  useEffect(() => {
    function handleScroll() {
      let current = "";

      if (window.scrollY < 100) {
        setShowButton(false);
        setShowNavBackground(false);
      } else if (window.scrollY < window.innerHeight / 2) {
        setShowNavBackground(false);
      } else {
        setShowButton(true);
        setShowNavBackground(true);
      }

      sections.forEach((section) => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;

        if (
          window.scrollY >= sectionTop - 0.1 * sectionTop &&
          window.scrollY <= sectionTop + sectionHeight
        ) {
          current = section.getAttribute("id") ?? "home";
        }
      });
      navLi.forEach((li) => {
        li.classList.remove("active");
        if (li.classList.contains(current)) {
          li.classList.add("active");
        }
      });
    }
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [showButton, showNavBackground]);

  const handleTopClick = () => {
    bodyElement.style.scrollSnapType = "none";
    htmlElement.style.scrollSnapType = "none";
    setTimeout(() => {
      window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
    }, 300);
  };

  return (
    <>
      {/* <Cursor /> */}
      <Media
        queries={{
          small: "(max-width: 599px)",
          medium: "(min-width: 600px) and (max-width: 1199px)",
          large: "(min-width: 1200px)",
        }}
      >
        {(matches) => (
          <>
            {matches.small && <DisabledSection />}
            {matches.medium && <DisabledSection />}
            {matches.large && (
              <div className="App">
                <div
                  id="navbar"
                  style={{
                    top: "0%",
                    position: "fixed",
                    zIndex: "999",
                    width: "100%",
                    height: "8vh",
                  }}
                >
                  <Navbar showBackground={showNavBackground} />
                </div>
                {showButton && (
                  <div onClick={handleTopClick}>
                    <BackToTop />
                  </div>
                )}
                <section id="home" style={{ scrollSnapAlign: "start" }}>
                  <HomeSection />
                </section>
                <section id="aboutMe" style={{ scrollSnapAlign: "start" }}>
                  <AboutSection />
                </section>
                <section id="experiences" style={{ scrollSnapAlign: "start" }}>
                  <ExperiencesSection />
                </section>

                <section id="skills" style={{ scrollSnapAlign: "start" }}>
                  <Skills />
                </section>

                <section id="contact" style={{ scrollSnapAlign: "start" }}>
                  <Contact />
                </section>
              </div>
            )}
          </>
        )}
      </Media>
    </>
  );
}

export default App;
