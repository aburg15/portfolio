import React from "react";
import RTimg from '../src/assets/rt.png'
import './Projects.css'

const Projects = ( {theme} ) => {
  return (
    <div className="projects">
      <h1 className="projects-header">PROJECTS</h1>
        <div className="project-one">
          <img className={theme === 'light' ? 'project-img' : 'project-img-dark'} alt="RT project" src={RTimg}/>
          <div className="project-one-text">
            <h2>RANCID TOMATILLOS </h2>
            <div className="project-links">
              <a href="https://jkiernan12.github.io/rancid-tomatillo" className={theme === 'light' ? 'live-site' : 'live-site-dark'} target="_blank" rel="noreferrer">LIVE SITE</a>
              <p className="dividor">|</p>
              <a href="https://github.com/aburg15/rancid-tomatillo" className={theme === 'light' ? 'live-site' : 'live-site-dark'} target="_blank" rel="noreferrer"> GITHUB</a>
            </div>
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