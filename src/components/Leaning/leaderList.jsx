import { IMG } from "../images"
import '../../styles/leader.css'

export const LeaderList = ({ listData }) => {
    return (
        <ul className="leader-list">
            {
                listData.map((item, index) => (
                    <li key={index} className="leader-list-item">
                        <img src={IMG.CHECKED} alt="checked sing" className="leader-checked-icon" />
                        {item}
                    </li>
                ))
            }
        </ul>

    )
}