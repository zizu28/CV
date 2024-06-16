export default function GeneralInformation({ name, email, telephone}){

    return (
        <>
            <div className="divHeader">
                <button type="button" className="btn head" style={{marginLeft: '5px'}}>Add</button>
                <button type="button" className="btn head" style={{marginLeft: '5px'}}>Edit</button>
                <button type="button" className="btn head" style={{marginLeft: '5px'}}>Delete</button>
            </div>
            <section>
                <div>
                    <h3><span>Name:</span> {name}</h3>
                </div>
                <div>
                    <h3><span>Email:</span> {email}</h3>
                </div>
                <div>
                    <h3><span>Mobile Number:</span> {telephone}</h3>
                </div>
            </section>
        </>
    )
}