import { IMG } from "../images"
import '../../styles/technology.css';
    import { TechnologyData } from "./technologyData";

export const TechnologyHome = ()=>{
    return(
        <div className="technology-container">
            <div className="technology-image-container">
            <img src={IMG.TECHPPL2} alt="" className="technology-image" />
                <div className="technology-career-box">
                <h1>500+</h1>
                <p>Careers Transformed</p>

                </div>
            </div>
            <div className="technology-information-container">
                <h2 className="technology-information-title">Technologies Are Ever-Evolving</h2>
                <p className="technology-information-caption">And we provide you with a platform to learn, upskill, and excel in the world of digital marketing. Whether you’re interested in digital marketing certifications, digital marketing coaching, or offline digital marketing courses in Bangalore, we offer you a range of options to suit your needs.</p>
                <TechnologyData />
                <button className="enroll-now">  Enroll Now</button>
            </div>
        </div>
    )
}