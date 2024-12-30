import { IMG } from "../images"
import { useRef } from "react";


export const TestimonialData = ({ data }) => {

    const scrollContainerRef = useRef(null);

    // Handler for scrolling left
    const handlePrev = () => {
        if (scrollContainerRef.current) {
            const itemWidth = scrollContainerRef.current.children[0].offsetWidth;
            const containerPadding = 20;
            scrollContainerRef.current.scrollBy({
                left: -(itemWidth + containerPadding), 
                behavior: "smooth",
            });
        }
    };

    // Handler for scrolling right
    const handleForward = () => {
        if (scrollContainerRef.current) {
            const itemWidth = scrollContainerRef.current.children[0].offsetWidth;
            const containerPadding = 20;
            scrollContainerRef.current.scrollBy({
                left: (itemWidth + containerPadding), 
                behavior: "smooth",
            });
        }
    };

    return (
        <div className="textimonial-container">
            <div>
                <div className='testimonilas-caption-container'>
                    <p>Testimonials</p>
                    <h2>We Nurture Them For The Future And They Trust Us</h2>
                    <div>
                        <img src={IMG.PRE} alt="prev" className="testimonial-navigation-icon" onClick={handlePrev} />
                        <img src={IMG.FORWARD} alt="forward" className="testimonial-navigation-icon" onClick={handleForward} />
                    </div>
                </div>
            </div>

            <div className="testimonial-data-list-container" ref={scrollContainerRef} >
                {data.map((user, index) => (
                    <div key={index} className="testimonial-data-item" style={{ minWidth: "300px" }}>
                        <img src={user.image} alt="" className="testimonial-profile-data" />
                        <div className="testimonial-profile-data">
                            <div className="testimonial-profile-name">
                                <h3>{user.name}</h3>
                                <img src={IMG.QUOTES} alt="" className="quotes-icon" />
                            </div>
                            <p className="testimonial-user-caption">{user.caption}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}