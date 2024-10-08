
import React from 'react';

const ReviewCard = ({ review }) => (
  <div className="review-card">
    <p>"{review.text}"</p>
    <h4>{review.name}, {review.location}</h4>
  </div>
);

export default ReviewCard;
