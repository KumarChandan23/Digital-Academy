import { IMG } from "./images"
import '../styles/course.css';

export const Course = ()=>{
    return(
        <div className="course-container">
            <div className="course-data">
                <h2 className="course-title">Still Not Sure About the Course?</h2>
                <p className="course-caption">Avoid confusion and choose the right digital marketing course in Bangalore or online digital marketing certification course that suits your needs and helps you achieve your career goals.</p>
               <button className="enquire-course">Enquire Now</button>
               <button className="get-call">Get a call Back</button>
            </div>
            <div>
                <img src={IMG.DEGREE} alt="course" className="degree-image" />
            </div>
        </div>
    )
}