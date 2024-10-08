// src/pages/Home.js
import React, { useEffect, useState } from 'react';
import ProductCard from '../components/ProductCard';
import ReviewCard from '../components/ReviewCard';
import Newsletter from '../components/Newsletter';
import axios from 'axios';
import './Home.css'; // Optional: Add CSS for styling

const Home = () => {
  const [products, setProducts] = useState([]);
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    axios.get('/api/products').then(response => setProducts(response.data));
    axios.get('/api/reviews').then(response => setReviews(response.data));
  }, []);

  return (
    <div>
      <h1>Exclusive Discounts on Our Finest Perfumes!</h1>
      <div className="products">
        {products.map((product, idx) => (
          <ProductCard key={idx} product={product} />
        ))}
      </div>
      <div className="reviews">
        {reviews.map((review, idx) => (
          <ReviewCard key={idx} review={review} />
        ))}
      </div>
      <Newsletter />
    </div>
  );
};

export default Home;
