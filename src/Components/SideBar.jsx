import React, {useState} from 'react';
import "./styles/Sidebar.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
//up arrow
import {FaSortUp} from 'react-icons/fa';
import {FaAngleRight} from 'react-icons/fa';


function Sidebar() {

  const [whiteRecToggled, setWhiteRecToggled] = useState({
    PHYSICAL_HARM: false,
    ORGANIZATIONAL_HARM: false,
    COLOR: false,
    ABSOLUTE: false,
    DAYS: false,
    PREDICTIVE: false,
    TERRORISM: false,
    CIVIL: false,
    WAR: false,
    CRIME: false,
    KIDNAPPING: false,
    ASSAULT: false,
    PHYSICAL: false,
  });

  const [menuVisibility, setMenuVisibility] = useState({
    riskTypes: true,
    riskScore: true,
    timePeriod: true,
    filters: true,
    shortcuts: true,
    display: true
  });

  const toggleMenuVisibility = (menuName) => {
    setMenuVisibility(prevState => ({
      ...prevState,
      [menuName]: !prevState[menuName]
    }));
  };

  return (
    <div className="sidebar">
      <div className='content-container' style={{
        height: '95%',
        width: '90%',
        color: 'white',
        // border: '1px solid black',
      }} >
        {/*Risk Types*/}
        <div style={{ paddingBottom: "10px"}}>
            <div style={{
                backgroundColor: '#043744',
                color: '#248aa3',
                display: "flex",
                padding: "0 8px",
                justifyContent: "space-between",
            }} >
                <span className='heading-name'>RISK TYPES</span>
                <FaSortUp color='white' style={{ paddingTop: "8px", cursor: "pointer" }} onClick={() => toggleMenuVisibility('riskTypes')} />
            </div>
            <div className={`side-menu ${menuVisibility.riskTypes ? '' : 'side-menu-hidden'}`} >
            <div style={{display: "flex",padding: "5px"}}>
            <div
            className={`white-rec ${whiteRecToggled['PHYSICAL_HARM'] ? 'toggled' : ''}`}
            onClick={() =>
            setWhiteRecToggled((prevState) => ({
            ...prevState,
            PHYSICAL_HARM: !prevState['PHYSICAL_HARM'],
            }))
            }
            ></div>
                  <span className='subheading-name' >PHYSICAL HARM</span> 
            </div>
            <div style={{display: "flex",padding: "0 5px"}}>
            <div
            className={`white-rec ${whiteRecToggled['ORGANIZATIONAL_HARM'] ? 'toggled' : ''}`}
            onClick={() =>
            setWhiteRecToggled((prevState) => ({
            ...prevState,
            ORGANIZATIONAL_HARM: !prevState['ORGANIZATIONAL_HARM'],
            }))
            }
            ></div>
                  <span className='subheading-name'>ORGANIZATIONAL HARM</span> 
            </div>
            </div>
        </div>

        {/*Risk Score*/}
        <div style={{ paddingBottom: "10px"}}>
            <div style={{
                backgroundColor: '#043744',
                color: '#248aa3',
                display: "flex",
                padding: "0 8px",
                justifyContent: "space-between",
            }} >
                <span  className='heading-name'>RISK SCORE</span>
                <FaSortUp color='white' style={{ paddingTop: "8px", cursor: "pointer" }} onClick={() => toggleMenuVisibility('riskScore')} />
            </div>
            <div className={`side-menu ${menuVisibility.riskScore ? '' : 'side-menu-hidden'}`}>

            <div style={{display: "flex",padding: "5px"}}>
                   <div className='white-rec' style={{background: "lime", borderColor: "lime"}} ></div>
                     <span className='subheading-name'>4.0 MINIMUM</span> 
                     <div style={{ display: "flex", alignItems: "center", marginLeft: "auto" }}>
                      <button className='sign-btn' style={{ marginRight: "4px"}}>+</button>
                      <button className='sign-btn' >-</button>
                    </div>
            </div>
            <div style={{display: "flex",padding: "0 5px", justifyContent:"space-between" }}>
                     <div
                      className={`white-rec ${whiteRecToggled['COLOR'] ? 'toggled' : ''}`}
                      style={{borderRadius: "10px"}}
                      onClick={() =>
                        setWhiteRecToggled((prevState) => ({
                          ...prevState,
                          COLOR: !prevState['COLOR'],
                        }))
                      }
                      ></div>
                     <span className='subheading-name'>COLOR</span>
                     <span>|</span>
                     <span className='subheading-name'>ABSOLUTE</span> 
                     <div
                      className={`white-rec ${whiteRecToggled['ABSOLUTE'] ? 'toggled' : ''}`}
                      style={{borderRadius: "10px"}}
                      onClick={() =>
                        setWhiteRecToggled((prevState) => ({
                          ...prevState,
                          ABSOLUTE: !prevState['ABSOLUTE'],
                        }))
                      }
                      ></div>
                </div>
            </div>
        </div>
        
        {/*Time Period*/}
        <div style={{ paddingBottom: "10px"}}>
            <div style={{
                backgroundColor: '#043744',
                color: '#248aa3',
                display: "flex",
                padding: "0 8px",
                justifyContent: "space-between",
            }} >
                <span  className='heading-name' >TIME PERIOD</span>
                <FaSortUp color='white' style={{ paddingTop: "8px", cursor: "pointer" }} onClick={() => toggleMenuVisibility('timePeriod')} />
            </div>
            <div className={`side-menu ${menuVisibility.timePeriod ? '' : 'side-menu-hidden'}`}>

            <div style={{display: "flex",padding: "5px"}}>
                      <div
                      className={`white-rec ${whiteRecToggled['DAYS'] ? 'toggled' : ''}`}
                      onClick={() =>
                        setWhiteRecToggled((prevState) => ({
                          ...prevState,
                          DAYS: !prevState['DAYS'],
                      }))
                      }
                      ></div>
                     <span className='subheading-name'>LAST 2 DAYS</span> 
                     <div style={{ display: "flex", alignItems: "center", marginLeft: "auto" }}>
                      <button className='sign-btn' style={{marginRight: "4px"}}>+</button>
                      <button className='sign-btn' >-</button>
                    </div>
            </div>
            <div style={{display: "flex",padding: "0 5px"}}>
                   <div
                      className={`white-rec ${whiteRecToggled['PREDICTIVE'] ? 'toggled' : ''}`}
                      onClick={() =>
                      setWhiteRecToggled((prevState) => ({
                      ...prevState,
                      PREDICTIVE: !prevState['PREDICTIVE'],
                      }))
                      }
                      ></div>
                     <span className='subheading-name'>PREDICTIVE</span> 
            </div>
            </div>
        </div>

         {/*Filters*/}
         <div style={{ paddingBottom: "10px"}}>
            <div style={{
                backgroundColor: '#043744',
                color: '#248aa3',
                display: "flex",
                padding: "0 8px",
                justifyContent: "space-between",
            }} >
                <span  className='heading-name'>FILTERS</span>
                <FaSortUp color='white' style={{ paddingTop: "8px", cursor: "pointer" }} onClick={() => toggleMenuVisibility('filters')} />
            </div>
            <div className={`side-menu ${menuVisibility.filters ? '' : 'side-menu-hidden'}`}>
            <div style={{display: "flex",padding: "5px"}}>
                   <div
                      className={`white-rec ${whiteRecToggled['TERRORISM'] ? 'toggled' : ''}`}
                      onClick={() =>
                      setWhiteRecToggled((prevState) => ({
                      ...prevState,
                      TERRORISM: !prevState['TERRORISM'],
                      }))
                      }
                      ></div>
                     <span className='subheading-name'>TERRORISM</span> 
            </div>
            <div style={{display: "flex",padding: "0 5px"}}>
                   <div
                      className={`white-rec ${whiteRecToggled['CIVIL'] ? 'toggled' : ''}`}
                      onClick={() =>
                      setWhiteRecToggled((prevState) => ({
                      ...prevState,
                      CIVIL: !prevState['CIVIL'],
                      }))
                      }
                      ></div>
                   <span className='subheading-name'>CIVIL UNREST</span> 
            </div>
            <div style={{display: "flex",padding: "5px"}}>
                     <div
                      className={`white-rec ${whiteRecToggled['WAR'] ? 'toggled' : ''}`}
                      onClick={() =>
                        setWhiteRecToggled((prevState) => ({
                          ...prevState,
                          WAR: !prevState['WAR'],
                      }))
                      }
                      ></div>
                     <span className='subheading-name'>WAR + CONFLICT</span> 
            </div>
            <div style={{display: "flex",padding: "0 5px"}}>
                     <div
                      className={`white-rec ${whiteRecToggled['CRIME'] ? 'toggled' : ''}`}
                      onClick={() =>
                      setWhiteRecToggled((prevState) => ({
                      ...prevState,
                      CRIME: !prevState['CRIME'],
                      }))
                      }
                      ></div>
                     <span className='subheading-name'>CRIME</span> 
            </div>
            <div style={{display: "flex",padding: "5px"}}>
                     <div
                      className={`white-rec ${whiteRecToggled['KIDNAPPING'] ? 'toggled' : ''}`}
                      onClick={() =>
                        setWhiteRecToggled((prevState) => ({
                          ...prevState,
                          KIDNAPPING: !prevState['KIDNAPPING'],
                        }))
                      }
                      ></div>
                     <span className='subheading-name'>KIDNAPPING</span> 
            </div>
            <div style={{display: "flex",padding: "0 5px"}}>
                      <div
                      className={`white-rec ${whiteRecToggled['ASSAULT'] ? 'toggled' : ''}`}
                      onClick={() =>
                      setWhiteRecToggled((prevState) => ({
                      ...prevState,
                      ASSAULT: !prevState['ASSAULT'],
                      }))
                    }
                    ></div>
                     <span className='subheading-name'>ASSAULT</span> 
            </div>
            <div style={{display: "flex",padding: "5px"}}>
                      <div
                      className={`white-rec ${whiteRecToggled['PHYSICAL'] ? 'toggled' : ''}`}
                      onClick={() =>
                        setWhiteRecToggled((prevState) => ({
                          ...prevState,
                          PHYSICAL: !prevState['PHYSICAL'],
                      }))
                      }
                      ></div>
                     <span className='subheading-name'>PHYSICAL HARM</span> 
            </div>
            </div>
        </div>

        {/*ShortCuts*/}
        <div style={{ paddingBottom: "10px"}}>
            <div style={{
                backgroundColor: '#043744',
                color: '#248aa3',
                display: "flex",
                padding: "0 8px",
                justifyContent: "space-between",
            }} >
                <span  className='heading-name'>SHORTCUTS</span>
                <FaSortUp color='white' style={{ paddingTop: "8px", cursor: "pointer" }} onClick={() => toggleMenuVisibility('shortcuts')} />
            </div>
            <div className={`side-menu ${menuVisibility.shortcuts ? '' : 'side-menu-hidden'}`}>
            <div style={{display: "flex",padding: "5px"}}>
                   <div className='right-angle' >
                          <FaAngleRight color='cyan'/>
                   </div>
                     <span className='subheading-name'>AMSTERDAM</span> 
            </div>
            <div style={{display: "flex",padding: "0 5px"}}>
            <div className='right-angle' >
                          <FaAngleRight color='cyan' />
                   </div>
                     <span className='subheading-name'>NEWYORK CITY</span> 
            </div>
            <div style={{display: "flex",padding: "5px"}}>
                   <div className='right-angle' >
                          <FaAngleRight color='cyan' />
                   </div>
                     <span className='subheading-name'>ABUDABHI</span> 
            </div>
            <div style={{display: "flex",padding: "0 5px"}}>
            <div className='right-angle' >
                          <FaAngleRight color='cyan' />
                   </div>
                     <span className='subheading-name'>MIAMI</span> 
            </div>
            <div style={{display: "flex",padding: "5px"}}>
                   <div className='right-angle' >
                          <FaAngleRight color='cyan' />
                   </div>
                     <span className='subheading-name'>AUSTRALIA</span> 
            </div>
            </div>
        </div>

         {/*Display*/}
         <div style={{ paddingBottom: "10px" }}>
  <div
    style={{
      backgroundColor: "#043744",
      color: "#248aa3",
      padding: "0 8px",
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
    }}
  >
    <span className="heading-name" style={{ marginLeft: "0px" }}>
      DISPLAY
    </span>
  </div>
  <div
    style={{
      backgroundColor: "#043744",
      display: "flex",
      justifyContent: "space-around",
      padding: "10px 0",
      width: "100%",
    }}
  >
    <div className="display-icon-container">
      <img src="/Visuals/slice54@10x.png" alt="icon" className="display-icon" />
    </div>
    <div className="display-icon-container">
      <img src="/Visuals/slice55@10x.png" alt="icon" className="display-icon" />
    </div>
    <div className="display-icon-container">
      <img src="/Visuals/slice56@10x.png" alt="icon" className="display-icon" />
    </div>
    <div className="display-icon-container">
      <img src="/Visuals/slice57@10x.png" alt="icon" className="display-icon" />
    </div>
  </div>
</div>


      </div>
    </div>
  );
}

export default Sidebar;
