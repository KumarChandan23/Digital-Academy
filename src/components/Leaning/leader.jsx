import { IMG } from "../images"
import '../../styles/leader.css';
import { LeaderListData } from "./leaderListData";

export const Leader = ()=>{
    return(
        <div className="leader-container">
            <div className="leadere-text-content">
                <h1 className="leader-caption">Learn from Leaders Today & Become Tomorrow’s Leader</h1>
                <LeaderListData />
            </div>
            <div className="leader-image-continer">
                <img src={IMG.MAN} alt="leader" className="leader-image" />
            </div>
        </div>
    )
}