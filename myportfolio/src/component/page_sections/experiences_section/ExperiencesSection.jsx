import { Parallax } from "react-parallax";
import { ExternalLink } from "react-external-link";
import "./ExperiencesSection.css";
import { experiencesData } from "./ExperiencesData";
import Carousel from "react-bootstrap/Carousel";
import "bootstrap/dist/css/bootstrap.css";
import { useState } from "react";

const inlineStyle = {
  background: "transparent",
  color: "white",
  left: "50%",
  top: "65%",
  position: "absolute",
  padding: "20px",
  transform: "translate(-50%, -50%)",
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
  const titleImage = imageSrc;
  return (
    <div className="titleDiv">
      <Parallax
        bgImage={titleImage}
        bgImageStyle={{ height: `1000px`, width: "100%", opacity: "1" }}
        strength={400}
      >
        <div className="titleTextContainer" style={{ height: "20vh" }}>
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
const detailsDiv = (
  id,
  txt1,
  txt2,
  txt3,
  txt4,
  txt5,
  txt6,
  txt7,
  imageSrc,
  outLink
) => {
  return (
    <div className="detailsDiv">
      <ul className="detailsList">
        <li className="listItem1">
          <h3> {txt1}</h3>
        </li>

        {txt2 ? (
          <li className="listItem2">
            <h3> {txt2}</h3>
          </li>
        ) : (
          <></>
        )}
        {txt3 ? (
          <li className="listItem3">
            <h3> {txt3}</h3>
          </li>
        ) : (
          <> </>
        )}
        {txt4 ? (
          <li className="listItem4">
            <h3> {txt4} </h3>
          </li>
        ) : (
          <> </>
        )}
        {txt5 ? (
          <li style={{ wordSpacing: "0.8em" }} className="listItem5">
            {" "}
            <h3> {txt5} </h3>
          </li>
        ) : (
          <> </>
        )}
        {txt6 ? (
          <li style={{ wordSpacing: "0.8em" }} className="listItem6">
            {" "}
            <h3> {txt6} </h3>
          </li>
        ) : (
          <> </>
        )}
        {txt7 ? (
          <li style={{ wordSpacing: "0.8em" }} className="listItem6">
            {" "}
            <h3> {txt6} </h3>
          </li>
        ) : (
          <> </>
        )}
      </ul>

      <div className="detailsRightSection">
        {id < 2 && <img src={imageSrc} className="detailsPic" />}

        {id > 1 && (
          <div className="mediaContainer">
            <div className="videoWrapper">
              <div
                className="videoContainer"
                style={{
                  backgroundImage: `url(${imageSrc}`,
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

const experienceDiv = (experienceJson) => {
  return (
    <>
      {titleDiv(
        experienceJson["id"],
        experienceJson["title-text1"],
        experienceJson["title-text2"],
        experienceJson["title-text3"],
        experienceJson["title-imageSrc"]
      )}

      {detailsDiv(
        experienceJson["id"],
        experienceJson["details-text1"],
        experienceJson["details-text2"],
        experienceJson["details-text3"],
        experienceJson["details-text4"],
        experienceJson["details-text5"],
        experienceJson["details-text6"],
        experienceJson["details-text7"],
        experienceJson["details-imageSrc"],
        experienceJson["details-href"]
      )}
    </>
  );
};

const ExperiencesSection = () => {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };
  return (
    <div
      className="sectionDiv"
      style={{
        backgroundColor: `${experiencesData[index]["section-bg-color"]}`,
      }}
    >
      <div className="carouselContainer">
        <Carousel
          pause="false"
          interval={15000}
          activeIndex={index}
          onSelect={handleSelect}
        >
          {experiencesData.map((experience, i) => {
            return <Carousel.Item>{experienceDiv(experience)}</Carousel.Item>;
          })}
        </Carousel>
      </div>
    </div>
  );
};

export default ExperiencesSection;
