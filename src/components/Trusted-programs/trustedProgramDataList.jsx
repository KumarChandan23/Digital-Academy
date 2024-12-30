import React from 'react';
import '../../styles/trustedPrograms.css'
import StarRating from '../starRating';
const TrustedDataList = ({ trustedData }) => {
    return (
        <div className="trusted-program-list">
            {trustedData.map((item, index) => (
                <div key={index} className="trusted-program-item">
                    <img src={item.brand_image} alt="Brand" className="brand-image" />  
                    <div className='rating-box'>
                    <StarRating rating={item.rating} />
                    <span className='rating-count'>{item.rating}</span>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default TrustedDataList;
