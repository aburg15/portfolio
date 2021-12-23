import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css'

const Navbar = ( {theme} ) => {
  return (
    <section className='navbar'>
        <Link to='/' className={theme === 'light' ? 'navbar-item' : 'navbar-item-dark'}>Home</Link>
        <Link to='/about' className={theme === 'light' ? 'navbar-item' : 'navbar-item-dark'}>About</Link>
        <Link to='/projects' className={theme === 'light' ? 'navbar-item' : 'navbar-item-dark'}>Projects</Link>
        <Link to='/contact' className={theme === 'light' ? 'navbar-item' : 'navbar-item-dark'}>Contact</Link>
    </section>
  )
}

export default Navbar;  
