import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './App.css';

function FrontPage() {
  const [searchQuery, setSearchQuery] = useState('');
  return (
    <div class = "FrontPage">  
        <h1>Flawless You</h1>
        <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Enter product name"
            />
            <Link to={`/skincare-products?search=${searchQuery}`}>
                <button>Search</button>
            </Link>
    </div>
    
  )
}

export default FrontPage