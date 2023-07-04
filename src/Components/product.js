 
import React from 'react'
import { Link } from 'react-router-dom';
export const Product = ({product, addToCart,openProduct}) => {
  return (
   <Link  to="/productpage" onClick={(e) => openProduct(product)}> <div className='product position-relative   ' >
   <div className=" single-product d-flex flex-column   "  >
        <img  className='rounded' style={{width:"100%", objectFit:"cover", height:"100%"}} src={product.image} alt="" />
   </div>
          <h5  className='text-center my-2' style={{fontFamily:"monospace"}}> {product.name}</h5>  
       <div className="price-cart-btn d-flex flex-row flex-wrap justify-content-center align-items-center mt-3">

        <h5 className='' style={{fontFamily:"monospace"}}>  &#x20b9;{product.price}</h5>
        
       </div>
</div></Link> 
  )
}
export default Product;
