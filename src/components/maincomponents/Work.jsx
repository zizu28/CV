export default function WorkExperience({ CompanyName, Position, Responsibilities, StartDate, EndDate }){
    return (
        <>
            <div className="divHeader">
                <button type="button" className="btn head" style={{marginLeft: '5px'}}>Add</button>
                <button type="button" className="btn head" style={{marginLeft: '5px'}}>Edit</button>
                <button type="button" className="btn head" style={{marginLeft: '5px'}}>Delete</button>
            </div>
            <section>
                <div>
                    <h3><span>Name of Company:</span> {CompanyName}</h3>
                </div>
                <div>
                    <h3><span>Position:</span> {Position}</h3>
                </div>
                <div>
                    <h3><span>Responsibilities:</span> {Responsibilities}</h3>
                </div>
                <div>
                    <h3><span>Date Started:</span> {StartDate}</h3>
                </div>
                <div>
                    <h3><span>Date Ended:</span> {EndDate}</h3>
                </div>
            </section>
        </>
    )
}