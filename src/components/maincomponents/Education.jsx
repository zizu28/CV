export default function EducationExperience({ schoolName, course, DateOfStudy }){
    return (
        <>
             <div className="divHeader">
                <button type="button" className="btn head" style={{marginLeft: '5px'}}>Add</button>
                <button type="button" className="btn head" style={{marginLeft: '5px'}}>Edit</button>
                <button type="button" className="btn head" style={{marginLeft: '5px'}}>Delete</button>
            </div>
            <section>
                <div>
                    <h3><span>Name of School:</span> {schoolName}</h3>
                </div>
                <div>
                    <h3><span>Course Studied:</span> {course}</h3>
                </div>
                <div>
                    <h3><span>Start Date:</span> {DateOfStudy}</h3>
                </div>
            </section>
        </>
    )
}