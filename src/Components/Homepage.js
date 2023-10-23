import React  from "react";
import { Link } from "react-router-dom";
import shopnow from "../images/june Wallpaper.jpg";
 
import Discover  from "../Homepage-Components/Discover";
import Collection from "../Homepage-Components/Collection";
import Tshirtsale from "../Homepage-Components/Tshirtsale";
import Footer from "../Homepage-Components/Footer";
 

export const Herosection = ({ cart }) => {
  
   
  
  return (
    <div>
      <div
        className="hero-img-content position-relative"
        style={{ height: "100vh", width: "100vw" }}
      >
        <img
          src={shopnow}
          alt=""
          style={{
            height: "100%",
            width: "100%",
            backgroundRepeat: "no-repeat",
            objectFit: "cover",
          }}
        />
        <div
          className="imagecontent position-absolute d-flex flex-column align-items-center gap-3"
          style={{
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
          }}
        >
          <h3 className="summercollection">#NewSummerCollection2023</h3>
          <h1>NEW ARRIVAL SALE</h1>
          <Link to="/productlist">
            <button className="btn btn-warning">SHOP NOW</button>
          </Link>
        </div>
      </div>
      <Discover />
      <Tshirtsale />
      <Collection cart={cart} />
      <Footer />
       
    </div>
  );
};
export default Herosection;
