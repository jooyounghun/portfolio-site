import React, { useState } from 'react';
import '../styles/Navigation.css';

const Navigation: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: 'smooth' });
    setIsOpen(false);
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="navbar-logo">
          <span>Portfolio</span>
        </div>

        <div className={`nav-menu ${isOpen ? 'active' : ''}`}>
          <button className="nav-link" onClick={() => scrollToSection('about')}>
            소개
          </button>
          <button className="nav-link" onClick={() => scrollToSection('projects')}>
            프로젝트
          </button>
          <button className="nav-link" onClick={() => scrollToSection('skills')}>
            기술
          </button>
          <button className="nav-link" onClick={() => scrollToSection('experience')}>
            경력
          </button>
          <button className="nav-link" onClick={() => scrollToSection('contact')}>
            연락처
          </button>
        </div>

        <div className="hamburger" onClick={() => setIsOpen(!isOpen)}>
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
