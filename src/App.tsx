import React from 'react';
import Navigation from './components/Navigation';
import About from './components/About';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Contact from './components/Contact';
import Footer from './components/Footer';
import './App.css';

function App() {
  return (
    <div className="App">
      <Navigation />
      <About />
      <Projects />
      <Skills />
      <Experience />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
