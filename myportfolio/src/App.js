import './App.css';
import HomeSection from "./component/HomeSection";
import Navbar from './component/Navbar';
import Cursor from './component/Cursor';
function App() {
  return (
    <div className="App">
      <Cursor/>
      <Navbar/>
      <section
            id="home">
            <HomeSection />
          </section>

       
    </div>
  );
}

export default App;
