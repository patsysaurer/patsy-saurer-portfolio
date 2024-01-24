import React from "react";
import Card from "./Card";

const Projects = (props) => {
  return (
    <>
    <div>
      <h2 className="projects">Projects</h2>
      <div className="card-container" id="projects">
        <Card
          title="Cake Memory"
          text="Match the cakes!"
          img="https://res.cloudinary.com/dl11m63ow/image/upload/c_thumb,w_200,g_face/v1704243310/cake-match_itnako.png"
          alt="cake match app"
          link="https://cake-memory.onrender.com/"
          link_name="Play Me"
        />

        <Card
          title="Tic Tac Toe"
          text="Classic Game!"
          img="https://res.cloudinary.com/dl11m63ow/image/upload/c_thumb,w_200,g_face/v1704253602/tic-tac-toe_akmysc.png"
          alt="tic tac toe"
          link="https://tic-tac-toe-9qfh.onrender.com/"
          link_name="Play Me"
        />

        <Card
          title="Cat Tinder"
          text="Meet the Cats!"
          img="https://res.cloudinary.com/dl11m63ow/image/upload/c_thumb,w_200,g_face/v1704253883/cat-tinder_y6jvgi.png"
          alt="Cat Tinder App"
          link="https://github.com/patsysaurer/cat-tinder-backend"
          link_name="Visit Repo"
        />
      </div>
      </div>
    </>
  );
};

export default Projects;
