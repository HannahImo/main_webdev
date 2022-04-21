import { Link } from 'react-router-dom';
import Logo from '../dummy/Logo';
function Menuinfo(){
    return(
        <> 
        <Logo/>
            <div className="app-header-text">
                <h1>Donation <br></br> Made Easy </h1>    
                </div>
            <h6> Available to all Non profits and <br></br> SME that are recgonized by the government.</h6> 
              
            <button className="app-header-button" type="submit">  <Link to="signup"> Get Started </Link>  </button> 
    
        </>
    )
}
export default Menuinfo;