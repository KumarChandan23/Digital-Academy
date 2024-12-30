import { IMG } from "./images"
import '../styles/lifeatda360.css'

export const Lifeatda360 = () => {
    return (
        <div>
            <h1 className="life-title">#lifeatda360</h1>
        <div className="life-image-container">
            <div className="life-image-container2"> 
                <div className="life-image-container">
                    <img src={IMG.IMG1} alt="" className="life-image" />
                    <img src={IMG.IMG2} alt="" className="life-image" />
                </div>
                <img src={IMG.IMG3} alt="" className="life-image" />
            </div>
            <div className="life-image-container2">
                <img src={IMG.IMG4} alt="" className="life-image" />
                <div className="life-image-container">
                    <img src={IMG.IMG5} alt="" className="life-image" />
                    <img src={IMG.IMG6} alt="" className="life-image" />
                </div>
            </div>
        </div>
        </div>
    )
}


// import { IMG } from "./images"
// import '../styles/lifeatda360.css'

// export const Lifeatda360 = () => {
//     return (
//         <div>
//             <h1 className="life-title">#lifeatda360</h1>
//             <div className="life-image-container testimonil-container">
//                 <img src={IMG.IMG1} alt="" className="life-image" />
//                 <img src={IMG.IMG2} alt="" className="life-image" />
//                 <img src={IMG.IMG3} alt="" className="life-image" />
//                 <img src={IMG.IMG4} alt="" className="life-image" />
//                 <img src={IMG.IMG5} alt="" className="life-image" />
//                 <img src={IMG.IMG6} alt="" className="life-image" />
//             </div>
//         </div>
//     )
// }