// src/pages/Shop.js
import React, { useEffect, useState } from 'react';
import ProductCard from '../components/ProductCard';
import axios from 'axios';
import './Shop.css'; // Optional: Add CSS for styling

const Shop = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios.get('/api/products').then(response => setProducts(response.data));
  }, []);

  return (
    <div>
      <h1>Shop Our Collection</h1>
      <div className="products">
        {products.map((product, idx) => (
          <ProductCard key={idx} product={product} />
        ))}
      </div>
    </div>
  );
};

export default Shop;
