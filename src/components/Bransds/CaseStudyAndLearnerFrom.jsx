import { CaseStudy } from "./CaseStudy/caseStudy";
import { LearnerFrom } from "./LearnersFrom/learnersFrom";
import '../../styles/csalf.css';
export const CSALF = () => {
 
  return (
    <div className="csalf-container">
      <CaseStudy />
      <hr />
      <LearnerFrom />
    </div>
  );
};
