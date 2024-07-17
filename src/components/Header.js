import React from 'react';
import './Header.css'; // Add a separate CSS file for styling

function Header() {
  return (
    <header className="header">
      <nav>
        <ul>
          <li><a href="#about">Nour.dev</a></li>
          <li><a href="#experience">Experience</a></li> 
          <li><a href="#projects">Projects</a></li>
          <li><a href="#skills">Skills</a></li>
         
        </ul>
      </nav>
    </header>
  );
}

export default Header;
