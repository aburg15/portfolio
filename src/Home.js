import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import headshot from './assets/img.jpg';
import Resume from './assets/resume.pdf';
import './Home.css'

const Home = ( {theme, themeToggler} ) => {
  return (
    <div>
      <section className='home'>
        <img src={headshot} alt='Adam headshot' className='headshot-img'/>
        <div className="intro">
          <p>HI THERE, I'M</p>
          <h1>ADAM BURGESS</h1>
          <p>A Front-End Developer passionate about creating interactive applications and experiences on the web.</p>
          <div className='icons'>
            <a href={Resume} rel="noreferrer" target="_blank" className={theme === 'light' ? 'resume-link' : 'resume-link-dark'}>Resumé</a>
            <a href="https://github.com/aburg15" className={theme === 'light' ? 'logo' : 'logo-dark'} target="_blank" rel="noreferrer">
              <FaGithub />
            </a>
            <a href="https://www.linkedin.com/in/burgess-adam/" className={theme === 'light' ? 'logo' : 'logo-dark'} target="_blank" rel="noreferrer">
              <FaLinkedin />
            </a> 
          </div>
        </div>
      </section>
      <div className='toggle'>
          <label className="switch">
            <input type="checkbox" onChange={() => themeToggler()} />
            <span className="slider round"> </span>
          </label>
      </div>
    </div>
  )
}

export default Home;