    import React from 'react'
    import Product from './product'
    import { useState } from 'react';
 
import Footer from '../Homepage-Components/Footer';
 
    export const ProductList = ({products , product, addToCart, openProduct, showpopup}) => {
        const [selectedSize, setselectedSize] = useState('');
        const [selectedColor, setselectedColor] = useState('');
        const [selectedPrice, setselectedPrice] = useState('');
        const [searchproduct, setsearchproduct] = useState('');
         
        

        

        const handleSizeChange = (event) => {
                setselectedSize(event.target.value);
        };

        const handleColorChange = (event) => {
                setselectedColor(event.target.value);
        };
        const handlePricechange = (event) => {
                setselectedPrice(event.target.value);
        };

        const filteredProducts = products.filter( (product) => {
            if(selectedSize && product.size !== selectedSize){
                return false;
            }
            if(selectedColor && product.color !== selectedColor){
                return false;
            }
            return true;
        });
        const sortedProducts = [...filteredProducts];
        if(selectedPrice === 'Asc'){
            sortedProducts.sort(( a, b ) => parseFloat(a.price) - parseFloat(b.price));

        }
        if(selectedPrice === 'Dsc'){
            sortedProducts.sort(( a, b) => parseFloat(b.price) - parseFloat(a.price));
        }
       
        

    return (
        <>
         
        <div className=" navbar-list"  >
            

        </div>
        <div className='product-list' style={{marginTop:"100px"}}>

             <h2 style={{fontFamily:"monospace"}}  className='text-center mb-5'> <u>Shop All Products </u> </h2>
            <div className="filters justify-content-around container d-flex flex-row gap-4 flex-wrap">
                <div className="Size">

            <span style={{fontSize:"large"}}> <b>Size:  </b></span>  <select className='p-1' name="" id="" onChange={handleSizeChange}>
                    <option value=""> All Size </option>
                    <option value="S"> S </option>
                    <option value="M"> M </option>
                    <option value="L"> L </option>
                    <option value="XL"> XL </option>
                </select>
                </div>
                <div className="Color">

            <span  style={{fontSize:"large"}}> <b>Color:  </b> </span>  <select className='p-1' name="" id="" onChange={handleColorChange}>
                    <option value=""> All Color </option>
                    <option value="Red"> Red </option>
                    <option value="blue"> blue </option>
                    <option value="Green"> Green </option>
                    <option value="Black"> Black </option>
                    <option value="White"> White </option>
                </select>
                </div>
                <div className="Price">

            <span  style={{fontSize:"large"}}> <b>Price:  </b> </span>  <select className='p-1' name="" id="" onChange={handlePricechange}>
                    <option value=""> All</option>
                    <option value="Dsc"> High to Low </option>
                    <option value="Asc"> Low to High </option>
                    
                </select>
                </div>
                <div className="input">
                    <input type="text" name='search' value={searchproduct}  id="" placeholder='Search Product..' onChange={ (e) =>setsearchproduct(e.target.value)}   />
                     
                </div>
            
            </div>
            <div className=" my-5 container product-list justify-content-center d-flex flex-row gap-4 flex-wrap">

                {sortedProducts.filter((product) => product.name.toLowerCase().includes(searchproduct.toLowerCase())).map( (product) => ( 
                    <div className='d-flex product2  '>

                        <Product key={product.id} product = {product} addToCart = {addToCart} openProduct = {openProduct}/>
                    </div>
                ))}
            </div>
        </div>
        {showpopup &&  <div className={`${showpopup ? ` `: ` hidden`} popup-container`}>
            <div className="popup">
                <p> Item Added to the cart ! </p>
            </div> </div>}
           
            <Footer/>
     
        
        </>
    )
    }
    export default ProductList;
