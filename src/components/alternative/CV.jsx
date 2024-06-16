import RenderedGeneralInformation from "./General";
import RenderedEducationInformation from "./EducationExperience";
import RenderedWorkInformation from "./WorkExperience";

export default function CV(){
    return (
        <div id="CVRoot">
            <RenderedGeneralInformation />
            <RenderedEducationInformation />
            <RenderedWorkInformation />
            {/* <button type="submit" className="btn head" style={{width: '9em'}}>Submit Form</button> */}
        </div>
    )
}