import React from 'react';
import { useLocation } from 'react-router-dom';

// Sample product data (replace with your actual product data)
// const products = [
//   { id: 1, name: 'Product 1', imageUrl: 'product1.jpg' },
//   { id: 2, name: 'Product 2', imageUrl: 'product2.jpg' },
//   { id: 3, name: 'Product 3', imageUrl: 'product3.jpg' },
//   { id: 4, name: 'Product 4', imageUrl: 'product4.jpg' },
//   { id: 5, name: 'Product 5', imageUrl: 'product5.jpg' },
//   // Add more product items here
// ];

function ProductsPage() {
  const location = useLocation();
  const searchResults = location.state?.searchResults || [];
  return (
    <div>
      <h1>Skincare Products</h1>
      {searchResults.map((result) => (
        <div key={result.id}>
          <h3>{result.name}</h3>
          <p>{result.description}</p>
        </div>
      ))}
      {/* <div className="product-grid">
        {products.map((product) => (
          <div key={product.id} className="product-item">
            <img src={product.imageUrl} alt={product.name} />
            <h3>{product.name}</h3>
          </div>
        ))}
      </div> */}
    </div>
  );
}

export default ProductsPage;

