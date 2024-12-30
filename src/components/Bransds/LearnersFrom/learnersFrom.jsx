import { IMG } from "../../images";
import { LearnerFromList } from "./learnersFromList";


export const LearnerFrom = ()=>{
    const Learners_From= [
        { name: "India", image: IMG.INDIA },
        { name: "UAE", image: IMG.UAE },
        { name: "Singapore", image: IMG.SINGAPORE },
        { name: "US", image: IMG.US }
      ];
    return <LearnerFromList data={Learners_From} />
} 