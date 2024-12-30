import { IMG } from "../../images";
import { LearnerWorkingList } from "./learnerWorkingList";


export const LearnerWorking = ()=>{
    
      const  learnersWorking= [IMG.ACCENTURE, IMG.RAKUTEN, IMG.IBM, IMG.TCS, IMG.YAHOO]
    return <LearnerWorkingList data={learnersWorking} />
} 