import { Link } from "react-router-dom";
import {FaUser} from "react-icons/fa";
import { IconContext } from "react-icons";
 



function Getup(){
        
    return(
        <IconContext.Provider value={{ className:"icons"}}> 
        <>
        <div className="bot">
            <h1> Hello  There</h1>
            <p> Would you like to get verified as </p>
            <div>
             <form className="verify-form">
                 <button type="Submit">  <FaUser size="15em" color="#04017A" /> <p></p><Link to="/DonorId"> Donor </Link> </button>  
                
                <button type="submit"> <FaUser size="15em" color="#04017A" /> <p></p><Link to="/NonPSME"> NonProfit or SME </Link> </button>  
            </form>
            </div>
                <button> Let's go!  </button>
            </div>
        </>
            </IconContext.Provider> 
    )
}
export default Getup;