/** @format */

import React from "react";
import colorProject from "../imgs/colorProject_pic.png";
import searchProject from "../imgs/searchProject_pic.png";
import inProgress from "../imgs/inProgress.jpeg";
import "../styles/components/Projects.css";

export default function Projects() {
  return (
    <div className="projects_container" id="Projects">
      <div className="container_1">
        <img src={colorProject} className="imgs" />
        <div class="centered">Centered</div>
      </div>
      <div className="container_1">
        <img src={searchProject} className="imgs" />
      </div>
      <div className="container_1">
        <img src={inProgress} className="imgs" />
      </div>
      <div className="container_1">
        <img src={inProgress} className="imgs" />
      </div>
      <div className="container_1">
        <img src={inProgress} className="imgs" />
      </div>
      <div className="container_1">
        <img src={inProgress} className="imgs" />
      </div>
    </div>
  );
}