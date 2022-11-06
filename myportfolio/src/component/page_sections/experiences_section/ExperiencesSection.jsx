import { Parallax } from "react-parallax";
import { ExternalLink } from "react-external-link";
import "./ExperiencesSection.css";
import { experiencesData } from "./ExperiencesData";
// import testImage from "../../../../public/images/";
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
  // const titleImage = `${require(`${imageSrc}`).default}`;
  const titleImage = imageSrc;
  return (
    <div className="titleDiv">
      <Parallax
        bgImage={titleImage}
        bgImageStyle={{ height: `1000px`, width: "100%", opacity: "1" }}
        strength={400}
        style={{ height: "45vh" }}
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
  console.log(`details image source: ${imageSrc}`);
  // const myImageSrc = require(`${imageSrc}`).default;
  // console.log(`required details image source: ${imageSrc}`);
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
      </ul>

      <div className="detailsRightSection">
        {id < 2 && (
          // <img src={require(`${imageSrc}`).default} className="detailsPic" />
          <img src={imageSrc} className="detailsPic" />
        )}

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
  console.log(experienceJson);
  return (
    // <div className={snapScroll? 'experienceContainer': 'experienceContainer--nosnap'}>
    <div style={{ scrollSnapAlign: "start" }}>
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
        experienceJson["details-imageSrc"],
        experienceJson["details-href"]
      )}
    </div>
  );
};
const ExperiencesSection = () => {
  return (
    <>
      {experiencesData.map((experience, i) => {
        return <>{experienceDiv(experience)}</>;
      })}
    </>
  );
};

export default ExperiencesSection;
