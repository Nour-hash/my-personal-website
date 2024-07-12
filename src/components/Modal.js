import React from 'react';
import './Modal.css'; // Add a separate CSS file for styling the modal

const Modal = ({ imageUrl, onClose }) => {
  return (
    <div className="modal">
      <div className="modal-content">
        <span className="close-button" onClick={onClose}>&times;</span>
        <img src={imageUrl} alt="Expanded View" className="modal-image" />
      </div>
    </div>
  );
};

export default Modal;
