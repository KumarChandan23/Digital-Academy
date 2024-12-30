import React from 'react';
import TechnologyDataList from './technologyDataList'; // Adjust the path accordingly
import { IMG } from "../images";

export const TechnologyData = () => {
    const TechData = [
        {
            image: IMG.SIMPLIFIEDCURRICULUM,
            title: "Simplified Curriculum",
            caption: "Go from the basics to the advanced, implementing all the concepts practically to become an industry-standard professional in digital marketing."
        },
        {
            image: IMG.EXPERTGUID,
            title: "Expert Guided Sessions",
            caption: "Acquire the right skills delivered seamlessly by mentors, industry experts, global business leaders, and top universities."
        },
        {
            image: IMG.IGNITECAREER,
            title: "Ignite Your Career",
            caption: "Earn a degree-grade portfolio, approved, verified, and certified by world-class experts, organizations, and universities."
        }
    ];
    return <TechnologyDataList techData={TechData} />;
};
