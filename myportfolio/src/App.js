import "./App.css";
import HomeSection from "./component/HomeSection";
import Navbar from "./component/Navbar";
import Cursor from "./component/Cursor";
import jsonData from "./data/data.json";
import { Parallax } from "react-parallax";
import { ExternalLink } from "react-external-link";
import AboutSection from "./component/AboutSection";
import React, { useEffect, useState } from "react";
import BackToTop from "./component/BackToTop";
import Skills from "./component/Skills";
import Contact from "./component/Contact";
import Media from "react-media";
import DisabledSection from "./component/DisabledSection";

const inlineStyle = {
  // background: '#fff',
  background: "transparent",
  color: "white",
  left: "50%",
  top: "65%",
  position: "absolute",
  padding: "20px",
  transform: "translate(-50%, -50%)",
  // fontSize:'40px',
  alignContent: "center",
  textAlign: "center",
  textTransform: "uppercase",
  verticalAlign: "middle",
  lineHeight: "20px",
  fontWeight: "100",
  letterSpacing: ".15em",
  whiteSpace: "nowrap",
};

const titleDiv = (id, txt1, txt2, txt3, imageSrc) => {
  const titleImage = `${require(`${imageSrc}`).default}`;
  return (
    <div className="titleDiv">
      <Parallax
        bgImage={titleImage}
        bgImageStyle={{ height: `1000px`, width: "100%", opacity: "1" }}
        strength={400}
        style={{height:'45vh'}}
      >
        <div style={{ height: "40vh" }}>
          <div style={inlineStyle}>
            <h1 className="roleTitle"> {txt1} </h1>
            <h2> {txt2}</h2>
            <h3> {txt3}</h3>
          </div>
        </div>
      </Parallax>
    </div>
  );
};
const detailsDiv = (id, txt1, txt2, txt3, txt4, txt5, imageSrc, outLink) => {
  return (
    <div className="detailsDiv">
      <ul className="detailsList">
        <li className="listItem1">
          <h3> {txt1}</h3>
        </li>
       {txt2?  <li className="listItem2">
          <h3> {txt2}</h3>
        </li> : <></> }
        {txt3? <li className="listItem3">
          <h3> {txt3}</h3>
        </li> : <> </>}
       {txt4?  <li className="listItem4">
          <h3> {txt4} </h3>
        </li> : <> </>}
        { txt5?  <li style={{ wordSpacing: "0.8em" }} className="listItem5">
          {" "}
          <h3> {txt5} </h3>
        </li> : <> </> }
      </ul>

      <div className="detailsRightSection">
        {id <2 && (
          <img src={require(`${imageSrc}`).default} className="detailsPic" />
        )}

        {(id > 1 ) && (
          <div className="mediaContainer">
            <div className="videoWrapper">
              <div
                className="videoContainer"
                style={{
                  backgroundImage:
                    `url(${require(`${imageSrc}`).default})`,
                }}
              >
                {(id == 2 || id == 3 || id == 4) && (
                  <ExternalLink className="linkContainer" href={outLink}>
                    <button className="youtubeButton">
                      <p> {id == 2 ? "Visit Website!" : "Watch Me!"} </p>
                      {id == 3 && <i className="fa fa-youtube-play"> </i>}
                    </button>
                  </ExternalLink>
                )}
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

const experienceDiv = (id) => {
  return (
    // <div className={snapScroll? 'experienceContainer': 'experienceContainer--nosnap'}>
    <div style={{ scrollSnapAlign: "start" }}>
      {titleDiv(
        jsonData.experiences[id]["id"],
        jsonData.experiences[id]["title-text1"],
        jsonData.experiences[id]["title-text2"],
        jsonData.experiences[id]["title-text3"],
        jsonData.experiences[id]["title-imageSrc"]
      )}

      {detailsDiv(
        jsonData.experiences[id]["id"],
        jsonData.experiences[id]["details-text1"],
        jsonData.experiences[id]["details-text2"],
        jsonData.experiences[id]["details-text3"],
        jsonData.experiences[id]["details-text4"],
        jsonData.experiences[id]["details-text5"],
        jsonData.experiences[id]["details-imageSrc"],
        jsonData.experiences[id]["details-href"]
      )}
    </div>
  );
};
function App() {
  const [showButton, setShowButton] = useState(false);
  const [showNavBackground, setShowNavBackground] = useState(null);
  const [bigScreen, setBigScreen] = useState(true);
  
  const bodyElement = document.getElementsByTagName("BODY")[0];
  const htmlElement = document.getElementsByTagName("HTML")[0];
  const sections = document.querySelectorAll("section");
  const navLi = document.querySelectorAll(".navbarContainer .textContainer ul li");
  // const navLiHome = document.querySelector(".navbarContainer .textContainer ul .home");
  

  useEffect(() => {
    function handleScroll() {
      
      let current = ''
      
      if (window.scrollY < 100) {
        setShowButton(false);
        setShowNavBackground(false);
        
      } else if (window.scrollY < window.innerHeight / 2) {
        setShowNavBackground(false);
      } else {
        setShowButton(true);
        setShowNavBackground(true);
        
      }

      sections.forEach( (section)=> {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        
        if (window.scrollY >= (sectionTop- 0.1*sectionTop) && window.scrollY <= ( sectionTop + sectionHeight ) ){
          current = section.getAttribute('id')
          
        }
      })
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
    <Cursor/>
    <Media queries = {{
       small: "(max-width: 599px)",
       medium: "(min-width: 600px) and (max-width: 1199px)",
       large: "(min-width: 1200px)"
    }}>
    {matches => ( 
      <>
      {matches.small && <DisabledSection/> }
      {matches.medium && <DisabledSection/>}
      {matches.large && <div className='App'>
        
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
        <section id="experiences" className="experiencesContainer">
          {jsonData.experiences.map((experience, i) => (
            <>{experienceDiv(experience.id)}</>
            ))}
        </section>

        <section id="skills" style={{ scrollSnapAlign: "start" }}>
          <Skills />
        </section>

        <section id="contact" style={{ scrollSnapAlign: "start" }}>
          <Contact />
        </section>
        </div>}
      </>
    )}
        </Media>
    {/* <Cursor />
     <Media queries={{
       small: "(max-width: 599px)",
       medium: "(min-width: 600px) and (max-width: 1199px)",
          large: "(min-width: 1200px)"
        }}>
      {matches => (
            <>
              {matches.small && <DisabledSection/>}
              {matches.medium && <DisabledSection/>}
              {matches.large && <div className="App">
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
        <section id="experiences" className="experiencesContainer">
          {jsonData.experiences.map((experience, i) => (
            <>{experienceDiv(experience.id)}</>
          ))}
        </section>

        <section id="skills" style={{ scrollSnapAlign: "start" }}>
          <Skills />
        </section>

        <section id="contact" style={{ scrollSnapAlign: "start" }}>
          <Contact />
        </section>
      </div>
      }
            </>
      )}
    </Media>*/
  }
    </> 
  );
}

export default App;
