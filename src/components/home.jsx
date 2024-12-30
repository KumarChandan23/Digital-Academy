import '../styles/home.css'
import img_Girl_with_book from '../assets/girl-with-book.png';
import img_Rating from '../assets/star.png';
import img_Cap from "../assets/cap.png";
import img_Handshake from '../assets/handshake.png';
import { IMG } from './images';
export const Home = () => {
    return (
        <div id='hero-section'>
            <div className="hero-text-content">
                <p className='primary-caption'>50000+ Careers Transformed in Digital Marketing</p>
                <h1 className='secondary-caption-c1'>Be a Skilled Professional in Digital Marketing</h1>
                <h2 className='secondary-caption-c1'>Learn Today. Lead Tomorrow.</h2>
                <h3 className='caption3'>Making Opportunities Knock On Your Door</h3>
                <div className='home-extra-info'>
                    <div className="home-companies info-item">
                        <strong className='info-title'>1000+ </strong>
                        <p className='info-text'>Companies where our learners are employed</p>
                    </div>
                    <div className="home-palcement info-item">
                        <strong className='info-title'>93%</strong>
                        <p className='info-text'>Learners Placed On Average</p>
                    </div>
                    <div className="home-preelancers info-item">
                        <strong className='info-title'>300+</strong>
                        <p className='info-text'>Entrepreneurs & Freelancers Created</p>
                    </div>
                    <div className="home-package info-item">
                        <strong className='info-title'>3-6 Lakhs</strong>
                        <p className='info-text'>Lakhs Average CTC Offered on Minimum</p>
                    </div>
                </div>
              
            </div>
            <div className="home-image-container">
                <img src={img_Girl_with_book} alt="image" className='girl-with-book' />

                <div className='hover-content-container'>
                    <div className="hiring hover-content ">
                        <img src={img_Handshake} alt="handshake" />
                        <div>
                            <strong className='hover-title'>1000+</strong>
                            <p className='hover-text'>Hiring partners</p>
                        </div>
                    </div>
                    <div className="rating hover-content">
                        <img src={img_Rating} alt="rating star" />
                        <div>
                            <strong className='hover-title'>5/5</strong>
                            <p className='hover-text'>Rating</p>
                        </div>
                    </div>
                    <div className="cap hover-content">
                        <img src={img_Cap} alt="cap" />
                    </div>
                </div>
            </div>
            <div className='join-us-info'>
                    <button className='apply-button'>Apply</button>
                    <div className='multiple-user-container'>
                        <img src={IMG.KHUSHAL} alt="SONAL" className='multiple-user-image user1' />
                        <img src={IMG.SONAL} alt="SONAL" className='multiple-user-image user2' />
                        <img src={IMG.SARIGA} alt="SONAL" className='multiple-user-image user3' />
                        <img src={IMG.NIKHIL} alt="SONAL" className='multiple-user-image user4' />
                        <img src={IMG.APOORVA} alt="SONAL" className='multiple-user-image user5' />
                        <div className='multiple-user-image userN'>+50K</div>
                    </div>
                    <p className='join-us-text'>join the class</p>
                </div>
        </div>
    )
}