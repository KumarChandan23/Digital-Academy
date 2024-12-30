import React from 'react';
import '../../styles/technology.css';

 const TechnologyDataList = ({ techData }) => {
    return (
        <div className="technology-list">
            {techData.map((item, index) => (
                <div key={index} className="technology-list-item">
                    <img src={item.image} alt={item.title} className="technology-list-image" />
                    <h3 className="technology-title">{item.title}</h3>
                    <p className="technology-caption">{item.caption}</p>
                </div>
            ))}
        </div>
    );
};
export default TechnologyDataList;
