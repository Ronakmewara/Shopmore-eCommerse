 
import React from 'react'
import Footer from '../Homepage-Components/Footer';

export const Productpage = ({clickedProduct, addToCart, showpopup}) => {
        const Productprice = clickedProduct.price;
  return (
    <div style={{marginTop:"100px"}}>
         <div className="productsection container ">

<div className="imgsection">
    <img src={clickedProduct.image} alt="" />
</div>
<div className="detailssection">
    <h1 className='my-2'>
      {clickedProduct.name}
    </h1>
    <p className='my-4'>
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate aspernatur nostrum error eum repellendus, incidunt dolores expedita debitis quia aperiam velit cum atque dignissimos sapiente voluptatibus maiores laborum necessitatibus pariatur!
    </p>
    <p className='text-success'>IN STOCK</p>
    <h1 className='my-4'>   &#x20b9;{Productprice}</h1>
    <div className="choosediv d-flex gap-5 flex-wrap align-items-center">

    <div className="colordiv d-flex ">
                <h3 className= ''> Color :</h3>
        <ul className='colors d-flex flex-row gap-4 mt-1'>
            
            <li> </li>
            <li> </li>
            <li> </li>
        </ul>
    </div>
    <div style={{fontSize:"large"}} className="sizediv d-flex align-items-center gap-3 ">
        <h3> Size</h3>
        <select className='p-2 text-lg mb-2' name="" id="">
            <option value="">S</option>
            <option value="">M</option>
            <option value="">L</option>
        </select>
    </div>
    </div>

    
    <button onClick={() => addToCart(clickedProduct)} className='btn btn-warning my-5'> Add To Cart</button>
</div>{showpopup &&  <div className={`${showpopup ? ` `: ` hidden`} popup-container`}>
            <div className="popup">
                <p> Item Added to the cart ! </p>
            </div> </div>}
</div>
<div className="empty my-4"  style={{width:"100vw",border:"1px solid black"}}></div>
            <Footer/>
</div>
     
  )
}
export default Productpage;
