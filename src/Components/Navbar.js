import React from 'react'
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useAuth0 } from "@auth0/auth0-react";
 
 
 


export const Navbar =  ({cart,isAuthenticated, user}) => {
 
  const [showmobilenav, setshowmobilenav] = useState(false);
  
 
    const { loginWithRedirect } = useAuth0();
    const { logout } = useAuth0();
 
 
  
  return (
    <div>
      {showmobilenav? (<div className="mob-navbar d-flex  flex-column gap-5" style={{height:"80vh", width:"100vw", position:"fixed", zIndex:"999" }}>
        <div className="mob-navbar-upper d-flex flex-row align-items-center justify-content-between" style={{   height:"40px", padding:"40px 20px 0 20px"}}>

      <span className='p-2 ' style={{fontSize:"larger", color:"white", border:"1px gray solid"}}> SHOPMORE</span>
      <div className="bars-menu">
                <button className='btn' style={{fontSize:"bold"}} onClick={() => setshowmobilenav(!showmobilenav)}><i className="fa-solid fa-xmark" style={{color: "#ffffff",fontSize:"x-large"}}></i></button>
              </div>
              
        </div>
        <div className="verticle-navbar d-flex flex-column gap-4 align-items-center mt-5" style={{fontFamily:"sans-serif"}} >
          <Link   to= "/"  onClick={() => setshowmobilenav(false)} > Home</Link>
            <Link to= "/productlist" onClick={() => setshowmobilenav(false)} > Shop All</Link>
           
          <Link to= "/about" onClick={() => setshowmobilenav(false)} > About</Link>
            {isAuthenticated ? <span>{user.name}</span> : ''}
          {isAuthenticated ? <button className='btn btn-primary' onClick={() => logout({ logoutParams: { returnTo: window.location.origin } })}>
      Log Out
    </button> : <button  onClick={() => loginWithRedirect()}  className='btn btn-warning'> Log in</button> }
            
             
                 
        </div>
       
      </div>) : (<div style={{height:"70px", backgroundColor:" transparent", position:"fixed" , backdropFilter:"blur(10px)" , top: 0, left: 0, right: 0, zIndex: 999}} className={`navbar `}>
             <div className = {`navbar-content   d-flex flex-row   align-items-center justify-content-between `} style={{width:"100vw" , padding:"0 50px 0 50px"}}>

             
            
              <div className="center-Shopmore">
                <span className='p-2' style={{fontSize:"larger", border:"1px gray solid"}}> SHOPMORE</span>
              </div>
              <div className="home-cart d-flex flex-row align-items-center gap-5 ">
              <div className="navbar-content home d-flex flex-row gap-5">
                   <Link to="/"> HOME</Link>
                   <Link to="/productList"> SHOP ALL</Link>

              </div>
              <div className="cart navbar-content d-flex flex-row gap-5 align-items-center">
             <Link to="/cart"><i className="fa-solid fa-cart-shopping"></i> <sup>{cart.length}</sup> </Link>
              <Link to="/about">About</Link>
              {isAuthenticated ? <span>{user.name}</span> : ''}
              {isAuthenticated ?<button className='btn btn-primary' onClick={() => logout({ logoutParams: { returnTo: window.location.origin } })}>
      Log Out
    </button> :  <button onClick={() => loginWithRedirect()}className='btn btn-warning'> Log in</button>}
              
              
             
              
              </div>
              
              </div>
              <div className="menu-bars-cart d-flex flex-row gap-2 align-items-center">

              <Link to="/cart"><i className="fa-solid fa-cart-shopping"></i> <sup>{cart.length}</sup> </Link>
              <div className="bars-menu ">
                <button className='btn' style={{fontSize:"bold"}} onClick={() => setshowmobilenav(!showmobilenav)}><i className="fa-solid fa-bars"></i></button>
              </div>
              </div>

              
              </div>
        </div>
         )}
      

        

         
    </div>
  )
}
export default Navbar;
