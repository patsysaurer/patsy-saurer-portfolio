import React from "react";
import "./About.css";

const About = () => {
  return (
    <div className="about" id="about">
      <div className="about-text">
        <h3>About Me</h3>
        <p>
          I'm a developer with a sweet twist. I hold a bachelor's degree in Web
          Design & Interactive Media and a certification in full-stack
          development. Prior to my journey in web development, I served as a
          Petty Officer in the U.S. Navy for four years, where I handled
          aircraft operations at sea. This experience instilled in me a deep
          appreciation for precision, quality, and commitment.
        </p>
        <p>
          After my time in the Navy, I pursued my first passion by completing a
          culinary program, specializing in chocolate and pastry. As a
          chocolatier and pastry chef, I found immense joy in creating
          delightful confections. It was during this time that I helped my boss
          enhance the restaurant's website, which sparked my interest in web
          design and development. This newfound passion led me to transition
          into a career that combines creativity with technical expertise.
        </p>
        <p>
          Now, as a full-stack developer, I bring a unique blend of meticulous
          attention to detail, artistic flair, and technical proficiency to
          every project I undertake. I am dedicated to creating engaging,
          user-friendly web experiences and am eager to contribute my skills to
          innovative and dynamic projects.
        </p>
        <div className="image">
          <img
            src="https://res.cloudinary.com/dl11m63ow/image/upload/v1712806589/979564956161049103_xb4wfk.png"
            alt="Avatar of Patsy"
          />
          <button>
            <a href="https://www.linkedin.com/in/patsy-saurer/" target="blank">
              View My LinkedIn
            </a>
          </button>
        </div>
      </div>
    </div>
  );
};

export default About;
