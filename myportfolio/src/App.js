import "./App.css";
import { useState, useEffect } from "react";
import HomeSection from "./component/HomeSection";
import Navbar from "./component/Navbar";
import jsonData from "./data/data.json";
import { Parallax } from "react-parallax";
import { ExternalLink } from "react-external-link";
function App() {
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
          bgImageStyle={{ height: "1000px", width: "100%", opacity: "1" }}
          strength={400}
        >
          <div style={{ height: "50vh" }}>
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
          <li className="listItem2">
            <h3> {txt2}</h3>
          </li>
          <li className="listItem3">
            <h3> {txt3}</h3>
          </li>
          <li className="listItem4">
            <h3> {txt4} </h3>
          </li>
          <li style={{ wordSpacing: "0.8em" }} className="listItem5">
            {" "}
            <h3> {txt5} </h3>
          </li>
        </ul>

        <div className="detailsRightSection">
          {id == 0 && (
            <img src={require(`${imageSrc}`).default} className="detailsPic" />
          )}
          {id != 0 && (
            <div className="mediaContainer">
              <div className="videoWrapper">
                <div
                  className="videoContainer"
                  style={{
                    backgroundImage:
                      // "url(./images/objRecVid.gif)"
                      `url(${require(`${imageSrc}`).default})`,
                  }}
                >
                  {(id == 2 || id == 3 || id == 1) && (
                    <ExternalLink className="linkContainer" href={outLink}>
                      <button className="youtubeButton">
                        <p> {id == 1 ? "Visit Website!" : "Watch Me!"} </p>
                        {id != 1 && <i className="fa fa-youtube-play"> </i>}
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

  const experienceDiv = (id, snapScroll) => {
    return (
      // <div className={snapScroll? 'experienceContainer': 'experienceContainer--nosnap'}>
      <div style={{ scrollSnapAlign: `${snapScroll ? "start" : "none"}` }}>
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
        {/* {console.log(jsonData.experiences[id]['details-imageSrc'])} */}
      </div>
    );
  };
  const [snapScroll, setSnapScroll] = useState(true);
  return (
    <div className="App">
      <Navbar />
      <section id="home">
        <HomeSection />
      </section>
     
    </div>
  );
}

export default App;
