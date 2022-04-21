import { FaDonate } from "react-icons/fa";
import { IconContext } from "react-icons";

function Logo(){
    return (
        <IconContext.Provider value={{ className:"icons"}}> 
        <>
        <div className="dlogo">
        <FaDonate size="10em" color="#01407A"/>
        </div>
        </>
        </IconContext.Provider> 
    )
}
export default Logo;