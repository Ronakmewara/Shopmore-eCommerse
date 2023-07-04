import React from 'react'
import women from "../images/women-wearingwhite-shopforwomen.jpg"
import men from "../images/shopformen-lightblue.jpg"

export const Discover = () => {
  return (
    <div className='container'>
         <div className="descoversec  container my-5">
            <h2> Shop <br/> Accordingly.  </h2>
             
            
        </div>
        <div className="  category d-flex flex-wrap my-4 gap-3 flex-row">
            <div className="men position-relative">
                <img className='img1' style={{width:"100%", height:"100%", objectFit:"cover", backgroundRepeat:"no-repeat"}} src={men} alt="" />
                <div className="forhimshop position-absolute him d-flex align-items-center flex-column" style = {{   top:"41%", right:"41%"}}>
                
                
                <button className="forbtn"> FOR HIM</button>
                </div>
            
            </div>
            <div className="women position-relative">
                <img className='img2' style={{width:"100%", height:"100%", objectFit:"cover", backgroundRepeat:"no-repeat",  }}  src={women} alt="" />
                <div className="forhimshop position-absolute her d-flex align-items-center flex-column" style = {{   top:"41%", right:"41%"}}>

                     
                    <button className= "forbtn">  FOR HER</button>
                    </div>
          
            </div>

        </div>
        
        <div className="descoversec my-5 ">
            <h2> POPPULAR PRODUCTS</h2> 
             
            
        </div>
    </div>
  )
}
export default Discover
