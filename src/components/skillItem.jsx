// src/components/SkillItem.js
import React from 'react';
import { IMG } from './images';
import '../styles/skills.css'

const SkillItem = ({ skill }) => {
  return (
    <div className="skill-item">
      <img src={skill.image} alt={skill.title} className='skill-image' />
      <h3 className='skill-title'>{skill.title}</h3>
      <div className='duration-medium'>
        <div>
          <img src={IMG.CALENDAR} alt="calendar" />
          <p>{skill.duration}</p>
        </div>
        <div>
          <img src={IMG.CLASSROOM} alt="classroom" />
          <p>{skill.medium}</p>
        </div>
      </div>
      <ul>
        {skill.course.map((courseItem, index) => (
          <li key={index}>{courseItem}</li>
        ))}
      </ul>
      <p className='explore-more'>Explore more <span className='arrow-sign'> →</span></p>
    </div>
  );
};

export default SkillItem;
