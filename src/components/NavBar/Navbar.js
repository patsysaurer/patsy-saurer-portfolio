import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { Link } from "react-scroll";
import "./Navbar.css";

const Navbar = () => {
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);
  const closeMenu = () => setClick(false);

  return (
    <div className="header">
      <nav className="navbar">
        <Link
          to="hero"
          spy={true}
          smooth={true}
          offset={-100}
          duration={500}
          onClick={closeMenu}
          style={{
            fontSize: "2.5rem",
            color: "var(--primary-color)",
            fontWeight: "bold",
          }}
        >
          PS
        </Link>
        <div className="hamburger" onClick={handleClick}>
          {click ? (
            <FaTimes />
          ) : (
            <FaBars size={30} style={{ color: "#EE05F2" }} />
          )}
        </div>
        <ul className={click ? "nav-menu active" : "nav-menu"}>
          <li className="nav-item">
            <Link
              to="hero"
              spy={true}
              smooth={true}
              offset={-100}
              duration={500}
              onClick={closeMenu}
            >
              Home
            </Link>
          </li>
          <li className="nav-item">
            <Link
              to="tech-stack"
              spy={true}
              smooth={true}
              offset={-100}
              duration={500}
              onClick={closeMenu}
            >
              Tech Stack
            </Link>
          </li>
          <li className="nav-item">
            <Link
              to="projects"
              spy={true}
              smooth={true}
              offset={-100}
              duration={500}
              onClick={closeMenu}
            >
              Projects
            </Link>
          </li>
          <li className="nav-item">
            <Link
              to="about"
              spy={true}
              smooth={true}
              offset={-100}
              duration={500}
              onClick={closeMenu}
            >
              About
            </Link>
          </li>
          <li className="nav-item">
            <a href="https://www.linkedin.com/in/patsy-saurer/" target="blank">
              Contact
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
