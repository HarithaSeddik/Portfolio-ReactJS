import "./App.css";
import { useState, useEffect } from "react";
import HomeSection from "./component/HomeSection";
import Navbar from "./component/Navbar";
import jsonData from "./data/data.json";

function App() {
  
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
