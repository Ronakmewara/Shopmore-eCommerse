import React from 'react'
import { BrowserRouter as Main , Routes , Route } from 'react-router-dom';
import "./App.css"
 
import Homepage from "./Components/Homepage"
import { useState } from 'react';
import ProductList from "./Components/productList";
 import blacktshirt from "./images/black-tshirt.jpg";
 import paradiseTshirt from "./images/gooke-tshirt.jpg";
 import lightblue from "./images/lightblue-tshirt.jpg";
 import important from "./images/important-tshirt.jpg";
 import alwaysinsp from "./images/always-blue.jpg";
  import { About } from './Components/About';
 import plainwhite from "./images/plaine-white.jpg";
 import wateris from "./images/waterislife.jpg";
 import redmarlon from "./images/redtment.jpg";
 import marlongirls from "./images/orangewmen.jpg";
 
 
import Cart from './Components/Cart';
 
import Navbar from './Components/Navbar';
import Productpage from './Components/Productpage';
import { useAuth0 } from "@auth0/auth0-react";
 
  



export const App = () => {

  const { user, isAuthenticated, isLoading } = useAuth0();
 
  const [clickedProduct, setclickedProduct] = useState('');
 
  const products = [
    {
      id : 1,
      name : "H&M Tshirt For Men",
      image: blacktshirt,
      size: "S",
      price: "299/-",
      quantity : 1,
      color : "black"

    },
    {
      id : 2,
      name : "Paradise - Men Tshirt",
      image:paradiseTshirt,
      size: "M",
      quantity : 1,
      color : "Blue",
      price: "1899/-"

    },
    {
      id : 3,
      name : "Roadster Men",
      image: lightblue,
      size: "S",
      quantity : 1,
      color : "blue",
      price: "550/-"

    },
    {
      id : 4,
      name : "Funky Tshirt",
      image: important,
      size: "M",
      quantity : 1,
      color : "Black",
      price: "150/-"

    },
    {
      id : 5,
      name : "Wrogn - Men",
      image: alwaysinsp,
      size: "L",
      quantity : 1,
      color : "Blue",
      price: "999/-"

    },
    {
      id : 6,
      name : "White Tshirt",
      image: plainwhite,
      size: "L",
      quantity : 1,
      color : "White",
      price: "2299/-"

    },
    {
      id : 7,
      name : "here&now - Black",
      image: wateris,
      size: "L",
      quantity : 1,
      color : "Black",
      price: "1299/-"

    },
    {

    
      id : 8,
      name : "Marlin - Tshirt",
      image: redmarlon,
      size: "M",
      quantity : 1,
      color : "Red",
      price: "900/-"

    },
    {
      id : 9,
      name : "Roadster - Women",
      image: marlongirls,
      size: "S",
      quantity : 1,
      color : "Orange",
      price: "599/-"

    },

  ]
  const [cart, setcart] = useState([]);
  const [showpopup, setshowpopup] = useState(false);


  const addToCart = (product) => {
     if(isAuthenticated){
       setcart([...cart , product])
        
         setshowpopup(true)

     } else{
      alert('Please Login to Continue')
     }
     
      
    
      
      
    }
    if(showpopup){
      setTimeout(() => {
        setshowpopup(false)
      }, 5000);
    }

  const handleDelete = (itemId) => {
        const updatedCart = cart.filter((item) => item.id !== itemId  );
        setcart(updatedCart);
  }
  const openProduct =  (product) => {
    setclickedProduct(product)
   
}
const addQty = (itemId) =>{
      const updatedCart = cart.map((item) => {
        if(item.id === itemId && item.quantity < 6){
          const updatedItem = {...item , quantity: item.quantity + 1};
          return updatedItem;
        }
        return item;
      });
      setcart(updatedCart);
     
}
const substractQty = (itemId) =>{
  const updatedCart = cart.map((item) => {
    if(item.id === itemId && item.quantity > 1){
      const updatedItem = {...item, quantity: item.quantity - 1 }
      return updatedItem;
    }
    
    return item;
    
  } )
  setcart(updatedCart);
}
 
 

  return (
    <div> 
      <Main>
     
      <Navbar isAuthenticated = {isAuthenticated} user = {user}  cart = {cart}/>
      <Routes>
        <Route exect path='/' element = {<Homepage  />}/>
        <Route exact path = "/productlist" element = {<ProductList products = {products}    addToCart = {addToCart}  openProduct = {openProduct} showpopup = {showpopup}      />}  /> 
        <Route exact path = "/cart" element = {<Cart isAuthenticated={isAuthenticated} cart = {cart} setcart = {setcart}  onDelete={handleDelete} addQty={addQty} substractQty={substractQty}       />}/>
        <Route exact path = "/productpage" isAuthenticated={isAuthenticated} element = {<Productpage  clickedProduct = {clickedProduct} addToCart = {addToCart}   showpopup = {showpopup}/>  }/>
        <Route exect path='/about' element ={<About/>} />

      </Routes>

     
     
      </Main>
    </div>
  )
}
export default App