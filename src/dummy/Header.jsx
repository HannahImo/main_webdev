import { Link } from "react-router-dom";
function Header(){
    return(
        <>
        <div className="app-logo"> 
        <h1><b>GET</b><em>support</em></h1>
        </div>
            <div> 
            <ul className="header-menu"> 
            <li className="header-menu-list-item" > 
            <Link to="/"> Home </Link>
                </li>
            <li className="header-menu-list-item">
            <Link to="Donor"> Donor </Link>
                </li> 
            <li className="header-menu-list-item">
            <Link to="NonProfitSME"> NonProfit $ SME </Link>
                    </li>
            <li className="header-menu-list-item">
                <Link to="AboutUs"> About </Link>
                </li>
            <li className="header-menu-list-item">
            <Link to="/Authform"> Get help </Link>
            </li>
            </ul>
            
            </div>
        </>
    )
}
export default Header;