import "./App.css";
import { useState, useEffect } from "react";
import HomeSection from "./component/HomeSection";


function App() {
  
  const [snapScroll, setSnapScroll] = useState(true);
  return (
    <div className="App">

      <section id="home">
        <HomeSection />
      </section>
     
    </div>
  );
}

export default App;
