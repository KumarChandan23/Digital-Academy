import React from 'react';
import '../styles/starRating.css';

const StarRating = ({ rating }) => {
    const totalStars = 5; // Total stars to display
    const filledStars = Math.floor(rating); // Whole number stars
    const halfStar = rating - filledStars >= 0.5; // Check for half-star
    const emptyStars = totalStars - filledStars - (halfStar ? 1 : 0); // Remaining stars

    // Create an array of JSX elements for stars
    const stars = [
        ...Array(filledStars)
            .fill()
            .map((_, i) => <span key={`filled-${i}`} className="star filled">★</span>),
        ...(halfStar
            ? [<span key="half" className="star half">★</span>]
            : []),
        ...Array(emptyStars)
            .fill()
            .map((_, i) => <span key={`empty-${i}`} className="star empty">★</span>),
    ];

    return <div className="rating-stars">{stars}</div>;
};

export default StarRating;
