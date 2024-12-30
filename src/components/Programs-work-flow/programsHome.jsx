import React, { useState } from 'react';
import ProgramNavigation from './ProgramNavigation.jsx';
import ProgramNavigationData from './programNavigationData.jsx';
import { IMG } from '../images';  // Importing image data

const ProgramsHome = () => {
  const navItemsData = [
    {
      label: 'Industry-vetted curriculum',
      data: {
        image: IMG.CAREER, 
        caption: "Industry-Vetted Curriculum",
        listItem: ["Best-in-class curriculum approved by industry experts", "Verified courses supported by CEOs, COOs, and pioneers in your field", "Topic-wise live sessions with top experts", "Feedback-driven enhancements for ongoing effectiveness" ]
      }
    },
    {
      label: 'Guided Programs',
      data: {
        image: IMG.GUIDED_PRLGRAM, 
        caption: "Expert Mentors",
        listItem: ["Learn from industry-favorite mentors with a minimum of 5+ years of experience", "Personalized attention through interactive classroom and online sessions", "Dedicated after-class doubt clearing sessions with program experts","Access immense knowledge and expertise from top industry veterans"]
      }
    },
    {
      label: 'Specialization',
      data: {
        image: IMG.SPECIALISATION, 
        caption: "Capstone Projects",
        listItem: ["Hands-on learning pedagogy to cover practical knowledge", "Real-world simulations and projects beyond theoretical sessions", "Customized projects from multiple disciplines for your learning","Learn how to demonstrate mastery and readiness for the industry"]
      }
    }, {
      label: 'Practical Sessions',
      data: {
        image: IMG.PRACTICALS,
        caption: "Practical Sessions",
        listItem: ["Embark on high-profile capstone projects to fuel your portfolio", "Foster teamwork and collaboration through practical sessions", "Analyze real-world brand cases for valuable insights","Tackle real-world problems and develop critical thinking skills"]
      }
    }, {
      label: 'Placement Cell',
      data: {
        image: IMG.PLACEMENT, 
        caption: "Placement Cell",
        listItem: ["Get expert career planning and development guidance", "Ace interviews with coaching and mock sessions", "Extensive classes on resume creation and portfolio building","Full support from applications to job offers with strong industry partnerships"]
      }
    }, {
      label: 'Resources & Forum',
      data: {
        image: IMG.RESOURCE, 
        caption: "Resources & Forum",
        listItem: ["Access your study material and LMS for a lifetime", "Get a pool of recorded sessions, cheat sheets, and more", "Explore a wealth of curated resources, forums, and more","Participate in dynamic discussions with peers and industry veterans"]
      }
    }
  ];

    // Set the default selected item to the first nav item
    const [selectedItem, setSelectedItem] = useState(navItemsData[0]?.data || null);

    const handleItemSelect = (data) => {
      setSelectedItem(data); // Update selected item data
    };

  return (
    <div className="programs-container">
      <div className="program-caption-container">
        <h2>How Our Program Works</h2>
        <h3>The One-Stop Learning Platform for Your Career</h3>
        <p>Our digital marketing classes are designed to deliver the knowledge and practical experience you need to succeed. Whether you are looking for digital marketing training in Bangalore or an online digital marketing course, we provide a seamless learning experience.</p>
      </div>

      <div className="programs-navigation-container">
        <ProgramNavigation navItems={navItemsData} onItemSelect={handleItemSelect} />
        <ProgramNavigationData item={selectedItem} />
      </div>
    </div>
  );
};

export default ProgramsHome;

















































// // src/components/ProgramListAndRoutes.js
// import React from 'react';
// import ProgramNavigation from './programNavigation';
// import ProgramRoutes from './programRoutes';
// import ProgramNavigationData from './programNavigationData';


// const ProgramListAndRoutes = () => {

//   const navItemsData = [
//     { label: 'Industry-vetted curriculum', link: '/industry', data:{name:"Chanda",age:"33",gender:"female"}},
//     { label: 'Guided Program', link: '/placement',  data:{name:"Chandan",age:"23",gender:"male"}},
//     { label: 'Specialization', link: '/specialzation' , data:{name:"Raju",age:"13",gender:"male"} },
//     { label: 'Practical Sessions', link: '/practical-session' ,  data:{name:"Chanda sharma",age:"22",gender:"male"} },
//     { label: 'Placement Cell', link: '/placement', data:{name:"Chandajfsl",age:"33",gender:"male"}},
//     { label: 'Resource & Forum', link: '/resource', data:{name:"Chandajfskld",age:"43",gender:"male"} },
//   ];
//   return (
//     <div className='programs-container'>
//       <div className="program-caption-container">
//         <h2>How Our Program Works</h2>
//         <h3>TThe One-Stop Learning Platform for Your Career</h3>
//         <p>Our digital marketing classes are designed to deliver the knowledge and practical experience you need to succeed. Whether you are looking for digital marketing training in Bangalore or an online digital marketing course, we provide a seamless learning experience.</p>
//       </div>
//       <div className='programs-navigation-container'>
//         <ProgramNavigation navItems={navItemsData} />
//         <ProgramNavigationData navItems={navItemsData} />
//         {/* <ProgramRoutes /> */}
//       </div>
//     </div>
//   );
// };

// export default ProgramListAndRoutes;
