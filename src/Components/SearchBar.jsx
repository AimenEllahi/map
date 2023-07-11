import React from 'react';
import './styles/index.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

function SearchBar() {
  return (
    <div className="top-bar">
      <div className='logo-outer-container'>
      <div className="logo-container1">
          <img className="logo1" src="/logo1.png" alt="Logo" />
        </div>
        <div className="logo1-container">
          <img className="logo1" src="/logo2.png" alt="Logo" />
        </div>
      </div>
        
      <div className="search-bar">
        <input className='input-field' type="text" placeholder="Search Anything..." />
        <button className='search-btn'>
        <FontAwesomeIcon color='white' icon={faSearch} className='search-icon' />
        </button>
      </div>
      <div className="logo-container">
          <div className='logout-text-container'>
            <span className='logout-text'>Marc</span>
            <span className='logout-text'>Logout</span>
          </div>
          <div className='logo-logout'>
          <img className="logo" src="/logo3.png" alt="Logo" />
          </div>
         
        </div>
    </div>
  );
}

export default SearchBar;
