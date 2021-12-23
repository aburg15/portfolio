import './App.css';
import { Routes, Route } from 'react-router-dom'
import Header from './Header'
import React, { useState } from 'react'
import styled, { ThemeProvider } from "styled-components"
import { lightTheme, darkTheme, GlobalStyles } from './themes';
import Home from './Home'
import About from './About'
import Contact from './Contact'
import Projects from './Projects'

export const StyledApp = styled.div`
  color: ${(props) => props.theme.fontColor}
`;

function App() {
  const [theme, setTheme] = useState("light");

  const themeToggler = () => {
    theme === "light" ? setTheme("dark") : setTheme("light")
  }

  return (
    <ThemeProvider theme={theme === "light" ? lightTheme : darkTheme}>
      <GlobalStyles />
      <main>
        <StyledApp>
          <Header theme={theme}/>
          <Routes>
            <Route path="/" element={<Home theme={theme} themeToggler={themeToggler}/>}/>
            <Route path="/about" element={<About />}/>
            <Route path="/contact" element={<Contact />}/>
            <Route path="/projects" element={<Projects theme={theme} />}/>
          </Routes>
        </StyledApp>
      </main>
    </ThemeProvider>
  );
}

export default App;
