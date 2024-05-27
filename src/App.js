import React from 'react';
import Header from './components/Header';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Footer from './components/Footer';
import './App.css';
import IntroBanner from './components/IntroBanner';
import Experience from './components/Experience';

function App() {
  return (
    <div className="App">
      <Header />
      <IntroBanner />
      <Experience/>
      <section id="projects">
        <Projects />
      </section>
      <section id="skills">
        <Skills />
      </section>
      <section id="footer">
        <Footer />
      </section>
    </div>
  );
}

export default App;
