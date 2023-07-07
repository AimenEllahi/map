import React, { useState } from 'react';
import { FaAngleRight } from 'react-icons/fa';
import './HoverInfo.css';
import ExpandedInfo from './ExpandedInfo';

function HoverInfo() {
  const [expanded, setExpanded] = useState(false);

  const handleExpand = () => {
    setExpanded(!expanded); // Toggle the value of 'expanded'
  };

  const countryName = "Country Name";
  const info = "some info about the country threats";

  return (
    <div style={{
      position: 'relative',
      zIndex: 10,
    }}
    >
      {!expanded && (
        <div className="hover-info-container">
          <div className="country-info">
            <h2 className="country-name">{countryName}</h2>
            <span style={{ color: 'white' }}>Location of country</span>
            <div className="info-content" style={{ textAlign: "left", color: 'white' }}>
              <FaAngleRight color="cyan" size={12} style={{ padding: "5px 0" }} />
              <div>{info}</div>
            </div>
            <div className="expand-div" onClick={handleExpand}>
              <h2 style={{ color: 'white' }}>Expand</h2>
              <FaAngleRight color="cyan" size={20} style={{ padding: "5px 0" }} />
            </div>
          </div>
        </div>
      )}
      {expanded && <ExpandedInfo />}
    </div>
  );
}

export default HoverInfo;
