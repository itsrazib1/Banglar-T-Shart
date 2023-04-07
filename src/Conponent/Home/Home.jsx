import React, { useState } from "react";
import { useLoaderData } from "react-router-dom";
import Tshart from "../Tshart/Tshart";
import Cart from "../Cart/Cart";
import './Home.css'
import toast from 'react-hot-toast';

const notify = () => toast('Here is your toast.');

const Home = () => {
  const tshart = useLoaderData();
  const [cart,setCart] = useState([]);


  const haddelAddtocart = tshart => {
    const exsiste = cart.find(ts => ts._id === tshart._id );
    if (exsiste){
        toast('You Have Alrady Added')
    }
    else{
        const newCart = [...cart,tshart];
        setCart(newCart);
    }
    
  }

  const haddelremovetocart = id => {
    const remaining = cart.filter
    (ts => ts._id !== id);
    setCart(remaining);
  }

  return (
    <div className="HomeContainer">
      <div className="TshartContainer">        
        {tshart.map((tshart) => (
          <Tshart key={tshart._id}
           tshart={tshart}
           haddelAddtocart={haddelAddtocart}
           ></Tshart>
        ))}
      </div>
      <div className="cartContainer">
<Cart
cart={cart}
haddelremovetocart={haddelremovetocart}
></Cart>
      </div>
    </div>
  );
};

export default Home;
