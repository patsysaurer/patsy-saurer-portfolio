import React from "react";
import { FaReact } from "react-icons/fa";
import { DiRuby } from "react-icons/di";
import { SiRubyonrails } from "react-icons/si";
import { RiJavascriptFill } from "react-icons/ri";

import "./Skills.css";

const SkillsCard = () => {
  return (
    <>
      <div className="skills-group">
        <div className="skills-card">
          <RiJavascriptFill style={{ color: "hotpink", fontSize: "3.5rem" }} />
          <h4>JavaScript</h4>
          <p>Front-End Language</p>
        </div>
        <div className="skills-card">
          <FaReact style={{ color: "hotpink", fontSize: "3.5rem" }} />
          <h4>React</h4>
          <p>Front-End Framework</p>
        </div>
        <div className="skills-card">
          <DiRuby style={{ color: "hotpink", fontSize: "3.5rem" }} />
          <h4>Ruby</h4>
          <p>Back-End Language</p>
        </div>
        <div className="skills-card">
          <SiRubyonrails style={{ color: "hotpink", fontSize: "3.5rem" }} />
          <h4>Ruby on Rails</h4>
          <p>Back-End Framework</p>
        </div>
      </div>
    </>
  );
};

export default SkillsCard;
