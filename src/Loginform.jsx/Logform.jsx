import { React } from 'react';
function Logform(){
    return (
        <>
             <div class="column"> 
             <div className="logform">
                <form className="login-form"/>
                    <input type="text" className="login-form-input email" name="Email" placeholder="Email address"/>
                    <div>
                    <input type="text" className="login-form-input password" name="Password" placeholder="Password"/>
                    </div>
                    

            <button type="submit" className="login">  Log In </button> 
             <p></p><href a="forgot password"> Forgot password?  </href>   
        </div>
        </div>
        </>
    )
}
export default Logform;