import React from "react";
import RTimg from '../src/assets/rt.png'
import './Projects.css'

const Projects = () => {
  return (
    <div className="projects">
      <h1 className="projects-header">PROJECTS</h1>
        <div className="project-one">
          <img className="project-img" alt="RT project" src={RTimg}/>
          <div className="project-one-text">
            <h2>RANCID TOMATILLOS </h2>
            <p>Are you tired of all those 【ｍａｉｎｓｔｒｅａｍ】movie databases? Probably not. Regardless, we present Rancid Tomatillos, a UI for exploring movie posters, details and trailers.
              <br/>
              <br/>
              This project uses React, React Router and data pulled from a RESTful API to display a dashboard of movies. Select a movie to learn more about it.
            </p>
          </div>
        </div>
    </div>
  )
}

export default Projects;