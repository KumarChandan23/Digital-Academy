// src/components/SkillList.js
import React from 'react';
import SkillItem from './skillItem.jsx';
import '../styles/skills.css'

const SkillList = ({ skills }) => {
  return (
    <div className="skill-list">
      {skills.map((skill, index) => (
        <SkillItem key={index} skill={skill} />
      ))}
    </div>
  );
};

export default SkillList;
