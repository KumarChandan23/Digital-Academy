

export const StudentWorkingList = ({data})=>{
    return(
        <div>
           <h2>Our Students Work In</h2>
           <div className="all-brand-container student-working-container">
             {data.map((item, index)=>(
                <div key={index} className="all-brand-image-container">
                    <img src={item} alt="" className="all-brand-image" />
                </div>
            ))}
            </div>
        </div>
    )
}