import React, {useEffect} from 'react'
import women from "../images/women-wearingwhite-shopforwomen.jpg"
import men from "../images/shopformen-lightblue.jpg"
import AOS from "aos";
import "aos/dist/aos.css";
export const Discover = () => {
    useEffect(() => {
        AOS.init();
        AOS.refresh();
      }, []);
  return (
    <div className='container'>


         <div className="descoversec  container my-5">
            <h2> Shop <br/> Accordingly.  </h2>
             
            
        </div>
        <div className="  category d-flex justify-content-center flex-wrap my-4 gap-3 flex-row">
<div data-aos="fade-right"
     data-aos-offset="400"
    >
            <div className="men position-relative">
                <img className='img1' style={{width:"100%", height:"100%", objectFit:"cover", backgroundRepeat:"no-repeat"}} src={men} alt="" />
                <div className="forhimshop position-absolute him d-flex align-items-center flex-column" style = {{   top:"41%", right:"41%"}}>
                
                
                <button className="forbtn"> FOR HIM</button>
                </div>
            
            </div>
                    </div>
                    <div data-aos="fade-left"
     data-aos-offset="300"
    >

            <div className="women position-relative">
                <img className='img2' style={{width:"100%", height:"100%", objectFit:"cover", backgroundRepeat:"no-repeat",  }}  src={women} alt="" />
                <div className="forhimshop position-absolute her d-flex align-items-center flex-column" style = {{   top:"41%", right:"41%"}}>

                     
                    <button className= "forbtn">FOR HER</button>
            </div>

        </div>
        
    </div>
      
</div>
    </div>
  )
}
export default Discover
