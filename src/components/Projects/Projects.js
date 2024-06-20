import React from "react";
import "./Projects.css";
import {
  Button,
  Card,
  CardBody,
  CardTitle,
  CardSubtitle,
  CardText,
  CardLink,
  Container,
} from "reactstrap";

const Projects = () => {
  return (
    <>
      <Container id="projects">
        {/* <div className="projects-section" > */}
        <h2>Projects</h2>
        <div className="card-container">
          <Card // The Bindery Denver
            className="card"
            style={{
              width: "18rem",
              marginBottom: "25px",
            }}
          >
            <CardBody>
              <CardTitle
                className="card-title"
                tag="h5"
                style={{ color: "var(--primary-color)" }}
              >
                The Bindery Denver
              </CardTitle>
              <CardSubtitle className="mb-2 text-muted" tag="h6">
                WordPress, HTML & CSS
              </CardSubtitle>
            </CardBody>
            <img
              alt="The Bindery Denver"
              src="https://res.cloudinary.com/dl11m63ow/image/upload/v1718908064/Screenshot_2024-06-20_at_1.27.31_PM_oerxey.png"
              width="100%"
            />
            <CardBody>
              <CardText>
                A New American fine dining restaurant in Denver with a beautiful
                gallery and menu.
              </CardText>
              {/* <CardLink href=""><Button color="warning" style={{border:"none"}}>View App</Button></CardLink> */}
              <CardLink href="https://thebinderydenver.com/" target="blank">
                <Button color="warning" style={{ border: "none" }}>
                  View Site
                </Button>
              </CardLink>
            </CardBody>
          </Card>

          <Card // cake recipe app
            className="card"
            style={{
              width: "18rem",
              marginBottom: "25px",
            }}
          >
            <CardBody>
              <CardTitle
                className="card-title"
                tag="h5"
                style={{ color: "var(--primary-color)" }}
              >
                Cake Recipe App
              </CardTitle>
              <CardSubtitle className="mb-2 text-muted" tag="h6">
                React, Ruby on Rails & RSpec Testing
              </CardSubtitle>
            </CardBody>
            <img
              alt="Cake Recipe App"
              src="https://res.cloudinary.com/dl11m63ow/image/upload/w_1000,ar_1:1,c_fill,g_auto,e_art:hokusai/v1706524219/cake-recipe-app_mc8s1y.png"
              width="100%"
            />
            <CardBody>
              <CardText>
                Full-Stack App deployed with full CRUD functionality and my
                personal cakes.
              </CardText>
              <CardLink
                href="https://cake-recipes-app.onrender.com/"
                target="blank"
              >
                <Button color="warning" style={{ border: "none" }}>
                  View App
                </Button>
              </CardLink>
              <CardLink
                href="https://github.com/patsysaurer/cake-recipes-backend"
                target="blank"
              >
                <Button
                  style={{
                    backgroundColor: "var(--secondary-color)",
                    border: "var(--secondary-color)",
                    color: "var(--primary-dark)",
                  }}
                >
                  View Code
                </Button>
              </CardLink>
            </CardBody>
          </Card>

          <Card // cake memory game
            style={{
              width: "18rem",
              marginBottom: "25px",
            }}
          >
            <CardBody>
              <CardTitle tag="h5" style={{ color: "var(--primary-color)" }}>
                Cake Memory
              </CardTitle>
              <CardSubtitle className="mb-2 text-muted" tag="h7">
                React & Vite
              </CardSubtitle>
            </CardBody>
            <img
              alt="Cake Memory Game"
              src="https://res.cloudinary.com/dl11m63ow/image/upload/w_1000,ar_1:1,c_fill,g_auto,e_art:hokusai/v1704243310/cake-match_itnako.png"
              width="100%"
            />
            <CardBody>
              <CardText>
                My love for cakes turned into a cute React game adding a cool
                confetti feature.
              </CardText>
              <CardLink href="https://cake-memory.onrender.com/" target="blank">
                <Button color="warning" style={{ border: "none" }}>
                  Play Me
                </Button>
              </CardLink>
              <CardLink
                href="https://github.com/patsysaurer/cake-memory"
                target="blank"
              >
                <Button
                  style={{
                    backgroundColor: "var(--secondary-color)",
                    border: "var(--secondary-color)",
                    color: "var(--primary-dark)",
                  }}
                >
                  View Code
                </Button>
              </CardLink>
            </CardBody>
          </Card>

          <Card // tic-tac-toe game
            style={{
              width: "18rem",
              marginBottom: "25px",
            }}
          >
            <CardBody>
              <CardTitle tag="h5" style={{ color: "var(--primary-color)" }}>
                Tic Tac Toe
              </CardTitle>
              <CardSubtitle className="mb-2 text-muted" tag="h6">
                React & Yarn
              </CardSubtitle>
            </CardBody>
            <img
              alt="Tic Tac Toe"
              src="https://res.cloudinary.com/dl11m63ow/image/upload/w_1000,ar_1:1,c_fill,g_auto,e_art:hokusai/v1706896788/Screenshot_2024-02-02_at_9.59.23_AM_bthets.png"
              width="100%"
            />
            <CardBody>
              <CardText>
                Collaborative project I contributed to creating a classic game
                in React.
              </CardText>
              <CardLink
                href="https://tic-tac-toe-9qfh.onrender.com/"
                target="blank"
              >
                <Button color="warning" style={{ border: "none" }}>
                  Play Me
                </Button>
              </CardLink>
              <CardLink
                href="https://github.com/patsysaurer/tic-tac-toe-alex-patsy-derek"
                target="blank"
              >
                <Button
                  style={{
                    backgroundColor: "var(--secondary-color)",
                    border: "var(--secondary-color)",
                    color: "var(--primary-dark)",
                  }}
                >
                  View Code
                </Button>
              </CardLink>
            </CardBody>
          </Card>

          <Card
            className="card" // Laugh Host
            style={{
              width: "18rem",
              marginBottom: "25px",
            }}
          >
            <CardBody>
              <CardTitle
                className="card-title"
                tag="h5"
                style={{ color: "var(--primary-color)" }}
              >
                Laugh Host:3001
              </CardTitle>
              <CardSubtitle className="mb-2 text-muted" tag="h6">
                React, Ruby on Rails & RSpec Testing
              </CardSubtitle>
            </CardBody>
            <img
              alt="Laugh Host App"
              src="https://res.cloudinary.com/dl11m63ow/image/upload/w_1000,ar_1:1,c_fill,g_auto,e_art:hokusai/v1706894142/laugh-host_ivgid7.png"
              width="100%"
            />
            <CardBody>
              <CardText>
                Collaborative project I contributed to building a full-stack
                application.
              </CardText>
              <CardLink
                href="https://laughhost3001.onrender.com/"
                target="blank"
              >
                <Button color="warning" style={{ border: "none" }}>
                  View App
                </Button>
              </CardLink>
              <CardLink
                href="https://github.com/patsysaurer/laugh-host3001-backend"
                target="blank"
              >
                <Button
                  style={{
                    backgroundColor: "var(--secondary-color)",
                    border: "var(--secondary-color)",
                    color: "var(--primary-dark)",
                  }}
                >
                  View Code
                </Button>
              </CardLink>
            </CardBody>
          </Card>

          <Card
            className="card" // cat Tinder
            style={{
              width: "18rem",
              marginBottom: "25px",
            }}
          >
            <CardBody>
              <CardTitle
                className="card-title"
                tag="h5"
                style={{ color: "var(--primary-color)" }}
              >
                Cat Tinder
              </CardTitle>
              <CardSubtitle className="mb-2 text-muted" tag="h6">
                React & Ruby on Rails
              </CardSubtitle>
            </CardBody>
            <img
              alt="Cat Tinder app"
              src="https://res.cloudinary.com/dl11m63ow/image/upload/w_1000,ar_1:1,c_fill,g_auto,e_art:hokusai/v1704253883/cat-tinder_y6jvgi.png"
              width="100%"
            />
            <CardBody>
              <CardText>
                Collaborative project I contributed to building a full-stack
                application.
              </CardText>
              {/* <CardLink href=""><Button color="warning" style={{border:"none"}}>View App</Button></CardLink> */}
              <CardLink
                href="https://github.com/patsysaurer/cat-tinder-backend"
                target="blank"
              >
                <Button
                  style={{
                    backgroundColor: "var(--secondary-color)",
                    border: "var(--secondary-color)",
                    color: "var(--primary-dark)",
                  }}
                >
                  View Code
                </Button>
              </CardLink>
            </CardBody>
          </Card>
        </div>
      </Container>
    </>
  );
};

export default Projects;
