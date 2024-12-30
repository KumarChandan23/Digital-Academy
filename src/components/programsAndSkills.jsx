import SkillsData from "./skillsData"
import '../styles/skills.css'

export const ProgramAndSkills = ()=>{
    return(
        <div className="programsAndSkills-container">
            <h1 className="programs-caption-1">Programs & Skills to Master in Digital Marketing</h1>
            <h3 className="programs-caption-2">Upskill Your Knowledge to Change Your Career Trajectory</h3>
            <p className="programs-paragrapg">We offer comprehensive digital marketing training in Bangalore and online digital marketing courses designed to help you succeed in the digital age. Our specialized programs cater to diverse needs—whether you're aiming for a career in digital marketing, social content creation, or entrepreneurship.</p>
            <SkillsData />
        </div>
    )
}