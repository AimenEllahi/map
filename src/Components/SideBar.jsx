import React from 'react';
import "./styles/Sidebar.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
//up arrow
import { faArrowUp } from '@fortawesome/free-solid-svg-icons';
import {FaSortUp} from 'react-icons/fa';
import {FaAngleRight} from 'react-icons/fa';
import {BiMapPin} from 'react-icons/bi';
import {FaMapSigns } from 'react-icons/fa';
import {BsFlagFill} from 'react-icons/bs';
import {BiSolidPlaneAlt} from 'react-icons/bi';

function Sidebar() {
    
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
                <FaSortUp color='white' style={{paddingTop:"8px"}} />
            </div>
            <div  style={{display: "flex",padding: "5px"}}>
                   <div className='white-rec' ></div>
                     <span className='subheading-name' >PHYSICAL HARM</span> 
            </div>
            <div style={{display: "flex",padding: "0 5px"}}>
                   <div className='white-rec'></div>
                     <span className='subheading-name'>ORGANIZATIONAL HARM</span> 
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
                <FaSortUp color='white' style={{paddingTop:"8px"}} />
            </div>
            <div style={{display: "flex",padding: "5px"}}>
                   <div className='white-rec' style={{background: "lime", borderColor: "lime"}} ></div>
                     <span className='subheading-name'>4.0 MINIMUM</span> 
                     <div style={{ display: "flex", alignItems: "center", marginLeft: "auto" }}>
                      <button style={{ border: "2px solid cyan", background: "transparent", color: "white", padding: "2px 14px", marginRight: "4px", borderRadius: "10px" }}>+</button>
                      <button style={{ border: "2px solid cyan", background: "transparent", color: "white", padding: "2px 14px", borderRadius: "10px" }}>-</button>
                    </div>
            </div>
            <div style={{display: "flex",padding: "0 5px", justifyContent:"space-between" }}>
                   <div className='white-rec' style={{borderRadius: "10px"}} ></div>
                     <span className='subheading-name'>COLOR</span>
                     <span>|</span>
                     <span className='subheading-name'>ABSOLUTE</span> 
                     <div className='white-rec' style={{borderRadius: "10px"}} ></div>
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
                <FaSortUp color='white' style={{paddingTop:"8px"}} />
            </div>
            <div style={{display: "flex",padding: "5px"}}>
                   <div className='white-rec'></div>
                     <span className='subheading-name'>LAST 2 DAYS</span> 
                     <div style={{ display: "flex", alignItems: "center", marginLeft: "auto" }}>
                      <button style={{ border: "2px solid cyan", background: "transparent", color: "white", padding: "2px 14px", marginRight: "4px", borderRadius: "10px" }}>+</button>
                      <button style={{ border: "2px solid cyan", background: "transparent", color: "white", padding: "2px 14px", borderRadius: "10px" }}>-</button>
                    </div>
            </div>
            <div style={{display: "flex",padding: "0 5px"}}>
                   <div className='white-rec'></div>
                     <span className='subheading-name'>PREDICTIVE</span> 
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
                <FaSortUp color='white' style={{paddingTop:"8px"}} />
            </div>
            <div style={{display: "flex",padding: "5px"}}>
                   <div className='white-rec'></div>
                     <span className='subheading-name'>TERRORISM</span> 
            </div>
            <div style={{display: "flex",padding: "0 5px"}}>
                   <div className='white-rec'></div>
                   <span className='subheading-name'>CIVIL UNREST</span> 
            </div>
            <div style={{display: "flex",padding: "5px"}}>
                   <div className='white-rec'></div>
                     <span className='subheading-name'>WAR + CONFLICT</span> 
            </div>
            <div style={{display: "flex",padding: "0 5px"}}>
                   <div className='white-rec'></div>
                     <span className='subheading-name'>CRIME</span> 
            </div>
            <div style={{display: "flex",padding: "5px"}}>
                   <div className='white-rec' ></div>
                     <span className='subheading-name'>KIDNAPPING</span> 
            </div>
            <div style={{display: "flex",padding: "0 5px"}}>
                   <div className='white-rec'></div>
                     <span className='subheading-name'>ASSAULT</span> 
            </div>
            <div style={{display: "flex",padding: "5px"}}>
                   <div className='white-rec'></div>
                     <span className='subheading-name'>PHYSICAL HARM</span> 
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
                <FaSortUp color='white' style={{paddingTop:"8px"}} />
            </div>
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

         {/*Display*/}
         <div style={{ paddingBottom: "10px"}}>
            <div style={{
                backgroundColor: '#043744',
                color: '#248aa3',
                padding: "0 8px",
                
            }} >
                <span  className='heading-name'>DISPLAY</span>
                <div style={{
                    width: "80%",
                    display: "flex",
                    margin: "0 auto",
                    justifyContent: "space-around",
                    padding: "10px 0"
                }}>
                <BiMapPin size={30} color= "cyan" />
                <BsFlagFill size={30} color= "cyan" />
                <FaMapSigns size={30} color= "cyan" />
                <BiSolidPlaneAlt size={30} color= "cyan" />
                </div>
            </div>
        </div>

      </div>
    </div>
  );
}

export default Sidebar;
