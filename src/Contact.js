import React from 'react';
import './Contact.css'
import { FaGithub, FaLinkedin } from "react-icons/fa";


const Contact = () => {
  return (
    <div className="contact-me">
      <h1 className="contact-me-header">CONTACT ME</h1>
      <p className="contact-me-text">If you have any questions about me or my projects, please feel free to reach out.</p>
        <br/>
        <br/>
      <h4>aburg1515@gmail.com</h4>
      <div className="contact-icons">
        <a href="https://github.com/aburg15" className="logo" target="_blank" rel="noreferrer">
          <FaGithub />
        </a>
        <a href="https://www.linkedin.com/in/burgess-adam/" className="logo"  target="_blank" rel="noreferrer">
          <FaLinkedin />
        </a> 
      </div>
    </div>
  )
}

export default Contact