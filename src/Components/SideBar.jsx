import React from 'react';
import "./Sidebar.css";
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
                <span>RISK TYPES</span>
                <FaSortUp color='white' style={{paddingTop:"8px"}} />
            </div>
            <div style={{display: "flex",padding: "5px"}}>
                   <div className='white-rec' ></div>
                     <span style={{padding: "0 10px"}}>PHYSICAL HARM</span> 
            </div>
            <div style={{display: "flex",padding: "0 5px"}}>
                   <div className='white-rec'></div>
                     <span style={{padding: "0 10px"}}>PHYSICAL HARM</span> 
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
                <span>RISK SCORE</span>
                <FaSortUp color='white' style={{paddingTop:"8px"}} />
            </div>
            <div style={{display: "flex",padding: "5px"}}>
                   <div className='white-rec' style={{background: "lime"}} ></div>
                     <span style={{padding: "0 10px"}}>PHYSICAL HARM</span> 
            </div>
            <div style={{display: "flex",padding: "0 5px"}}>
                   <div className='white-rec' style={{borderRadius: "10px"}} ></div>
                     <span style={{padding: "0 10px"}}>PHYSICAL HARM</span> 
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
                <span>TIME PERIOD</span>
                <FaSortUp color='white' style={{paddingTop:"8px"}} />
            </div>
            <div style={{display: "flex",padding: "5px"}}>
                   <div className='white-rec'></div>
                     <span style={{padding: "0 10px"}}>PHYSICAL HARM</span> 
            </div>
            <div style={{display: "flex",padding: "0 5px"}}>
                   <div className='white-rec'></div>
                     <span style={{padding: "0 10px"}}>PHYSICAL HARM</span> 
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
                <span>FILTERS</span>
                <FaSortUp color='white' style={{paddingTop:"8px"}} />
            </div>
            <div style={{display: "flex",padding: "5px"}}>
                   <div className='white-rec'></div>
                     <span style={{padding: "0 10px"}}>PHYSICAL HARM</span> 
            </div>
            <div style={{display: "flex",padding: "0 5px"}}>
                   <div className='white-rec'></div>
                     <span style={{padding: "0 10px"}}>PHYSICAL HARM</span> 
            </div>
            <div style={{display: "flex",padding: "5px"}}>
                   <div className='white-rec'></div>
                     <span style={{padding: "0 10px"}}>PHYSICAL HARM</span> 
            </div>
            <div style={{display: "flex",padding: "0 5px"}}>
                   <div className='white-rec'></div>
                     <span style={{padding: "0 10px"}}>PHYSICAL HARM</span> 
            </div>
            <div style={{display: "flex",padding: "5px"}}>
                   <div className='white-rec' ></div>
                     <span style={{padding: "0 10px"}}>PHYSICAL HARM</span> 
            </div>
            <div style={{display: "flex",padding: "0 5px"}}>
                   <div className='white-rec'></div>
                     <span style={{padding: "0 10px"}}>PHYSICAL HARM</span> 
            </div>
            <div style={{display: "flex",padding: "5px"}}>
                   <div className='white-rec'></div>
                     <span style={{padding: "0 10px"}}>PHYSICAL HARM</span> 
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
                <span>SHORTCUTS</span>
                <FaSortUp color='white' style={{paddingTop:"8px"}} />
            </div>
            <div style={{display: "flex",padding: "5px"}}>
                   <div className='right-angle' >
                          <FaAngleRight color='cyan'/>
                   </div>
                     <span style={{padding: "0 10px"}}>PHYSICAL HARM</span> 
            </div>
            <div style={{display: "flex",padding: "0 5px"}}>
            <div className='right-angle' >
                          <FaAngleRight color='cyan' />
                   </div>
                     <span style={{padding: "0 10px"}}>PHYSICAL HARM</span> 
            </div>
            <div style={{display: "flex",padding: "5px"}}>
                   <div className='right-angle' >
                          <FaAngleRight color='cyan' />
                   </div>
                     <span style={{padding: "0 10px"}}>PHYSICAL HARM</span> 
            </div>
            <div style={{display: "flex",padding: "0 5px"}}>
            <div className='right-angle' >
                          <FaAngleRight color='cyan' />
                   </div>
                     <span style={{padding: "0 10px"}}>PHYSICAL HARM</span> 
            </div>
            <div style={{display: "flex",padding: "5px"}}>
                   <div className='right-angle' >
                          <FaAngleRight color='cyan' />
                   </div>
                     <span style={{padding: "0 10px"}}>PHYSICAL HARM</span> 
            </div>
        </div>

         {/*Display*/}
         <div style={{ paddingBottom: "10px"}}>
            <div style={{
                backgroundColor: '#043744',
                color: '#248aa3',
                padding: "0 8px",
                
            }} >
                <span>DISPLAY</span>
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
