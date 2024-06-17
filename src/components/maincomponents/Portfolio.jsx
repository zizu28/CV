import { useState, useRef } from "react";
import GeneralInformation from "./GeneralInfo";
import Education from "./Education";
import WorkExperience from "./Work";

function EditForm(e){
    e.preventDefault();
    const data = {
      studentName: e.target.elements.username.value,
      studentEmail: e.target.elements.email.value,
      studentMobileNumber: e.target.elements.telephone.value,
      schoolAttended: e.target.elements.schoolName.value,
      course: e.target.elements.course.value,
      DateOfStudy: e.target.elements.DateOfStudy.value,
      CompanyName: e.target.elements.CompanyName.value,
      Position: e.target.elements.Position.value,
      Responsibilities: e.target.elements.Responsibilities.value,
      StartDate: e.target.elements.StartDate.value,
      EndDate: e.target.elements.EndDate.value
    }
    return data;
  }

export default function Portforlio(){
    const [data, setData] = useState({})
    const [isEditiing, setIsEditting] = useState(false)
    const formRef = useRef(null);

    const handleSubmit = (e) => {
        let updateData = EditForm(e);
        setData(updateData);
        formRef.current.reset();
    }

    const handleIsEditting = () => {
        setIsEditting(!isEditiing);
    }

    return (
        <div id="PortfolioRoot">
            <div id="content">
                <div className="componentCard">
                    <GeneralInformation name={data.studentName} email={data.studentEmail} telephone={data.studentMobileNumber}/>
                </div>
                <div className="componentCard">
                    <Education schoolName={data.schoolAttended} course={data.course} DateOfStudy={data.DateOfStudy}/>
                </div>
                <div className="componentCard">
                    <WorkExperience CompanyName={data.CompanyName} Position={data.Position} Responsibilities={data.Responsibilities} 
                    StartDate={data.StartDate} EndDate={data.EndDate}/>
                </div>
                <button type="button" className="btn" style={{width: '10em', textAlign: 'center'}} onClick={handleIsEditting}>{isEditiing ? "Close Edit" : "Edit Portfolio"}</button>
            </div>
            <div id="card">
                <form onSubmit={handleSubmit} ref={formRef}>
                    <fieldset className="fieldset">
                        <legend>General Information</legend>
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
                    </fieldset>
                    <fieldset className="fieldset">
                        <legend>Education</legend>
                        <div>
                            <label>
                                Name of School Attended: 
                                <input type="text" name="schoolName" required/>
                            </label>
                        </div>
                        <div>
                            <label>
                                Course Taken: 
                                <input type="text" name="course" required/>
                            </label>
                        </div>
                        <div>
                            <label>
                                School Start Date: 
                                <input type="date" name="DateOfStudy" required/>
                            </label>
                        </div>
                    </fieldset>
                    <fieldset className="fieldset">
                        <legend>Work Experience</legend>
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
                    </fieldset>
                    <button type="submit" className="btn" id="submitBtn">Submit</button>
                </form>
            </div>
        </div>
    )
}

