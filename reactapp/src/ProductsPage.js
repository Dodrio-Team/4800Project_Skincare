import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css';
import { useLocation } from 'react-router-dom';

function ProductsPage() {
  const location = useLocation();
  const searchResults = location.state?.searchResults || [];
  const [skinType, setSkinType] = useState('all');
  const [products, setProducts] = useState([]);

  // useEffect(() => {
  //   const fetchData = async () => {
  //     const response = await axios.get(`/api/products/?skin_type=${skinType}`);
  //     setProducts(response.data);
  //   };
  //       fetchData();
  //   }, [skinType]);

  return (
    <div style={{ backgroundColor: 'blanchedalmond'}}>
      <h1>Skincare Products</h1> 
      <div>
            <label>Select Skin Type: </label>
            <select onChange={(e) => setSkinType(e.target.value)}>
                <option value="normal">Normal</option>
                <option value="oily">Oily</option>
                <option value="dry">Dry</option>
                <option value="combination">Combination</option>
            </select>

      </div>
      <div className="product-container">
        {searchResults.map((result) => (
          <div key={result.id} className="product-item">
            <div className="product-info">
              <h3>{result.name}</h3>
              <p>${Number(result.price).toFixed(0)}</p>
            </div>
            <div className="ingredients-info">
              <p>{result.ingredients}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ProductsPage;

