import { IMG } from "../../images";
import { StudentWorkingList } from "./studentWorkingList";


export const StudentWorking = ()=>{
    const student_working= [
        IMG.AUDI,
        IMG.R9V,
        IMG.KNOWLEDGEHUT,
        IMG.CAKEWALA,
        IMG.SWIGGY,
        IMG.AMAZON,
        IMG.ACCENTURE,
        IMG.SOCIALPANGA,
        IMG.JAIN,
        IMG.BYJUS,
        IMG.ITC,
        IMG.SIMPLILEARN,
        IMG.AKARMAXS,
        IMG.ICICI,
        IMG.INFOSYS,
        IMG.RAKUTEN,
        IMG.RAPIDO,
        IMG.REPLICON,
        IMG.GOOGLE,
      ];
    return <StudentWorkingList data={student_working} />
} 