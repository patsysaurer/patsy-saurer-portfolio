import React from "react";
import "./Social.css";

const Social = () => {
  return (
    <>
      <div className="social-icons">
        <ul className="icons">
          <li>
            <a href="https://github.com/patsysaurer" target="_blank">
              <i className="fa-brands fa-github-alt"></i>
            </a> 
          </li>
          <li>
            <a href="https://www.linkedin.com/in/patsy-saurer/" target="_blank">
              <i className="fa-brands fa-linkedin-in"></i>
            </a>
          </li>
          <li>
            <a href="https://www.instagram.com/patsyspastrys/" target="_blank">
              <i className="fa-brands fa-instagram"></i>
            </a>
          </li>
        </ul>
      </div>
    </>
  );
};

export default Social;