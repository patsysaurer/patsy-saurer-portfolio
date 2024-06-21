import React from "react";
import Navbar from "./components/NavBar/Navbar";
import Hero from "./components/Hero/Hero";
import Skills from "./components/Skills/Skills";
import Social from "./components/Social/Social";
import About from "./components/About/About";
import Projects from "./components/Projects/Projects";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <>
      <div className="top-page">
        <Navbar />
        <Social />
        <Hero className="hero-section" />
      </div>
      <Skills id="skills" />
      <Projects />
      <About />
      <Footer />
    </>
  );
}

export default App;
