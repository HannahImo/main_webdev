import { Link } from "react-router-dom";
function Getup(){
        
    return(
        <div className="bot">
            <h1> Hello  There</h1>
            <p> Would you like to get verified as </p>
            <div>
             <form className="verify-form">
                 <button type="Submit"> <p></p><Link to="/DonorId"> Donor </Link> </button>  
                
                <button type="submit"> <p></p><Link to="/NonPSME"> NonProfit or SME </Link> </button>  
            </form>
            </div>
                <button> Let's go!  </button>
            </div>
   )
}
export default Getup;