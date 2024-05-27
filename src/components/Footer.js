import React from 'react';
import './Footer.css'; // Add a separate CSS file for styling

function Footer() {
  var year = new Date().getFullYear();
  return (
    <footer className="footer">
      <p>&copy; {year} Nour El Din Nassar</p>
    </footer>
  );
}

export default Footer;
