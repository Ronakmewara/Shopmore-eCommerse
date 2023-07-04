import React from 'react'
import blacktshirt from "../images/black-tshirt.jpg";
import paradiseTshirt from "../images/gooke-tshirt.jpg";
import lightblue from "../images/always-blue.jpg";

export const Collection = ({cart}) => {
  return (
    <div   >
    <div className="container products d-flex flex-row flex-wrap align-items-center  justify-content-around position-relative">
        <div className="product1 ">
            <img src={blacktshirt} alt="" />
            <h5 style={{color:"#090909b5", marginTop:"5px",fontFamily:"serif"}}> Black Tshirt</h5>
            <h5 style={{color:"#090909b5"}}>&#x20B9; 2500/- </h5> 
            <div className="productbtn">
                        <ul>
             <li><button style={{fontSize:"large"}}  className='btn' ><i className="fa-regular fa-heart"></i></button></li>
             <li> <button  style={{fontSize:"large"}} className='btn'> <i className="fa-solid fa-cart-shopping"></i></button></li>
                 
                        </ul>
            </div>
        </div>
        <div className="product1">
        <img src={paradiseTshirt} alt="" />
        <h5 style={{color:"#090909b5", marginTop:"5px",fontFamily:"serif"}}> Paradise - Tshirt</h5>
            <h5 style={{color:"#090909b5"}}>&#x20B9; 499/- </h5>
            <div className="productbtn">
                        <ul>
             <li><button  style={{fontSize:"large"}} className='btn' ><i className="fa-regular fa-heart"></i></button></li>
             <li> <button  style={{fontSize:"large"}} className='btn'> <i className="fa-solid fa-cart-shopping"></i></button></li>
                 
                        </ul>
            </div>
        </div>
        <div className="product1">
        <img src={lightblue} alt="" />
        <h5 style={{color:"#090909b5", marginTop:"5px",fontFamily:"serif"}}> Light Blue Tshirt</h5>
            <h5 style={{color:"#090909b5"}}>&#x20B9; 1399/- </h5>
            <div className="productbtn">
                        <ul>
             <li><button  style={{fontSize:"large"}} className='btn'><i className="fa-regular fa-heart"></i></button></li>
             <li> <button  style={{fontSize:"large"}} className='btn'> <i className="fa-solid fa-cart-shopping"></i></button></li>
                 
                        </ul>
            </div>
        </div>
         
        
        

    </div>

    

</div>
  )
}
export default Collection;
