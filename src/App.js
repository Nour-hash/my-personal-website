import React, { useRef } from 'react';
import './App.css';
import Header from './components/Header';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Footer from './components/Footer';
import IntroBanner from './components/IntroBanner';
import Experience from './components/Experience';
import Contact from './components/Contact';
import Canvas from './components/Canvas';

function App() {
  const headerRef = useRef(null);

  const scrollToHeader = () => {
    if (headerRef.current) {
      headerRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="App">

      <section id="header" ref={headerRef}>
      <Header />
      </section>
      
      <Canvas/>
      <section id="about">
        <IntroBanner />
      </section>
      <section id="experience">
        <Experience />
      </section>
      <section id="projects">
        <Projects />
      </section>
      <section id="skills">
        <Skills />
      </section>
     
     
      <button id="scrollButton" title="Go to about" onClick={scrollToHeader}>
        &#9650;
      </button>

      <Footer />
    </div>
  );
}

export default App;
