import "./App.css";
import Nav from "./components/Nav";
import Courss from "./components/Courss";
import Footer from "./components/Footer";
import M1 from "./images/m1.png";
import M2 from "./images/m2.jpeg";
import M3 from "./images/m3.png";
import M4 from "./images/m4.png";
import M5 from "./images/m5.png";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import About from "./components/About";
import Courses101 from "./components/Courses101";

function App() {
  return (
    <div>
      <Router>
        <Nav />

        <Routes>
          <Route path="/About" element={<About />}></Route>
          <Route path="/Courses101" element={<Courses101 />}></Route>
        </Routes>

        <div className="container">
          <Courss isAvilable={false} img={M1} />
          <Courss isAvilable={true} img={M2} />
          <Courss isAvilable={true} img={M3} />
          <Courss isAvilable={true} img={M4} />
          <Courss isAvilable={true} img={M5} />
          <Courss isAvilable={true} img={M1} />
          <Courss isAvilable={true} img={M2} />
          <Courss isAvilable={true} img={M3} />
          <Courss isAvilable={true} img={M4} />
          <Courss isAvilable={true} img={M5} />
        </div>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
