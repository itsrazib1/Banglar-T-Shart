import React from 'react';
// import Tshart from '../Tshart/Tshart';

const Cart = ({cart,haddelremovetocart}) => {
    return (
        <div>
            <h2>Order Summary : {cart.length}</h2>
            {
                cart.map(tshart => <p
                     key={tshart._id}>{tshart.name} <button onClick={()=>haddelremovetocart(tshart._id)}>X</button> </p>)
            }
        </div>
    );
};

export default Cart;
