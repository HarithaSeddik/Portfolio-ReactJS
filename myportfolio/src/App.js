import "./App.css";
import { useState, useEffect } from "react";

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

  const [snapScroll, setSnapScroll] = useState(true);
  return (
    <div className="App">
      <Navbar />
      <section id="home">
        {/* <HomeSection /> */}
      </section>
     
    </div>
  );
}

export default App;
