import './App.css';
import { Routes, Route } from 'react-router-dom'
import Header from './Header'
import React from 'react'
import Home from './Home'
import About from './About'
import Contact from './Contact'
import Projects from './Projects'

function App() {
  return (
    <main>
      <Header />
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/about" element={<About />}/>
        <Route path="/contact" element={<Contact />}/>
        <Route path="/projects" element={<Projects />}/>
      </Routes>
    </main>

  );
}

export default App;
