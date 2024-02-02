import React from "react";
import "./Social.css";

const Social = () => {
  return (
    <>
      <div className="social-icons" id="social">
        <ul className="icons">
          <li>
            <a href="https://github.com/patsysaurer" target="blank">
              <i className="fa-brands fa-github-alt"></i>
            </a> 
          </li>
          <li>
            <a href="https://www.linkedin.com/in/patsy-saurer/" target="blank">
              <i className="fa-brands fa-linkedin-in"></i>
            </a>
          </li>
          <li>
            <a href="https://www.instagram.com/patsyspastrys/" target="blank">
              <i className="fa-brands fa-instagram"></i>
            </a>
          </li>
        </ul>
      </div>
    </>
  );
};

export default Social;