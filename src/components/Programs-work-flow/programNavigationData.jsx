import React from 'react';
import '../../styles/ProgramsNavigationData.css'
const ProgramNavigationData = ({ item }) => {
    return (
        <div className="programs-data-container">
            <div>
                <h3 className="programs-data-caption">{item.caption}</h3>
                <ul  className="programs-data-list">
                    {item.listItem.map((point, index) => (
                        <li key={index}>{point}</li>
                    ))}
                </ul>
                <button className='enquire-button'>Enquired Now</button>
            </div>
            <div className="programs-data-image-container">
                <img src={item.image} alt={item.caption} className="programs-data-image" />
            </div>
        </div>
    );
};

export default ProgramNavigationData;
