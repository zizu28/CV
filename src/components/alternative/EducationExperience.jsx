import { useState, useRef } from "react"

export default function RenderedEducationInformation(){
    const myEducationKey = Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15);
    const [renderedEducationList, setRenderedEducationList] = useState([<Education key={myEducationKey}/>])

    
    const handleAddComponent = () => {
        setRenderedEducationList([...renderedEducationList, <Education />])
    }

    const handleDelete = () => {
        renderedEducationList.pop()
        setRenderedEducationList([...renderedEducationList])
    }

    return (
        <div className="componentCard">
            <div>
                <button type="button" className="btn head" style={{marginLeft: '5px'}} onClick={handleAddComponent}>Add</button>
                <button type="button" className="btn head" style={{marginLeft: '5px'}} onClick={handleDelete}>Delete</button>
            </div>
            <div id="">
                {
                    renderedEducationList.map(component => {
                        const newEducationKey = Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15);
                        return <div key={newEducationKey}>{component}</div>
                    })
                }
            </div>
        </div>
    )
}

let EducationData = {
    schoolName: "TAMASCO",
    course: "General Science",
    StartDate: "09/21/2008",
    EndDate: "07/15/2012"
}

function Education(){
    const [data, setData] = useState(EducationData)
    const formRef = useRef(null);

    const handleInformation = (e) => {
        e.preventDefault();

        const updatedData = {...data,
            schoolName: e.target.elements.schoolName.value,
            course: e.target.elements.course.value,
            StartDate: e.target.elements.StartDate.value,
            EndDate: e.target.elements.EndDate.value
        }

        setData(updatedData);
        formRef.current.reset();
        document.querySelector('#EducationDialog').close();
    }

    return (
        <div>
            <div className="divHeader">
                <div>
                    <h2 style={{marginLeft: '5px', textAlign: 'center'}}>Education Experience</h2>
                </div>
                <div style={{marginRight: '5px'}}>
                    <button type="button" className="btn head" id="editBtn" onClick={() => {
                        document.querySelector('#EducationDialog').showModal();}}>Edit</button>
                </div>
            </div>
            <section>
                <div>
                    <h3><span>Name of School:</span> {data.schoolName}</h3>
                </div>
                <div>
                    <h3><span>Course Studied:</span> {data.course}</h3>
                </div>
                <div>
                    <h3><span>Start Date:</span> {data.StartDate}</h3>
                </div>
                <div>
                    <h3><span>End Date:</span> {data.EndDate}</h3>
                </div>
            </section>
            <dialog id="EducationDialog">
                <form name="EducationForm" onSubmit={(e) => handleInformation(e)} ref={formRef}>
                    <div>
                        <label>
                            Name of School: 
                            <input type="text" name="schoolName" required/>
                        </label>
                    </div>
                    <div>
                        <label>
                            Course of Study: 
                            <input type="text" name="course" required/>
                        </label>
                    </div>
                    <div>
                        <label>
                            Start Date: 
                            <input type="date" name="StartDate" required/>
                        </label>
                    </div>
                    <div>
                        <label>
                            End Date: 
                            <input type="date" name="EndDate" required/>
                        </label>
                    </div>
                    <button type="submit" className="btn head">Submit</button>
                </form>
            </dialog>
        </div>
    )
}