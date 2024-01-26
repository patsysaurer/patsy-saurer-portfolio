import React from "react";
import './Projects.css'
import {
  Card,
  CardBody,
  CardTitle,
  CardSubtitle,
  CardText,
  CardLink,
} from "reactstrap";

const Projects = () => {
  return (
    <>
      <div className="projects-section">
        <h2>Projects</h2>
        <div className="card-container" id="projects">
          <Card // cake memory game
            style={{
              width: "18rem",
              marginBottom: "25px"
            }}
          >
            <CardBody>
              <CardTitle tag="h5">Cake Memory</CardTitle>
              <CardSubtitle className="mb-2 text-muted" tag="h6">
                React & Vite
              </CardSubtitle>
            </CardBody>
            <img
              alt="Cake Memory Game"
              src="https://res.cloudinary.com/dl11m63ow/image/upload/c_thumb,w_200,g_face/v1704243310/cake-match_itnako.png"
              width="100%"
            />
            <CardBody>
              <CardText>
                My love for cakes turned into a cute React game adding a cool confetti feature. 
              </CardText>
              <CardLink href="https://cake-memory.onrender.com/">
                Play Game
              </CardLink>
              <CardLink href="https://github.com/patsysaurer/cake-memory">
                View Code
              </CardLink>
            </CardBody>
          </Card>

          <Card // tic-tac-toe game
            style={{
              width: "18rem",
              marginBottom: "25px"
            }}
          >
            <CardBody>
              <CardTitle tag="h5">Tic Tac Toe</CardTitle>
              <CardSubtitle className="mb-2 text-muted" tag="h6">
                React & Yarn
              </CardSubtitle>
            </CardBody>
            <img
              alt="Tic Tac Toe"
              src="https://res.cloudinary.com/dl11m63ow/image/upload/c_thumb,w_200,g_face/v1704253602/tic-tac-toe_akmysc.png"
              width="100%"
            />
            <CardBody>
              <CardText>
                Collaborative project I contributed to creating a classic game in React. 
              </CardText>
              <CardLink href="https://tic-tac-toe-9qfh.onrender.com/">
                Play Game
              </CardLink>
              <CardLink href="https://github.com/patsysaurer/tic-tac-toe-alex-patsy-derek">
                View Code
              </CardLink>
            </CardBody>
          </Card>

          <Card className="card" // cat tinder
            style={{
              width: "18rem",
              marginBottom: "25px"
            }}
          >
            <CardBody>
              <CardTitle className="card-title" tag="h5">Cat Tinder</CardTitle>
              <CardSubtitle className="mb-2 text-muted" tag="h6">
                React & Ruby on Rails
              </CardSubtitle>
            </CardBody>
            <img
              alt="Cat Tinder app"
              src="https://res.cloudinary.com/dl11m63ow/image/upload/c_thumb,w_200,g_face/v1704253883/cat-tinder_y6jvgi.png"
              width="100%"
            />
            <CardBody>
              <CardText>
                Collaborative project I contributed to building a full-stack application. 
              </CardText>
              <CardLink href="">
                View App
              </CardLink>
              <CardLink href="https://github.com/patsysaurer/cat-tinder-backend">
                View Code
              </CardLink>
            </CardBody>
          </Card>
        </div>
      </div>
    </>
  );
};

export default Projects;
