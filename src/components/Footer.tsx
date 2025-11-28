import React from 'react';
import '../styles/Footer.css';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer-content">
        <p>&copy; {currentYear} Younghun Joo. All rights reserved.</p>
        <div className="social-links">
          <a href="https://github.com/jooyounghun" target="_blank" rel="noopener noreferrer">GitHub</a>
          <a href="https://www.linkedin.com/in/younghun-joo-3b9212166/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
          <a href="https://datacodingschool.tistory.com/" target="_blank" rel="noopener noreferrer">Blog</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
