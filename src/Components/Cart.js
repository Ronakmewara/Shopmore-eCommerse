import React from "react";
import { Link } from "react-router-dom";
import Footer from "../Homepage-Components/Footer";

export const Cart = ({ cart, isAuthenticated, onDelete, addQty , substractQty, productqty, isLoggedIn, userData }) => {

    const subTotal = cart.reduce((total, cartItem) => {
        return total + parseFloat(cartItem.price)* cartItem.quantity;
    },0);
    const shippingDiscount = Math.round((subTotal*0.1*100) / 100);
    const Total = subTotal - shippingDiscount;

    const handleDelete = (itemId) => {
        onDelete(itemId);
    }
    const handleAddQty = ( itemId) => {
      addQty(itemId);
    }
    const handleSubstractQty = (itemId) => {
        substractQty(itemId);
    }

     
  return (
    <div style={{marginTop:"100px"}}>
     { isAuthenticated ?  <>
      
      <div className=" text-dark heading">
        <h2 className="my-4 text-center"> YOUR BAG</h2>
      </div>
      <div className="continue container d-flex flex-row justify-content-between align-items-center">
        <div
          className="addshop d-flex flex-row gap-4"
          style={{ fontFamily: "Times New Roman", fontSize: "larger" }}
        >
          <button className="btn btn-warning">
            {" "}
            shopping Bag({cart.length})
          </button>
          <button className="btn btn-warning">
            <a style={{ textDecoration: "none", color: "black" }} href="">
              Your Wishlist
            </a>{" "}
          </button>
        </div>
        <Link to="/">
          {" "}
          <button className="btn btn-warning">
            Continue Shopping &rarr;
          </button>{" "}
        </Link>
      </div>

      {/*  map the products  */}

      {cart.map((cartItem) => {
       const productPrice =  parseFloat(cartItem.price)*cartItem.quantity;
        
        return (
          <>
            <div className="maincart flex-wrap gap-3 d-flex flex-row   justify-content-around my-5">
              <div
                style={{ width: "1200px"    }}
                className="productcart border rounded p-2"
              >
                <div className="img-details d-flex flex-wrap justify-content-between">
                  <div className="img-color d-flex gap-2">
                    <div
                      style={{ width: "200px", height: "200px" }}
                      className="productimage"
                    >
                      <img
                        className="p-2"
                        style={{
                          objectFit: "cover",
                          height: "100%",
                          width: "100%",
                          backgroundRepeat: "no-repeat",
                          borderRadius: "15px",
                        }}
                        src={cartItem.image}
                        alt=""
                      />
                    </div>
                    <div className="details">
                      <ul
                        className="d-flex  flex-column flex-wrap gap-3 "
                        style={{ listStyleType: "none", fontSize: "1.2rem" }}
                      >
                        <li>
                          {" "}
                          <b> Product :</b> {cartItem.name}{" "}
                        </li>

                        <li>
                          {" "}
                          <b> ID : </b> {Date.now()}
                        </li>
                        <div className="cartcolor d-flex flex-row align-items-center gap-2">
                          <li>
                            {" "}
                            <b>Color :</b>  {cartItem.color}  
                          </li>
                          <li> </li>
                        </div>
                        <li>
                         <span> <b>Size:</b> </span>   {cartItem.size}  
                        </li>
                        <li>
                           <button className="btn btn-danger" onClick={ () => handleDelete(cartItem.id)}> Delete</button> 
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div
                    className="image-price my-4 "
                    style={{ marginRight: "50px" }}
                  >
                    <ul
                      className="d-flex flex-column gap-5   "
                      style={{
                        listStyleType: "none",
                        fontWeight: "bold",
                        fontSize: "1.2rem",
                        margin:"0 0 0 136px"
                      }}
                    >
                      <div className="qtybutton d-flex flex-row gap-3 align-items-center">
                        <button onClick={() => handleAddQty(cartItem.id)} className="btn btn-warning qtybtn "> + </button>{" "}
                        <span> {cartItem.quantity}</span>
                        <button onClick={() => handleSubstractQty(cartItem.id)} className="btn btn-warning qtybtn"> -</button>
                      </div>
                      <h3> &#x20B9; { productPrice}</h3>
                    </ul>
                      
                  </div>
                </div>
              </div>
            </div>
          </>
        );
      })}
      {cart.length > 0 ?  <div style={{width:"400px", margin:"10px auto"}} className=" ordersummery border rounded p-2">
                <h3 className="text-center  " style={{margin:"20px 0px 30px 0px"   }}> <u> ORDER SUMMERY</u> </h3>
                <ul className=" d-flex flex-column gap-4" style={{listStyleType:"none", fontSize:"1.3rem"   }}>
                  <div className="subtotal d-flex flex-row justify-content-around">
                    <span> SubTotal : </span>
                    <span> <b> &#x20B9;{Total}</b></span>
                  </div>
                  <div className="shipping-discount d-flex flex-row justify-content-around">
                    <span> Shipping Discount : </span>
                    <span> <b>  &#x20B9;{shippingDiscount}</b></span>
                  </div>
                    
                        <div className="payable-amount  d-flex flex-row justify-content-around">
                          <span>Payable Amount : </span>
                          <span><b> &#x20B9;{Total}/-</b></span>
                        </div>
                    {/* <li style={{borderBottom:"1px dotted black", paddingBottom:"15px"}}> Shipping Discount : <b style={{marginLeft:"70px"}}>/- </b> </li> */}
                    {/* <li> <b> Payable Amount  : <span style={{marginLeft:"50px"}}>&#x20B9;{Total}/-</span></b> </li> */}
                    <button className="btn btn-warning" > CHECKOUT NOW</button>
                     
                </ul>


            </div> : <h2 className="text-center" style={{margin:"150px auto"}}> Your Cart is Empty !</h2>   }
             
      </> : <div className = "d-flex justify-content-center align-items-center" style={{height:"50vh", width:"100vw"}} ><h1> Please Login To Access The Cart!</h1> </div>}
      <div style={{width:"100vw", border:"1px black solid"}} className="brdr my-4 ">

      </div>
      <Footer/>
    </div>
  );
};
export default Cart;
