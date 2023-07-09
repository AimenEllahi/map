import React, { useState } from 'react';
import { FaTimes } from 'react-icons/fa';
import './ExpandedInfo.css';

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
        <h2 className="country-name-x" style={{ color: 'white'}}>
          NEW YORK CITY
          </h2>
          <div className="cross-icon-expanded" onClick={handleClose}>
            <FaTimes color="white" size={16} />
          </div>
        </div>
        <div className="info-content-x" >
          <div style={{ color: 'white', textAlign: 'left', display: "flex" }}>
            <div>
            <span className='expanded-heading' >NEW YORK, USA</span>
            <br/>
            <br/>
            <span className='expanded-heading' style={{color: "red"}}>TERRORISM</span>
            <br/>
            
            <p className='expanded-content'>
            <span className='expanded-heading'>LOCATION</span>
              <br />
              JOHN F KENNEDY INTL AIRPORT<br />
              QUEENS, NY 11430<br />
              UNITED STATES OF AMERICA
            </p>
            <div className='expanded-content'>
               <table className='expanded-table'>
               <tbody>
               <tr>
              <td>
              <span className='expanded-heading'>FROM</span>
              <span style={{ marginLeft: "10px", color: "white", fontWeight: "500" }}>10 AUG 2023 – 10:00</span>
              </td>
              <td>
              <span className='expanded-heading'>CREDIBILITY</span>
              <span style={{ marginLeft: "10px", color: "white", fontWeight: "500" }}>VERY HIGH</span>
              </td>
              </tr>
              <tr>
              <td>
              <span className='expanded-heading'>TILL</span>
              <span style={{ marginLeft: "10px", color: "white", fontWeight: "500" }}>10 AUG 2023 – 10:00</span>
              </td>
              <td>
              <span className='expanded-heading'>IMPACT</span>
              <span style={{ marginLeft: "10px", color: "white", fontWeight: "500" }}>EXTREME</span>
              </td>
              </tr>
                </tbody>
                </table>
            </div>

           
            <span className='expanded-heading'>THREAT DESCRIPTION</span>
            <p className='expanded-content'>
              Multiple sources describe a credible threat of violent
              and lethal attacks by an Islamic State sympathizing hate
              group called American Jihad (AJ). AJ made several threats
              on social media against airlines and specifically JFK Airport 
              Terminal 4. Verified by other sources.
            </p>
            <span className='expanded-heading'>POTENTIAL TARGETS</span>
            <p className='expanded-content'>
              • Airlines, aircrafts and their staff<br />
              • JFK Airport Terminal 4<br />
              • Passengers<br />
            </p>
            <span className='expanded-heading'>SOURCES</span>
            <p className='expanded-content'>
              • Social (multiple)<br />
              • HUMINT
            </p>
           
           
            </div>
            <div>
            <div style={{ display: "flex", justifyContent: "space-between", width: "100px" }}>
            <span className='expanded-heading'>RISK SCORE</span>
            <div style={{ position: "relative", width: "30px", height: "30px" }}>
            <img style={{ width: "100%" }} src="/Visuals/slice100@10x.png" alt="" className='expanded-icon-img' />
            <span style={{ position: "absolute", top: "50%", left: "50%", transform: "translate(-50%, -50%)", color: "white", fontWeight: "500" }}>9.7</span>
            </div>
            </div>
            <h3 className='expanded-icon-heading' >PREDICTION</h3>
            <div style={{display: "flex", justifyContent: "space-between"}}>
              <div className='expanded-icon' >
                <img src="/Visuals/slice16@10x.png" alt="" className='expanded-icon-img'/>
              </div>
              <div className='expanded-icon' >
                <img src="/Visuals/slice14@10x.png" alt="" className='expanded-icon-img'/>
              </div>
              <div className='expanded-icon' >
                <img src="/Visuals/slice17@10x.png" alt="" className='expanded-icon-img'/>
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
