import React, { useState } from 'react';
import { FaTimes } from 'react-icons/fa';

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
        <div style={{display: "flex", justifyContent: "space-between" }}>
        <h2 className="country-name-x" style={{ color: 'cyan'}}>
          NEW YORK CITY
          </h2>
            <FaTimes style={{padding: "15"}} onClick={handleClose} color="white" size={16} className='cross-icon' />
         
        </div>
        <div className="info-content-x" >
          <div style={{ color: 'white', textAlign: 'left', display: "flex" }}>
            <div>
            <span style={{ color: 'white' }}>NEW YORK, USA</span>
            <h3 style={{ color: 'cyan' }}>TERRORISM</h3>
            <p>
              LOCATION<br />
              JOHN F KENNEDY INTL AIRPORT<br />
              QUEENS, NY 11430<br />
              UNITED STATES OF AMERICA
            </p>
            <p>
              FROM&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;10 AUG 2023 – 10:00<br />
              CREDIBILITY&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;VERY HIGH<br />
              TILL&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;12 AUG 2023 – 23:59<br />
              IMPACT&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;EXTREME
            </p>
            <h3 style={{ color: 'cyan' }}>THREAT DESCRIPTION</h3>
            <p>
              Multiple sources describe a credible threat of violent
              and lethal attacks by an Islamic State sympathizing hate
              group called American Jihad (AJ). AJ made several threats
              on social media against airlines and specifically JFK Airport 
              Terminal 4. Verified by other sources.
            </p>
            <h3 style={{ color: 'cyan' }}>POTENTIAL TARGETS</h3>
            <ul>
              <li>Airlines, aircraft, and their staff</li>
              <li>Corporate aircraft and their staff</li>
              <li>Individual travelers</li>
            </ul>
            <h3 style={{ color: 'cyan' }}>SOURCES</h3>
            <p>
              • Social (multiple)<br />
              • HUMINT
            </p>
            <h3 style={{ color: 'cyan' }}>RISK SCORE HISTORY</h3>
           
            </div>
            <div>
            <h3 style={{ color: 'white', backgroundColor: "#075e74", padding: "5px" }}>PREDICTION</h3>
            <div style={{display: "flex", justifyContent: "space-between"}}>
              <div style={{width: "24px", height: "24px", backgroundColor: "#075e74", borderRadius: "8px"}}>
                <img src="/Visuals/slice16@10x.png" alt="" style={{width: "100%"}} />
              </div>
              <div style={{width: "24px", height: "24px", backgroundColor: "#075e74", borderRadius: "8px"}}>
                <img src="/Visuals/slice14@10x.png" alt="" style={{width: "100%"}} />
              </div>
              <div style={{width: "24px", height: "24px", backgroundColor: "#075e74", borderRadius: "8px"}}>
                <img src="/Visuals/slice17@10x.png" alt="" style={{width: "100%"}} />
              </div>
            </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ExpandedInfo;
