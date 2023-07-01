import React from 'react';
import './index.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

function SearchBar() {
  return (
    <div className="top-bar">
      <div className="search-bar">
        <input className='input-field' type="text" placeholder="Search Anything..." />
        <button className='search-btn'>
        <FontAwesomeIcon color='white' icon={faSearch} />
        </button>
      </div>
    </div>
  );
}

export default SearchBar;
