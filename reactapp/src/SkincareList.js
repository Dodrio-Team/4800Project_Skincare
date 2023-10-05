import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import axios from 'axios';

function SkincareList() {
    const location = useLocation();
    const searchQuery = new URLSearchParams(location.search).get('search') || '';
    const [skincareProducts, setSkincareProducts] = useState([]);

    useEffect(() => {
        // Make API request to fetch skincare products based on the search query
        axios.get(`/skincare-products/?search=${searchQuery}`)
            .then(response => {
                setSkincareProducts(response.data);
            })
            .catch(error => {
                console.error('Error fetching skincare products:', error);
            });
    }, [searchQuery]); // Include searchQuery as a dependency to trigger the effect on query change

    return (
        <div>
            <h1>Skincare Products</h1>
            <h2>Search Results for: {searchQuery}</h2>
            <ul>
                {skincareProducts.map(product => (
                    <li key={product._id}>
                        <strong>{product.name}</strong>: {product.label}
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default SkincareList