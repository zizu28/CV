import { useState, useRef } from "react";

export default function RenderedWorkInformation(){
    const myWorkKey = Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15);
    const [renderedList, setRenderedList] = useState([<Work key={myWorkKey}/>])

    const handleAddComponent = () => {
        setRenderedList([...renderedList, <Work />])
    }

    const handleDelete = () => {
        renderedList.pop();
        setRenderedList([...renderedList])
    }

    return (
        <div className="componentCard">
            <div>
                <button type="button" className="btn head" style={{marginLeft: '5px'}} onClick={handleAddComponent}>Add</button>
                <button type="button" className="btn head" style={{marginLeft: '5px'}} onClick={handleDelete}>Delete</button>
            </div>
            <div>
                {
                    renderedList.map(component => {
                        const newWorkKey = Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15);
                        return <div key={newWorkKey}>{component}</div>
                    })
                }
            </div>
        </div>
    )
}

let WorkData = {
    CompanyName: "XXXXXXX",
    Position: "N/A",
    Responsibilities: "N/A",
    StartDate: "XXXX",
    EndDate: "XXXX"
}

function Work(){
    const [data, setData] = useState(WorkData)
    const formRef = useRef(null); 

    const handleInformation = (e) => {
        e.preventDefault();
        const updatedData = {...data,
            CompanyName: e.target.elements.CompanyName.value,
            Position: e.target.elements.Position.value,
            Responsibilities: e.target.elements.Responsibilities.value,
            StartDate: e.target.elements.StartDate.value,
            EndDate: e.target.elements.EndDate.value
        }
        setData(updatedData);
        formRef.current.reset();
        document.querySelector('#WorkDialog').close();
    }

    return (
        <div>
            <div className="divHeader">
                <div>
                    <h2 style={{marginLeft: '5px', textAlign: 'center'}}>Work Experience</h2>
                </div>
                <div style={{marginRight: '5px'}}>
                    <button type="button" className="btn head" onClick={() => {
                        document.querySelector('#WorkDialog').showModal();
                    }}>Edit</button>
                </div>
            </div>
            <section>
                <div>
                    <h3><span>Name of Company:</span> {data.CompanyName}</h3>
                </div>
                <div>
                    <h3><span>Position:</span> {data.Position}</h3>
                </div>
                <div>
                    <h3><span>Responsibilities:</span> {data.Responsibilities}</h3>
                </div>
                <div>
                    <h3><span>Date Started:</span> {data.StartDate}</h3>
                </div>
                <div>
                    <h3><span>Date Ended:</span> {data.EndDate}</h3>
                </div>
            </section>
            <dialog id="WorkDialog">
                <form name="WorkForm" onSubmit={(e) => handleInformation(e)} ref={formRef}>
                    <div>
                        <label>
                            Name of Company: 
                            <input type="text" name="CompanyName" required/>
                        </label>
                    </div>
                    <div>
                        Position in Company: 
                        <label>
                            <input type="text" name="Position" required/>
                        </label>
                    </div>
                    <div>
                        <label>
                            Responsibilities: 
                            <textarea name="Responsibilities" required></textarea>
                        </label>
                    </div>
                    <div>
                        <label>
                            Work Start Date:
                            <input type="date" name="StartDate" required/>
                        </label>
                    </div>
                    <div>
                        <label>
                            Work End Date: 
                            <input type="date" name="EndDate" required/>
                        </label>
                    </div>
                    <button type="submit" className="btn head">Submit</button>
                </form>
            </dialog>
        </div>
    )
}

