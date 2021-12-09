import React from "react";
import headshot from './assets/img.jpg';

import './Home.css'

const Home = () => {
  return (
    <section className='home'>
      <img src={headshot} alt='Adam headshot' className='headshot-img'/>
      <div className="about-me">
        <h1>ADAM BURGESS</h1>
        <p>A Front-End Developer passionate about creating interactive applications and experiences on the web.</p>
      </div>
    </section>


  )
}

export default Home;