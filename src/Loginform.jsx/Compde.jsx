import Info1 from "./Info1";

function Compde(){
    return(
        <>
        <Info1/>
        <h1> Company Details </h1>
        <p> Enter your business's CAC number and we will fetch <br></br> the business details for you</p>
        <input type="text" className="Compde-form-input CAC" name="CAC number" placeholder="CAC number"/> 
        <br></br>
        <input type="text" className="Compde-form-input name" name="Company name" placeholder="Company name"/> 

        <p> <button type="submit" > Submit </button> </p>
        </>
    )
}
export default Compde;