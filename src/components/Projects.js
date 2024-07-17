import React, { useState } from 'react';
import './Projects.css'; // Add a separate CSS file for styling
import ImageSlider from "./ImageSlider";
import { FaGithub } from 'react-icons/fa';
import Modal from "./Modal"; // Import the Modal component
import images from '../utils/imageLoader'; // Import the dynamic images utility

function Projects() {
  const OSA_Reg = [
    { url:  images['OSA_Homepage.png'], title: "Image 1" },
    { url:  images['OSA_Login.png'], title: "Image 2" },
    { url:  images['OSA_Patientlist.png'], title: "Image 3" },
    { url:  images['OSA_Patient_detail.png'], title: "Image 4" },
    { url:  images['OSA_add_detail.png'], title: "Image 4" },
    { url:  images['OSA_User_mgnt.png'], title: "Image 4" },
    { url:  images['OSA_User_permission.png'], title: "Image 4" },
  ];
  const FAABIC = [
    { url: images['FAABIC-home.png'], title: "Image 1" },    
    { url: images['FAABIC-guide.png'], title: "Image 2" },    
    { url: images['FAABIC-search-isbn.png'], title: "Image 3" },    
    { url: images['FAABIC-details.png'], title: "Image 4" },    
    { url: images['FAABIC-search-front.png'], title: "Image 5" },    
    { url: images['FAABIC-search-back.png'], title: "Image 6" },    
    { url: images['FAABIC-AI_Result.png'], title: "Image 7" },    
    { url: images['FAABIC-library.png'], title: "Image 8" },  
    { url: images['FAABIC-login.png'], title: "Image 9" },   
    { url: images['FAABIC-user.png'], title: "Image 10" },   
  ];
  const WhoAmI = [
    { url: images['Who_Am_I_Homepage.png'], title: "Image 1" },    
    { url: images['Who_Am_I_result_with_picture.png'], title: "Image 2" },     
    { url: images['Who_Am_I_login.png'], title: "Image 3" },    
    { url: images['Who_Am_I_search_history.png'], title: "Image 4" },    
    { url: images['Who_Am_I_edit.png'], title: "Image 5" },    
  ];
  const OrganizeIT = [    
    { url: images['Organize_IT_login_desktop.png'], title: "Image 1" },    
    { url: images['Organize_IT_home_desktop.png'], title: "Image 2" },    
    { url: images['Organize_IT_ToDoList_desktop.png'], title: "Image 3" },    
    { url: images['Organize_IT_login_web.png'], title: "Image 4" },    
    { url: images['Organize_IT_home_web.png'], title: "Image 5" },    
    { url: images['Organize_IT_ToDoList_web.png'], title: "Image 6" },    
    { url: images['Organize_IT_login.png'], title: "Image 7" },
    { url: images['Organize_IT_home.png'], title: "Image 8" },
    { url: images['Organize_IT_ToDoList.png'], title: "Image 9" },
    { url: images['Organize_IT_tasks_screen.png'], title: "Image 10" }, 
    { url: images['Organize_IT_create_task.png'], title: "Image 11" },
    { url: images['Organize_IT_notes_Screen.png'], title: "Image 12" },
    { url: images['Organize_IT_create_notes.png'], title: "Image 13" },
    { url: images['Organize_IT_archive_spaces.png'], title: "Image 14" },
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
          <ImageSlider slides={OSA_Reg} parentWidth={500} onImageClick={handleImageClick} />
        </div>
        <div className="project-description" style={descriptionStyles}>
          <h3>OSA Registry</h3>
          <p>OSARegistry is a web application to unify patient data management for obstructive sleep apnea in Austria. Doctors can securely store and display data from sleep labs.</p>
          <a href="https://github.com/Nour-hash/OSARegistry" target="_blank" rel="noopener noreferrer" className="github-link">
            <FaGithub className="github-icon" /> View on GitHub
          </a>
        </div>
      </div>
      <div className="projects-container" style={containerStyles}>
        <div className="project-description" style={descriptionStyles}>
          <h3>FAABIC - Find A Book By It's Cover </h3>
          <p>An innovative mobile app to manage book collections using AI for automatic book cover recognition. It offers a personalized reading experience, integrates APIs for book management, and is designed for private use, educational institutions, and bookstores.</p>
          <a href="https://github.com/Nour-hash/FAABIC-Book-Tracker" target="_blank" rel="noopener noreferrer" className="github-link">
            <FaGithub className="github-icon" /> View on GitHub
          </a>
        </div>
        <div style={sliderStyles}>
          <ImageSlider slides={FAABIC} parentWidth={500} onImageClick={handleImageClick} />
        </div>
      </div>
      <div className="projects-container" style={containerStyles}>
        <div style={sliderStyles}>
          <ImageSlider slides={WhoAmI} parentWidth={500} onImageClick={handleImageClick} />
        </div>
        <div className="project-description" style={descriptionStyles}>
          <h3>Who Am I</h3>
          <p>"Who I Am" is an innovative web application that uses API's to predict age, gender, and nationality based on a first name. It then generates a personalized AI-generated picture reflecting these attributes.</p>
          <a href="https://github.com/Nour-hash/WhoAmI" target="_blank" rel="noopener noreferrer" className="github-link">
            <FaGithub className="github-icon" /> View on GitHub
          </a>
        </div>
      </div>
      <div className="projects-container" style={containerStyles}>
        <div className="project-description" style={descriptionStyles}>
          <h3>Organize-IT</h3>
          <p>A multiplatform software to streamline task management and enhance productivity. "OrganizeIT" provides unified workspaces for individuals, teams, students, and collaborators, ensuring tasks and notes are managed, shared, and synchronized seamlessly.</p>
        </div>
        <div style={sliderStyles}>
          <ImageSlider slides={OrganizeIT} parentWidth={500} onImageClick={handleImageClick} />
        </div>
      </div>
      {selectedImage && (
        <Modal imageUrl={selectedImage} onClose={closeModal} />
      )}
    </section>
  );
}

export default Projects;
