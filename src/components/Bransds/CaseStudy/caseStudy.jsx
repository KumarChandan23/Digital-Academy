import { IMG } from "../../images";
import { CaseStudyList } from "./caseStudyList";


export const CaseStudy = ()=>{
    const caseStudyData = [IMG.MAKEMYTRIP, IMG.ZOMATO, IMG.ZEPTO, IMG.TRIVAGO];
    return <CaseStudyList data={caseStudyData} />
} 