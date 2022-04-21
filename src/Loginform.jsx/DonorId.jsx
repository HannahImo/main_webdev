import { Link } from "react-router-dom";
import Info1 from "./Info1";
function DonorId(){
    return (
        <>
        <Info1/>
        <div className="Donor Id">
            <h1> Donor Identity Details </h1>
            <p> Country/region of issue</p>
            <form className="Donor country"/>
        <div>
            <input type="text" className="donor-form-input country" name="Country" placeholder="Country"/> 
        </div>
             <br></br>
             <input type="checkbox" checked=""/>
             <label class="container"> Passport (Preferred)
             <span class="checkmark"></span>
            </label>

            <input type="checkbox" checked=""/>
            <label class="container"> Driving License
            <span class="checkmark"></span>
            </label>
  
            <div className="passport-input"> 
            <h4> Passport </h4>
            <p> Supported formats include Pdf, png, jpg up to 10MB</p>
            <button type="submit"> Browse Files  </button>
            </div>

            <h3>Proof of address </h3>
            <input type="text" className="donor-form-input address" name="Address" placeholder="Permanent Residence"/> 
        </div>
        <div className="bankstatement">
             <h5> Bank Statement(preferred)/ Utility Bills </h5>
             <p> Supported formats include Pdf, png, jpg up to 10MB</p>
            <button type="submit"> Browse Files  </button>
        </div>
        <div className="return">
        <p> <button type="Submit" > <Link to="/getup"> Back </Link> </button> </p>
        <p> <button type="submit" > Get Verified </button> </p>
        </div>
        </>
    )
}
export default DonorId;