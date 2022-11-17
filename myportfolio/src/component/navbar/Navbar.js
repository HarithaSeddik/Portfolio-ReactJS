import "./Navbar.css";
import { Link } from "react-scroll";
const Navbar = (props) => {
  const bodyElement = document.getElementsByTagName("BODY")[0];
  const htmlElement = document.getElementsByTagName("HTML")[0];
  const handleClick = () => {
    bodyElement.style.scrollSnapType = "none";
    htmlElement.style.scrollSnapType = "none";
  };

  return (
    <div
      className={
        props.showBackground ? "navbarContainer--active" : "navbarContainer"
      }
    >
      <div
        className={
          props.showBackground ? "textContainer--active" : "textContainer"
        }
      >
        <ul className="textList">
          <Link onClick={handleClick} smooth to="home">
            <li className="home"> Home </li>
          </Link>
          <Link onClick={handleClick} smooth to="aboutMe">
            <li className="aboutMe"> About Me </li>
          </Link>
          <Link onClick={handleClick} smooth to="experiences">
            <li className="experiences"> Experience </li>
          </Link>
          <Link onClick={handleClick} smooth to="skills">
            <li className="skills"> Skills </li>
          </Link>
          <Link onClick={handleClick} smooth to="contact">
            <li className="contact"> Contact </li>
          </Link>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
