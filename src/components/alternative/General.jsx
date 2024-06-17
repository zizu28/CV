import { useState, useRef } from "react"

export default function RenderedGeneralInformation(){
    const myKey = Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15);
    const [renderedList, setRenderedList] = useState([<Information key={myKey}/>])

    const handleAddComponent = () => {
        setRenderedList([...renderedList, <Information />])
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
            <div id="">
                <fieldset>
                    <legend>General Information</legend>
                    {
                    renderedList.map(component => {
                        const newKey = Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15);
                        return <div key={newKey}>{component}</div>
                    })
                }
                </fieldset>
            </div>
        </div>
    )
}

let GeneralData = {
    nameofPerson: "XXXX",
    email: "XXXX@XXXX.com",
    telephone: "XXXX"
}

function Information(){
    const [data, setData] = useState(GeneralData)
    const formRef = useRef(null);

    const handleInformation = (e) => {
        e.preventDefault();
    
        const updatedData = {...data,
          nameofPerson: e.target.elements.username.value,
          email: e.target.elements.email.value,
          telephone: e.target.elements.telephone.value,
        };
    
        setData(updatedData);
        formRef.current.reset();
        document.querySelector('#GeneralDialog').close();
    };

    return (
        <div>
            <div className="divHeader">
                <div style={{marginRight: '5px'}}>
                    <button type="button" className="btn head" onClick={() => {
                        document.querySelector('#GeneralDialog').showModal();
                    }}>Edit</button>
                </div>
            </div>
            <section>
                <div>
                    <h3><span>Name:</span> {data.nameofPerson}</h3>
                </div>
                <div>
                    <h3><span>Email:</span> {data.email}</h3>
                </div>
                <div>
                    <h3><span>Mobile Number:</span> {data.telephone}</h3>
                </div>
            </section>
            <dialog id="GeneralDialog">
                <form id="GeneralForm" onSubmit={(e) => handleInformation(e)} ref={formRef}>
                    <div>
                        <label>
                            Name: 
                            <input type="text" name="username" required/>
                        </label>
                    </div>
                    <div>
                        <label>
                            Email: 
                            <input type="email" name="email" required/>
                        </label>
                    </div>
                    <div>
                        <label>
                            Mobile Number: 
                            <input type="tel" name="telephone" required/>
                        </label>
                    </div>
                    <button type="submit" className="btn head">Submit</button>
                </form>
            </dialog>
        </div>
    )
}