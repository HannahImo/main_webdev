import Menuinfo from '../dummy/Menuinfo';
import Image from '../dummy/image';
import Gethelp from './Gethelp';

function Home(){
    return(
        <>
        <Menuinfo/>
        <Image/>
        <Gethelp/>
        {/* <div className="app-header-text">
            <h1>Donation Made Easy </h1>
         <p> <h6> Available to all Non profits and <br></br> SME that are recgonized by the government.</h6> </p>  
        </div>
         <div className="app-header-button">
            <p> <button type="submit" className="app-header-button">  <Link to="Get Started"> Get Started </Link>  </button> </p>
        </div> */}
        </>
    )
}
export default Home;