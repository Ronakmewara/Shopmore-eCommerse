import React from 'react'
import tshirtsale from "../images/sale-bamboo.jpg"

export const Tshirtsale = () => {
  return (
    <div>
        
        <div className="tshirtsec my-5 position-relative d-flex align-items-center justify-content-center ">
            
                <img src={tshirtsale} alt="" />
                <div className="saleheading position-absolute d-flex align-items-center flex-column gap-3">
                                 
                <h3 style={{fontFamily:"monospace"}}> BUY THE LATEST FASHION NOW</h3>
                <h1  style={{fontWeight:"bolder"}}>  THE SALE IS ON !</h1>
                <button style={{border:"none"}} className='btn btn-warning'> BUY NOW</button>
                </div>
        </div>

    </div>
  )
}
export default Tshirtsale;