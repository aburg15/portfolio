import React from "react";
import Navbar from "./Navbar";
import './Header.css'


const Header = ( {theme} ) => {
  return (
    <section className='header'>
      <Navbar theme={theme}/>
    </section>
  )

}

export default Header

