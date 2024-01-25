import React from "react";
import Intro from "./Intro";
import "./Hero.css";
import ParticleBackground from "../ParticleBackground";

const Hero = () => {
  return (
    <div className="hero" id="hero-section">
      <ParticleBackground />
      <Intro />
    </div>
  );
};

export default Hero;
