import './App.css';
import { Routes, Route } from 'react-router-dom'
import Header from './Header'
import React from 'react'
import Home from './Home'
import About from './About'

function App() {
  return (
    <main>
      <Header />
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/about" element={<About />}/>
      </Routes>
    </main>

  );
}

export default App;
