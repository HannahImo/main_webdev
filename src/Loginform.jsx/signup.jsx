import React from "react";
import { Link } from "react-router-dom";
function Signup(){
        
    return(
        <>
        <div class="sign">
       <h3> Sign Up to get started </h3>
       <p> <button type="submit" className="signup">  Sign Up  </button> </p>
        <div>
       <form className="signup-form"/>
                <div>
                <input type="text" className="signup-form-input fullname" name="fullname" placeholder="Full-name"/> 
                    </div>
                    <input type="text" className="signup-form-input email" name="Email" placeholder="Email"/>
                    <div>
                        <input type="text" className="signup-form-input password" name="Password" placeholder="Password"/>
                    </div>
                    <div>
                 <button type="submit" className="Verifyy"> <Link to="/getup"> Get Verified </Link>   </button>
                </div> 
            </div>
        
             <button> Let's go!  </button>
            </div>
        </>
    )
}
export default Signup;