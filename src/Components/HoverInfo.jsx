import React, { useState } from 'react';
import { FaAngleRight, FaTimes } from 'react-icons/fa';
import './styles//HoverInfo.css';
import ExpandedInfo from './ExpandedInfo';

function HoverInfo() {
  const [expanded, setExpanded] = useState(false);

  const handleExpand = () => {
    setExpanded(!expanded); // Toggle the value of 'expanded'
  };

  const handleCrossClick = () => {
    setExpanded(false); // Set 'expanded' to false when the cross icon is clicked
  };
  
  const info = "some info about the country threats";

  return (
    <div style={{
      position: 'relative',
      zIndex: 10,
    }}
    >
      {!expanded && (
        <div className="hover-info-container">
          <div className="cross-icon" onClick={handleCrossClick}>
            <FaTimes color="white" size={16} />
          </div>
          <div className="country-info">
            <div style={{ display: "flex", justifyContent: "space-between", width: "100%" }}>
              <span className="country-name" style={{ color: 'white' }}> NEW YORK CITY</span>
              
              <div style={{ position: "relative", width: "30px", height: "30px" }}>
                <img style={{ width: "100%" }} src="/Visuals/slice100@10x.png" alt="" className='expanded-icon-img' />
                <span style={{ position: "absolute", top: "50%", left: "50%", transform: "translate(-50%, -50%)", color: "white", fontWeight: "500" }}>9.7</span>
              </div>
            </div>
            <span className="country-name" style={{ color: '#0B6E85', textAlign: "left"}}>NY, USA</span>
            <div className="info-content" style={{ textAlign: "left", color: 'white' }}>
              <FaAngleRight color="#0B6E85" size={16} style={{ padding: "10px 0" }} />
              <div style={{fontWeight:"500", marginTop: "10px"}}>
                <span>TERRORIST THREAT</span>
                <br/>
                <span>JFK AIRPORT</span>
                <br/>
                <span> 10 AUGUST</span>
              </div>
            </div>
            <div className="expand-div" onClick={handleExpand}>
              <span style={{ color: 'white', fontSize: "24px" }}>Expand</span>
              <FaAngleRight color="#0B6E85" size={20} style={{ padding: "5px 0" }} />
            </div>
          </div>
        </div>
      )}
      {expanded && <ExpandedInfo />}
    </div>
  );
}

export default HoverInfo;
