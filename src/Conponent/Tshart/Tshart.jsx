import React from 'react';
import './Tshart.css'

const Tshart = ({tshart,haddelAddtocart}) => {
    const {_id,price,picture,name,gender }=tshart;
    return (
        <div className='Tshart'>
            <img src={picture} alt="" />
            <h4>{name}</h4>
            <p>{price} $ </p>
            <button onClick={ () => haddelAddtocart (tshart)}>BUY NOW</button>
        </div>
    );
};

export default Tshart;