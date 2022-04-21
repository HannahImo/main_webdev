import { SiInstagram } from 'react-icons/si';
import { IconContext } from 'react-icons';
import { SiFacebook } from 'react-icons/si';
function FollowUs(){
    return(
        <IconContext.Provider value={{ className:"icons"}}> 
       <>
        <div className='enquiries'>
        <table>
            
            <tr>
                <th style={{color: "#01407A"}}> Sitemap </th>
                <br></br>
                <th style={{color: "#01407A"}}> Contact Us </th>
                <br></br>
                <th style={{color: "#01407A"}}> FollowUs </th>
            </tr>
            <tr>
                <td>Donors</td>
                <br></br>
                <td> Lorem Ispodim sit amir</td>
                <br></br>
                <td> <SiInstagram /> <SiFacebook /> </td>
            </tr>
            
            
            <tr>
                <td>NonProfit</td>
                <br></br> <td> Phone:0901589325</td>
            </tr>
            <tr>
                <td> SMEs </td>
            </tr>
            <tr>
                <td> News </td>
                <br></br>
                <td> Email: info@gmail.com</td>
                </tr>
            
                <td> About </td> <br></br>
        </table>
        <div className='trans-btn'> 
        <button type='submit'> Translate </button>
        </div>
        </div>
        </>
        </IconContext.Provider>
            
    )
}
export default FollowUs;