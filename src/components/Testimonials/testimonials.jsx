import { IMG } from "../images"
import '../../styles/testimonial.css';  
import { TestimonialData } from "./testimonialData";


 export const Testimonials = ()=>{
    const testimonialsdata = [
        {
            image: IMG.SHRUSTI,
            name:"Shruti Shahu",
            caption:"The very first class i do not regret taking online mode. The faculty is very welcomming, supportive, and friendly. They were always there to clear my doubts. Also i am very thankful to thee placement cell of data DA360 for always being"
        },
        {
            image: IMG.NIKHIL,
            name:"Nikhil Ragesh",
            caption:"The vary first class i do not regret taking online mode. The faculty is very wellcomming, supportive, or friendly. They were alwase there to clear my doubts. Also i am very thankfull to the placement cell of data DA360 for always being"
        },
        {
            image: IMG.SARIGA,
            name:"Sariga Sivanandan",
            caption:"The vary first class i do not regret taking online mode. The faculty is very wellcomming, supportive, or friendly. They were alwase there to clear my doubts. Also i am very thankfull to thee placement cell of data DA360 for always being"
        },
        {
            image: IMG.SONAL,
            name:"Sonal Lal",
            caption:"The vary first class i do not regret taking online mode. The faculty is very wellcomming, supportive, or friendly. They were alwase there to clear my doubts. Also i am very thankfull to thee placement cell of data DA360 for always being"
        },
        {
            image: IMG.KHUSHAL,
            name:"khushal reddy",
            caption:"The vary first class i do not regret taking online mode. The faculty is very wellcomming, supportive, or friendly. They were alwase there to clear my doubts. Also i am very thankfull to thee placement cell of data DA360 for always being"
        },
        {
            image: IMG.SALMAN,
            name:"Salman Fareez",
            caption:"The vary first class i do not regret taking online mode. The faculty is very wellcomming, supportive, or friendly. They were alwase there to clear my doubts. Also i am very thankfull to thee placement cell of data DA360 for always being"
        },
       
    ]
    return <TestimonialData data={testimonialsdata} />
 }