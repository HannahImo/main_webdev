import { Link } from "react-router-dom";
import Info1 from "./Info1";
function NonPSME(){
    return(
        <>
        <Info1/>
        <div className="Donor Id">
            <h1> Non-Profit / SME Identity Details </h1>
            <p> Country/region of issue</p>
            <form className="Npsme country"/>
        <div>
            <input type="text" className="npsme-form-input country" name="Country" placeholder="Country"/> 
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
            <input type="text" className="Npsme-form-input address" name="Address" placeholder="Permanent Residence"/> 
        </div>
        <div className="bankstatement">
             <h5> Bank Statement(preferred)/ Utility Bills </h5>
             <p> Supported formats include Pdf, png, jpg up to 10MB</p>
            <button type="submit"> Browse Files  </button>
        </div>
        <div className="return">
        <p> <button type="Submit" > <Link to="/getup"> Back </Link> </button> </p>
        <p> <button type="submit" > <Link to="/Compde">Next </Link> </button> </p>
        </div>
        </>
    )
}
export default NonPSME;