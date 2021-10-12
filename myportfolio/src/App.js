import './App.css';
import HomeSection from "./component/HomeSection";
import Navbar from './component/Navbar';
function App() {
  return (
    <div className="App">
      <Navbar/>
      <section
            id="home">
            <HomeSection />
          </section>

       
    </div>
  );
}

export default App;
