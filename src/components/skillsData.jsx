// src/components/SkillsData.js
import React from 'react';
import SkillList from './skillList';
import '../styles/skills.css';
import { IMG } from './images'; 

const SkillsData = () => {
  const skillsdata = [
    {
      image: IMG.MASTER_DM,
      title: "Leadership in Digital Marketing, AI & Entrepreneurship",
      duration: "12 Months",
      medium: "Classroom/Online",
      course: [
        "Master level Certification",
        "10 Advanced Specialization",
        "30 Courses in one Program",
        "15+ Project & Case Studies",
        "22+ Certifications"
      ]
    },
    {
      image: IMG.SDP,
      title: "PGCP in Digital Marketing & Social Content Creator",
      duration: "7 Months",
      medium: "Classroom/Online",
      course: [
        "PG level Certification",
        "4 Advanced Specialization",
        "20 Courses in one Program",
        "8+ Project & Case Studies",
        "18+ Certifications"
      ]
    },
    {
      image: IMG.PGCP,
      title: "Skill Diploma in Digital Marketing & Analytics",
      duration: "4 Months",
      medium: "Classroom/Online",
      course: [
        "Professional level Certification",
        "1 Advanced Specialization",
        "8 Courses in one Program",
        "3+ Project & Case Studies",
        "10+ Certifications"
      ]
    }
  ];

  return <SkillList skills={skillsdata} />;
};

export default SkillsData;
