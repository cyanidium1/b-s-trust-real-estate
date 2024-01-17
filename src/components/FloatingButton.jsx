import React, { useState } from 'react';
import { FiPhone } from 'react-icons/fi';
import './FloatingButton.css'; // Create a CSS file for styling
import { FaTelegram, FaWhatsapp } from 'react-icons/fa';

const FloatingButton = () => {
  const [isHovered, setIsHovered] = useState(false);

  const toggleHover = () => {
    setIsHovered((prev) => !prev);
  };

  return (
    <div className={`floating-container ${isHovered ? 'hover' : ''} z-20`} onMouseEnter={toggleHover} onMouseLeave={toggleHover}>
      <div className="floating-button flex justify-center items-center">
        <FiPhone />
      </div>
      <div className="element-container">
        <a href="tel:+355693122813" target='_blank' rel="noreferrer" className="float-element tooltip-left flex justify-center items-center">
          <FiPhone size={24} />
        </a>
        <a href="https://www.t.me/real_estate_al" target='_blank' rel="noreferrer" className="float-element tooltip-left flex justify-center items-center">
          <FaTelegram size={24} />
        </a>
        <a href="https://wa.me/qr/XXBDREVA66NMP1" target='_blank' rel="noreferrer" className="float-element tooltip-left flex justify-center items-center">
          <FaWhatsapp size={24} />
        </a>
      </div>
    </div>
  );
};

export default FloatingButton;
