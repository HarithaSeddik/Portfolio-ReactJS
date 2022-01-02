import "./AboutSection.css";
import aboutPic from "../images/aboutPic2.jpg";
import { Link } from "react-scroll";
import resume from "../data/Resume.pdf";
import { ExternalLink } from 'react-external-link';

const AboutSection = () => {

  const bodyElement = document.getElementsByTagName("BODY")[0];
  const htmlElement = document.getElementsByTagName("HTML")[0];
  const handleClick = () => {
    bodyElement.style.scrollSnapType = "none";
    htmlElement.style.scrollSnapType = "none";
  };
  return (
    <div className="aboutSectionContainer">
      <div className="leftSection">
        <img className="aboutPic" src={aboutPic} />
      </div>
      <div className="rightSection">
        <div className="aboutTextDiv">
          <h1> Haritha Akkad</h1>
          <h5>
            {" "}
            A <span> software engineer</span> based in <span> Turkey </span>
          </h5>
          <p className="aboutParagraph">
            {" "}
            I am a fullstack developer that has worked extensively with {" "}
            <span>Flutter</span> and <span>React.Js</span>. I am also skilled at multiple backend
            frameworks including <span>Python</span> and <span>NodeJs</span>.
            <br />
            <br />I am fluent in <span>English, Turkish,</span> and{" "}
            <span> Arabic</span> spoken languages.
            <br />
            <br />
            In my free time I like to take on side projects that challenge my
            skills.
            <br /><br />
            You can find the source code for  <span>
              {" "}
              <ExternalLink href='https://github.com/HarithaSeddik/Portfolio-ReactJS/' target='_blank'>
                   <a className='gitHubLink'>this ReactJS website</a>
              </ExternalLink>
            </span> and other cool
            projects on my
            <span>
              {" "}
              <ExternalLink href='https://github.com/HarithaSeddik' target='_blank'>
                   <a className='gitHubLink'>Github</a>
              </ExternalLink>
            </span>{" "}
            page.
            <br />
            <br /> Check out the rest of my{" "}
            <Link onClick={handleClick} smooth to="skills">
              <span className="skillsLink">skills</span>!
            </Link>
          </p>
          <ul className="aboutList">
            <li>
              <h4>Email</h4> <h5>| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; akkad.haritha@gmail.com</h5>
            </li>

            <li>
              <h4> Phone</h4> <h5>{" | "} &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;+905538033898</h5>
            </li>

            <li>
              <h4>Address</h4> <h5>{" |"}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Istanbul, Turkey</h5>
            </li>

            <li>
              <h4> Freelance</h4> <h5>{" |"}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Available</h5>
            </li>
          </ul>
          <div className="downloadResumeButton">
            <a
              href={resume}
              download={resume}
              target="_blank"
              rel="noopener noreferrer"
            >
              Download CV
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutSection;
