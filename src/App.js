import "./App.css";
// import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import About from "./components/About";
import Home from "./components/Home";
import Contactus from "./components/Contactus"
import { Routes, Route } from "react-router-dom";
import Login from "./components/Login";
import Projects from "./components/Projects";
import Userdetails from "./components/UserProfile"

function App() {
  return (
    <div className="App">
      <div className="main">
        <Navbar />
      </div>
      <div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contactus" element={<Contactus />} />
          <Route path="/login" element={<Login />} />
          <Route path="/project" element={<Projects />} />
          <Route path="/userdetails" element={<Userdetails />} />
        </Routes>
      </div>
      {/* <div className="footer"><Footer/></div> */}
    </div>
  );
}

export default App;
