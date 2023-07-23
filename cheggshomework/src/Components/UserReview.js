import React, {useState } from 'react';
import Fullstar from "../Assets/icons/star-fill.svg";
import step from "../Assets/step.jpeg";
import Halfstar from "../Assets/icons/star-half.svg";
export default function UserReview(){
  
  const reviews = [
  {
    name: 'John Smith',
    country: 'United States',
    reviewText: 'Great service! They helped me a lot with my homework.',
    starRating: 5,
    image:require('../Assets/imgs/users/User2.webp'),
  },
  {
    name: 'Emily Johnson',
    country: 'Canada',
    reviewText: "I'm impressed with the quality of their work. Highly recommended!",
    starRating: 4,
    image:require('../Assets/imgs/users/User1.webp'),
  },
  {
    name: 'James Wilson',
    country: 'United States',
    reviewText: 'Amazing service! They exceeded my expectations.',
    starRating: 4.5,
    image: require('../Assets/imgs/users/User3.webp'),
  },
  {
    name: 'Sophia Lee',
    country: 'United Kingdom',
    reviewText: 'Excellent assistance. They are very knowledgeable.',
    starRating: 4,
    image: require('../Assets/imgs/users/User4.webp'),
  },
  {
    name: 'Michael Brown',
    country: 'Australia',
    reviewText: 'Highly reliable service. They saved me a lot of time.',
    starRating: 4.5,
    image: require('../Assets/imgs/users/User5.webp'),
  },
  {
    name: 'Olivia Johnson',
    country: 'Canada',
    reviewText: 'Great experience. The team is very responsive and helpful.',
    starRating: 5,
    image: require('../Assets/imgs/users/User6.webp'),
  },
  {
    name: 'William Davis',
    country: 'United States',
    reviewText: 'Outstanding service. They provided excellent solutions.',
    starRating: 5,
    image: require('../Assets/imgs/users/User7.webp'),
  },
  {
    name: 'Steve Thompson',
    country: 'Australia',
    reviewText: 'Very satisfied with the service. Highly recommended.',
    starRating: 4.5,
    image: require('../Assets/imgs/users/User8.jpg'),
  },
  {
    name: 'Liam Clark',
    country: 'United Kingdom',
    reviewText: 'Reliable and professional service. They delivered on time.',
    starRating: 4,
    image: require('../Assets/imgs/users/User9.jpg'),
  },
  {
    name: 'Ava Mitchell',
    country: 'United States',
    reviewText: "They provided excellent guidance. I'm impressed.",
    starRating: 5,
    image: require('../Assets/imgs/users/User10.jpg'),
  },
  {
    name: 'Noah Evans',
    country: 'Canada',
    reviewText: "Top-notch service. They helped me improve my grades.",
    starRating: 4.5,
    image: require('../Assets/imgs/users/User11.jpg'),
  },
  {
    name: 'Isabella Anderson',
    country: 'Australia',
    reviewText: "Very professional and reliable. I'm extremely satisfied.",
    starRating: 5,
    image: require('../Assets/imgs/users/User12.jpg'),
  },
];

return (
  <>
    {reviews.map(review => (
      <div className="user-review" key={review.id}>
        <div className="review-content">
          <span className="review-text">{review.reviewText}</span>
          <br/>
          <div className="star-rating">
            {Array.from({ length: Math.floor(review.starRating) }).map((_, index) => (
              <i key={index}>
                <img src={Fullstar} alt="Full Star" />
              </i>
            ))}
            {review.starRating % 1 !== 0 && (
              <i key="half-star">
                <img src={Halfstar} alt="Half Star" />
              </i>
            )}
          </div>
          <span className="review-date">{review.date}</span>
        </div>
        
        <div className="user-info">
          <div className="user-image"><img src={review.image} alt="User Avatar" className="avatar" /></div>
          <div>
            <span><strong>{review.name}</strong></span>
            <span>{review.country}</span>
          </div>
        </div>
      </div>
    ))}
    </>
); }




