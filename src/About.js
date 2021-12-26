import React from 'react'
import './About.css'

const About = () => {
  return (
    <div className="about-me">
      <h1 className="about-me-header">ABOUT ME</h1>
      <p className="about-me-text">I am a front end software developer and former CPA with six years of experience in public accounting. I recently decided to switch careers and pursue my passion for software development.  
        <br/>
        <br/>
        As a front end developer, I thoroughly enjoy creating applications that are accessible, user-friendly and provide for an overall positive user experience. What excites me the most about software development is the unlimited possibilities. Nearly all of our daily tasks involve some sort of interaction with code. Being able to be a part of that user interaction now and in the future is very inspiring to me.
        <br/>
        <br/>
        Below is a list of skills I bring to a team:
        <br/>
        <br/>
        <strong>Frontend:</strong> React | JavaScript | Sass | CSS | HTML<br/>
        <strong>Backend:</strong> REST APIs<br/>
        <strong>Testing:</strong> Cypress | Mocha | Chai<br/>
        <strong>Other:</strong> Git | GitHub | Functional/OOP | Accessibility
      </p>
    </div>

  )
}

export default About;