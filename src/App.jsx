import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, Link, useLocation } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import About from "./components/About";
import './index.css';
import ScrollToTopButton from "./components/Scroll";

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

function App() {
  const [isLightMode, setLightMode] = useState(false);

  useEffect(() => {
    // Save the user's preference in local storage
    localStorage.setItem('lightMode', JSON.stringify(isLightMode));
    // Update the body class based on the selected mode
    document.body.className = isLightMode ? 'light-mode' : 'dark-mode';
  }, [isLightMode]);

  const toggleLightMode = () => {
    setLightMode(!isLightMode);
  };

  // Load user's preference from local storage on initial render
  useEffect(() => {
    const storedLightMode = JSON.parse(localStorage.getItem('lightMode'));
    if (storedLightMode !== null) {
      setLightMode(storedLightMode);
    }
    // Update the body class based on the selected mode
    document.body.className = storedLightMode ? 'light-mode' : 'dark-mode';
  }, []);

  return (
    <>
      <Router>
        <Navbar isLightMode={isLightMode} toggleLightMode={toggleLightMode} />
        <div className="main-container">
          <ScrollToTop />
          <ScrollToTopButton isLightMode={isLightMode}/>
          <Routes>
            <Route path="/" element={<Home isLightMode={isLightMode}/>} />
            <Route path="/Projects" element={<Projects isLightMode={isLightMode}/>} />
            <Route path="/Contact" element={<Contact isLightMode={isLightMode}/>} />
            <Route path="/About" element={<About isLightMode={isLightMode}/>} />
          </Routes>
        </div>
      </Router>
    </>
  );
}

export default App;
