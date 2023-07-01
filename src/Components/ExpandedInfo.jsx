import React, { useState } from 'react';
import { BiPointer } from 'react-icons/bi';
import { FaAngleRight, FaTimes } from 'react-icons/fa';

function ExpandedInfo() {
  const [isOpen, setIsOpen] = useState(true);

  const handleClose = () => {
    setIsOpen(false);
  };

  if (!isOpen) {
    return null; // Render nothing if the div is closed
  }

  return (
    <div className="hover-info-container-x">
      <div className="country-info-x">
        <h2 className="country-name-x" style={{ color: 'cyan', display: "flex", justifyContent: "space-between" }}>
          Country Name
          <span className="close-icon" onClick={handleClose}>
            <FaTimes color="white" size={16} className='cross-icon' />
          </span>
        </h2>
        <span style={{ color: 'white' }}>Location of country</span>
        <div className="info-content-x">
          <div style={{ color: 'white' }}>
            <h3 style={{ color: 'cyan' }}>Heading 1</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            <h3 style={{ color: 'cyan' }}>Heading 2</h3>
            <ul>
              <li>Point 1</li>
              <li>Point 2</li>
              <li>Point 3</li>
            </ul>
            <h3 style={{ color: 'cyan' }}>Heading 3</h3>
            <p>Curabitur nec est at mi pulvinar laoreet.</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ExpandedInfo;
