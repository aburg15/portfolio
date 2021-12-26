import React from "react";
import RTimg from '../src/assets/rt.png'
import TTimg from '../src/assets/tt.png'
import FLimg from '../src/assets/FL.png'
import './Projects.css'

const Projects = ( {theme} ) => {
  return (
    <div className="projects">
      <h1 className="projects-header">PROJECTS</h1>
        <div className="project-one">
          <img className={theme === 'light' ? 'project-img' : 'project-img-dark'} alt="RT project" src={RTimg}/>
          <section className="project-one-text">
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
              <br/>
              <br/>
              <strong>Tech:</strong> React, JavaScript, Cypress, CSS, HTML5, RESTful API
            </p>
          </section>
        </div>
        <div className="project-one">
          <img className={theme === 'light' ? 'project-img' : 'project-img-dark'} alt="TT project" src={TTimg}/>
          <section className="project-one-text">
            <h2>TRAVEL TRACKER</h2>
            <div className="project-links">
              <a href="https://jkiernan12.github.io/rancid-tomatillo" className={theme === 'light' ? 'live-site' : 'live-site-dark'} target="_blank" rel="noreferrer">LIVE SITE</a>
              <p className="dividor">|</p>
              <a href="https://github.com/aburg15/travel-tracker" className={theme === 'light' ? 'live-site' : 'live-site-dark'} target="_blank" rel="noreferrer"> GITHUB</a>
            </div>
            <p>Travel Tracker! is an application that allows users to view their trips. Upon logging in to the webpage, a user will be able to view their prior trips and future trips. Trips can be filtered down to pending trips and approved trips if they choose to do so. In addition to viewing existing trip information, a user has the option to post a new trip or receive a price quote based on the trip information entered by the user.
              <br/>
              <br/>
              <strong>Tech:</strong> JavaScript, CSS, HTML5, RESTful API
            </p>
          </section>
        </div>
        <div className="project-one">
          <img className={theme === 'light' ? 'project-img' : 'project-img-dark'} alt="TT project" src={FLimg}/>
          <section className="project-one-text">
            <h2>FIT-LIT</h2>
            <div className="project-links">
              <a href="https://jkiernan12.github.io/rancid-tomatillo" className={theme === 'light' ? 'live-site' : 'live-site-dark'} target="_blank" rel="noreferrer">LIVE SITE</a>
              <p className="dividor">|</p>
              <a href="https://github.com/aburg15/fitlit-starter-kit" className={theme === 'light' ? 'live-site' : 'live-site-dark'} target="_blank" rel="noreferrer"> GITHUB</a>
            </div>
            <p>FitLit is an application that shows a user's steps, hydration, and sleep data. The data is displayed using charts which show the user's data compared to the overall community.
              <br/>
              <br/>
              <strong>Tech:</strong> JavaScript, SASS, HTML5, Mocha/Chai, Fetch API
            </p>
          </section>
        </div>
    </div>
  )
}

export default Projects;