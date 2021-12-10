import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import headshot from './assets/img.jpg';
import Resume from './assets/resume.pdf';
import './Home.css'

const Home = () => {
  return (
    <section className='home'>
      <img src={headshot} alt='Adam headshot' className='headshot-img'/>
      <div className="about-me">
        <p>HI THERE, I'M</p>
        <h1>ADAM BURGESS</h1>
        <p>A Front-End Developer passionate about creating interactive applications and experiences on the web.</p>
        <div className='icons'>
          <a href={Resume} rel="noreferrer" target="_blank" className="resume-link">Resumé</a>
          <a href="https://github.com/aburg15" className="logo" target="_blank" rel="noreferrer">
            <FaGithub />
          </a>
          <a href="https://www.linkedin.com/in/burgess-adam/" className="logo"  target="_blank" rel="noreferrer">
             <FaLinkedin />
          </a> 
        </div>
      </div>
    </section>


  )
}

export default Home;