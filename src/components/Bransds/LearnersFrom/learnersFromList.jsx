

export const LearnerFromList = ({ data }) => {
    return (
        <div>
            <h4 className='brand-caption learner-caption'>Learners From 30+ Countries</h4>
            <div className="brand-container learner-brand-container">
                {data.map((item, index) => (
                    <div key={index}>
                        <img src={item.image} alt={item.name} className="learner-from-country-flag" />
                        <p>{item.name}</p>
                    </div>
                ))}
            </div>
        </div>
    )
}