import React from 'react';
import './IntroBanner.css'; // Import the CSS file

function IntroBanner() {
    // Function to handle the download button click
    const handleDownload = () => {
        // Replace 'cv_link.pdf' with the actual link to your CV file
        window.open('cv_link.pdf', '_blank');
    };

    return (
        <div className="banner">
            <img className="round-image" src="Foto_nassar.png" alt="Nour Picture" />
            <div className="text">
                <h2>About Me</h2>
                <p>Your text goes here...</p>
                {/* Download button with the button class */}
                <button className="button" onClick={handleDownload}>Download CV</button>
            </div>
        </div>
    );
};

export default IntroBanner;
