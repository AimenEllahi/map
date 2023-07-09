import React from 'react';
import './styles/index.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

function SearchBar() {
  return (
    <div className="top-bar">
       <div className="logo-container1">
          <img className="logo1" src="/logo1.png" alt="Logo" />
          <img className="logo1" src="/logo2.png" alt="Logo" />
        </div>
      <div className="search-bar">
        <input className='input-field' type="text" placeholder="Search Anything..." />
        <button className='search-btn'>
        <FontAwesomeIcon color='white' icon={faSearch} />
        </button>
      </div>
      <div className="logo-container">
          <img className="logo" src="/logo3.png" alt="Logo" />
        </div>
    </div>
  );
}

export default SearchBar;
