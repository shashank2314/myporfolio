import "./App.css";
import { Route, Routes } from "react-router-dom";
import Navbar from "./Components/Navbar";
import About from "./Components/About";
import Project from "./Components/Projects";
import Contact from "./Components/Contact";
import Error from "./Components/Error"
import BackgroundCanvas from "./Components/Background";
import Home from "./Components/Home";
import Experience from "./Components/Experience";
import Skills from "./Components/Skills";
function App() {
  return (
    <div className="relative w-[98vw] overflow-x-hidden">
      <BackgroundCanvas />
      <Navbar />
      <div className="mt-[100px] flex flex-col justify-center items-center">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/experience" element={<Experience />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/projects" element={<Project />} />
          <Route path="*" element={<Error />} />
        </Routes>

      </div>

    </div>
  );
}

export default App;