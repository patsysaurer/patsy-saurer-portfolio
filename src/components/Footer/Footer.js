import React from "react";

const Footer = () => {
  return (
    <div className="footer">
      <footer className="p-15 d-block text-center text-grey">
      <p style={{color:"#EE05F2"}}>&copy; Patsy Saurer <span style={{color:"#2F1D73"}}> | </span><span style={{color:"#6451A6"}}>{new Date().getFullYear()}</span></p>
        <p className="sbx-cursor" style={{ fontSize: "0.7rem", color:"#6451A6" }}>
          <span style={{ color: "#EE05F2" }}>P.S. </span>
          <a
            style={{ textDecoration: "none", color: "#F088F2" }}
            href="https://www.cursors-4u.com/cursor/2013/04/16/starbucks-strawberries-cr-me-frappuccino.html"
          >
             starbucks strawberries and cream frappuccino cursor
          </a>{" "}
          relates to my barista days as a sbux ☕️ partner
        </p>
        <a style={{fontSize:"0.6rem", textDecoration:"none", color:"#6451A6"}}
          href="https://www.flaticon.com/free-icons/sparkle"
          title="sparkle icons"
        >
          Sparkle icons created by Freepik
        </a>
      </footer>
    </div>
  );
};

export default Footer;
