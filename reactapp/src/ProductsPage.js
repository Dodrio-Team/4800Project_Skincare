import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css';
import { Link, useLocation } from 'react-router-dom';

function ProductsPage() {
  const location = useLocation();
  const searchResults = location.state?.searchResults || [];
  const noResults = location.state?.noResults || false;
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
      <Link to="/">
        <button className="back-button">
          Click here to make a new search on the home page! 
        </button>
      </Link>
      <h1>Skincare Products</h1> 
      <div className="filter-type">
            <label>Select Skin Type: </label>
            <select onChange={(e) => setSkinType(e.target.value)}>
                <option value="normal">Normal</option>
                <option value="oily">Oily</option>
                <option value="dry">Dry</option>
                <option value="combination">Combination</option>
            </select>
      </div>
      {noResults ? (
      <p className="noResults">No results found. Please search by label (e.g. Moisturizer, Treatment, etc).</p>
    ) : (
        <div className="product-container" style={{ display: 'flex', justifyContent: 'center' }}>
          {searchResults.map((result, index) => (
            <div key={result.id} className="product-item">
              <h2>{result.brand}</h2>
              <div className="product-info">
                <h3>{result.name}</h3>
                <p>${Number(result.price).toFixed(0)}</p>
              </div>
              <div className="rank-info">
              <p>Rating: {renderRatingStars(result.rank, result.rank)}</p>
              </div>
              <div className="skin-types">
                <p>Skin Type(s):{' '}
                {!result.Normal && !result.Oily && !result.Dry && !result.Combination ? (
                  <span>N/A</span>
                ) : (
                  <>
                    {result.Normal ? <span> Normal{result.Oily || result.Dry || result.Combination ? ', ' : ''} </span> : null}
                    {result.Oily ? <span> Oily{result.Dry || result.Combination ? ', ' : ''} </span> : null}
                    {result.Dry ? <span> Dry{result.Combination ? ', ' : ''}</span> : null}
                    {result.Combination ? <span> Combination </span> : null}
                  </>
                )}</p>
              </div>
              <div className="ingredients-info">
                <p>Ingredients: {result.ingredients}</p>
              </div>
            </div>
          ))}
        </div> 
    )}
    </div>
  );
}

function customRound(number) {
  const decimalPart = number % 1;
  return number + (decimalPart >= 0.5 ? 1 - decimalPart : -decimalPart);
}

// helper function to render stars based on the rating out of 5
function renderRatingStars(rating, originalRating) {
  const maxRating = 5;
  const roundedRating = customRound(rating); // Round to the nearest whole number

  const stars = [];
  for (let i = 0; i < maxRating; i++) {
    if (i < roundedRating) {
      stars.push(<span key={i}>&#9733;</span>); // Unicode character for a solid star
    } else {
      stars.push(<span key={i}>&#9734;</span>); // Unicode character for an empty star
    }
  }

  return (
    <>
      {stars} ({originalRating.toFixed(1)}/5)
    </>
  );
}

export default ProductsPage;