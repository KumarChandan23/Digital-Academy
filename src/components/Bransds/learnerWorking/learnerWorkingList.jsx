import '../../../styles/brand.css'

export const LearnerWorkingList = ({ data }) => {
    return (
        <div>
            <h2 className='brand-caption'>Our Learners Working In 1,000+ Global Brands</h2>
            <div className="brand-container">
                {data.map((item, index) => (
                    <div key={index}>
                        <img src={item} alt="" className='brand-image' />
                    </div>
                ))}
            </div>
        </div>
    )
}