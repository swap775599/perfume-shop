import React from 'react';
import ProductCard from '../components/ProductCard';
import ReviewCard from '../components/ReviewCard';
import Newsletter from '../components/Newsletter';

const Home = () => {
  const products = [
    { name: 'Elegant Floral Perfume', price: 49.99, imageUrl: 'url1' },
    { name: 'Luxury Essence', price: 59.00, imageUrl: 'url2' }
  ];

  const reviews = [
    { text: 'The scent is divine!', name: 'Michael Smith', location: 'Los Angeles' },
    { text: 'Love this perfume!', name: 'Emily Johnson', location: 'New York' }
  ];

  return (
    <div>
      <h1>Exclusive Discounts on Our Finest Perfumes!</h1>
      <div className="products">
        {products.map((product, idx) => <ProductCard key={idx} product={product} />)}
      </div>
      <div className="reviews">
        {reviews.map((review, idx) => <ReviewCard key={idx} review={review} />)}
      </div>
      <Newsletter />
    </div>
  );
};

export default Home;
