

export const CaseStudyList = ({ data }) => {
    return (
        <div>
            <h4>Brand Case Studies</h4>
            <div className="brand-container">
                {data.map((item, index) => (
                    <div key={index}>
                        <img src={item} alt="" className="brand-image" />
                    </div>
                ))}
            </div>
        </div>
    )
}