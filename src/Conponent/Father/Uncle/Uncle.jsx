import React, { useContext } from 'react';
import Cousen from '../../Cousen/Cousen';
import { MoneyConttext } from '../../Gandpha/Gandpha';

const Uncle = ({}) => {
    const [Money,setmoney] = useContext (MoneyConttext)
    return (
        <div>
            <h2>Uncle</h2>
            <p>
                <small>
                    Grandpa money : {Money}
                </small>
                <br />
                <button onClick={()=>setmoney(Money+1000)}>Send 1000 tk</button>
            </p>
            <section className='flex'>
                <Cousen>Nabil</Cousen>
                <Cousen>Nabila</Cousen>
            </section>
        </div>
    );
};

export default Uncle;