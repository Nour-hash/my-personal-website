import React, { useState } from 'react';
import './Projects.css'; // Add a separate CSS file for styling
import ImageSlider from "./ImageSlider";
import { FaGithub } from 'react-icons/fa';
import Modal from "./Modal"; // Import the Modal component

function Projects() {
  const project1 = [
    { url: "https://via.placeholder.com/600x400/ff7f7f/333333?text=Image+1", title: "Image 1" },
    { url: "https://via.placeholder.com/600x400/77dd77/333333?text=Image+2", title: "Image 2" },
    { url: "https://via.placeholder.com/600x400/779ecb/333333?text=Image+3", title: "Image 3" },
    { url: "https://via.placeholder.com/600x400/fdfd96/333333?text=Image+5", title: "Image 4" },
    { url: "https://via.placeholder.com/600x400/ffb347/333333?text=Image+5", title: "Image 5" },
  ];
  const project2 = [
    { url: "https://via.placeholder.com/600x400/ff7f7f/333333?text=Image+1", title: "Image 1" },
    { url: "https://via.placeholder.com/600x400/77dd77/333333?text=Image+2", title: "Image 2" },
    { url: "https://via.placeholder.com/600x400/779ecb/333333?text=Image+3", title: "Image 3" },
    { url: "https://via.placeholder.com/600x400/fdfd96/333333?text=Image+5", title: "Image 4" },
    { url: "https://via.placeholder.com/600x400/ffb347/333333?text=Image+5", title: "Image 5" },
  ];
  const project3 = [
    { url: "https://via.placeholder.com/600x400/ff7f7f/333333?text=Image+1", title: "Image 1" },
    { url: "https://via.placeholder.com/600x400/77dd77/333333?text=Image+2", title: "Image 2" },
    { url: "https://via.placeholder.com/600x400/779ecb/333333?text=Image+3", title: "Image 3" },
    { url: "https://via.placeholder.com/600x400/fdfd96/333333?text=Image+5", title: "Image 4" },
    { url: "https://via.placeholder.com/600x400/ffb347/333333?text=Image+5", title: "Image 5" },
  ];
  const project4 = [
    { url: "https://via.placeholder.com/600x400/ff7f7f/333333?text=Image+1", title: "Image 1" },
    { url: "https://via.placeholder.com/600x400/77dd77/333333?text=Image+2", title: "Image 2" },
    { url: "https://via.placeholder.com/600x400/779ecb/333333?text=Image+3", title: "Image 3" },
    { url: "https://via.placeholder.com/600x400/fdfd96/333333?text=Image+5", title: "Image 4" },
    { url: "https://via.placeholder.com/600x400/ffb347/333333?text=Image+5", title: "Image 5" },
  ];

  const containerStyles = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    gap: '20px',
  };

  const sliderStyles = {
    width: "500px",
    height: "280px",
  };

  const descriptionStyles = {
    maxWidth: "400px",
  };

  const [selectedImage, setSelectedImage] = useState(null);

  const handleImageClick = (url) => {
    setSelectedImage(url);
  };

  const closeModal = () => {
    setSelectedImage(null);
  };

  return (
    <section className="projects-section">
      <h2>Projects</h2>
      <div className="projects-container" style={containerStyles}>
        <div style={sliderStyles}>
          <ImageSlider slides={project1} parentWidth={500} onImageClick={handleImageClick} />
        </div>
        <div className="project-description" style={descriptionStyles}>
          <h3>OSARegistry</h3>
          <p>OSARegistry is a web application to unify patient data management for obstructive sleep apnea in Austria. Doctors can securely store and display data from sleep labs.</p>
          <a href="https://github.com/Nour-hash/OSARegistry" target="_blank" rel="noopener noreferrer" className="github-link">
            <FaGithub className="github-icon" /> View on GitHub
          </a>
        </div>
      </div>
      <div className="projects-container" style={containerStyles}>
        <div className="project-description" style={descriptionStyles}>
          <h3>Project Title</h3>
          <p>This is a description of the project. It provides an overview of what the project is about, its features, and any other relevant information.</p>
          <a href="https://github.com/your-repo-link" target="_blank" rel="noopener noreferrer" className="github-link">
            <FaGithub className="github-icon" /> View on GitHub
          </a>
        </div>
        <div style={sliderStyles}>
          <ImageSlider slides={project2} parentWidth={500} onImageClick={handleImageClick} />
        </div>
      </div>
      <div className="projects-container" style={containerStyles}>
        <div style={sliderStyles}>
          <ImageSlider slides={project3} parentWidth={500} onImageClick={handleImageClick} />
        </div>
        <div className="project-description" style={descriptionStyles}>
          <h3>Project Title</h3>
          <p>This is a description of the project. It provides an overview of what the project is about, its features, and any other relevant information.</p>
          <a href="https://github.com/your-repo-link" target="_blank" rel="noopener noreferrer" className="github-link">
            <FaGithub className="github-icon" /> View on GitHub
          </a>
        </div>
      </div>
      <div className="projects-container" style={containerStyles}>
        <div className="project-description" style={descriptionStyles}>
          <h3>Project Title</h3>
          <p>This is a description of the project. It provides an overview of what the project is about, its features, and any other relevant information.</p>
          <a href="https://github.com/your-repo-link" target="_blank" rel="noopener noreferrer" className="github-link">
            <FaGithub className="github-icon" /> View on GitHub
          </a>
        </div>
        <div style={sliderStyles}>
          <ImageSlider slides={project4} parentWidth={500} onImageClick={handleImageClick} />
        </div>
      </div>
      {selectedImage && (
        <Modal imageUrl={selectedImage} onClose={closeModal} />
      )}
    </section>
  );
}

export default Projects;
