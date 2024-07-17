import React from 'react';
import './IntroBanner.css'; // Import the CSS file

function IntroBanner() {
    // Function to handle the download button click
    const handleDownload = () => {
        window.open('NourElDin_Nassar_CV_2024.pdf', '_blank');
    };

    return (
        <div className="banner">
            <img className="round-image" src="Foto_nassar.png" alt="Headshot" />
            <div className="text">
                <h2>About Me</h2>
                <p>
                I am a passionate software developer specializing in full-stack development and project management. Currently pursuing a Bachelor's degree in Computer Science and Digital Communications at FH Campus Wien, I focus on AI and Mobile App Development. My practical experience includes leading a Django-based web application project for PR-Data GmbH, where I managed project timelines and delivered high-quality solutions.
                </p>
                <p>
                As a freelancer, I develop dynamic websites and mobile apps using front-end and back-end frameworks like Angular and Node.js. Fluent in German, English, Arabic, and basic Japanese, I am adept at connecting with a global audience. I am committed to continuing my journey in software development, creating innovative solutions that drive progress.
                </p>
               
                {/* Download button with the button class */}
                <button className="button" onClick={handleDownload}>Download CV</button>
            </div>
        </div>
    );
};

export default IntroBanner;
