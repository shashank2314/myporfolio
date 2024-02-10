import "./App.css";
import { Route, Routes } from "react-router-dom";
import Navbar from "./Components/Navbar";
import About from "./Components/About";
import Footer from "./Components/Footer";
import { useState } from "react";
import Project from "./Components/Projects";
import Contact from "./Components/Contact";
import Resume from "./Components/Resume"
import Error from "./Components/Error"
function App() {
  const [active, setactive] = useState("");
  return (
    <div className="flex flex-col w-screen min-h-screen bg-hero items-center">
      <Navbar active={active} setactive={setactive} />
      <div className="md:mt-[180px] mt-10 flex flex-col justify-center items-center">
        <Routes>
          <Route path="/" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/resume" element={<Resume />} />
          <Route path="/projects" element={<Project />} />
          <Route path="*" element={<Error/>} />
        </Routes>

        <Footer setactive={setactive} />
      </div>

    </div>
  );
}

export default App;