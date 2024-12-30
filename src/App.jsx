import React from 'react';
import { BrowserRouter as Router} from 'react-router-dom';
import './App.css'
import { Home } from './components/home';
import { ProgramAndSkills } from './components/programsAndSkills';
import {ProgramsHome} from './components/Programs-work-flow/programsHome.jsx'
import { TrustedProgram } from './components/Trusted-programs/trustedProgram';
import { TechnologyHome } from './components/Technologies/technologyHome.jsx';
import { Leader } from './components/Leaning/leader';
import { VideoEmbed } from './components/Learn From Video/videoEmbed';
import { LearnerWorking } from './components/Bransds/learnerWorking/LearnerWorking';
import { CSALF } from './components/Bransds/CaseStudyAndLearnerFrom.jsx';
import { Placement } from './components/placement.jsx';
import { Course } from './components/course.jsx';
import { Footer } from './components/footer.jsx';
import { StudentWorking } from './components/Bransds/Studentworking/studentWorking.jsx';
import { Lifeatda360 } from './components/lifeatda360.jsx';
import { Testimonials } from './components/Testimonials/testimonials.jsx';



function App() {

  return (
    <Router className="program-route-container">
      <Home />
      <LearnerWorking />
      <ProgramAndSkills />
      <ProgramsHome />
      <TrustedProgram />
      <TechnologyHome />
      <Leader />
      <VideoEmbed />
      <CSALF />
      <Placement />
      <Course />
      <Testimonials />
      <Lifeatda360 />
      <StudentWorking />
      <Footer />
    </Router>
  )
}

export default App;
