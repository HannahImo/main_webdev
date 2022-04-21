import FollowUs from "./FollowUs";

function Authform(){
    return (
        <>
        
          <div className="rectangle"> 
          <h1> Never Miss A Thing </h1>
           
          <div>
            <form className="Banner-signup">
             <div>
               <input type="text"  placeholder="Fullname" />
              </div>
              <div>
              <input type="text"  placeholder="Email address" />
              </div>
              </form>
             <div>
              <button type="submit" className='Banner-btn'> Subscribe </button>
             </div>
            
             </div> 
        </div>

       <p></p> <FollowUs/>  
      </>
  )
}     
export default Authform;