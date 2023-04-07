import React, { createContext, useState } from 'react';
import Father from '../Father/Father';
import Uncle from '../Father/Uncle/Uncle';
import Anty from '../Father/Uncle/Anty/Anty';
import './Gandpha.css'
 
export const Ringcontext = createContext('Gold');
export const MoneyConttext = createContext(0);

const Gandpha = () => {
    const Ring ='Daimond';
    const [Money,setmoney] = useState(0);
    
    return (
        <div className='Gandpha'>
            <h2>Gandpha</h2>
         <MoneyConttext.Provider value={[Money,setmoney]}>
         <Ringcontext.Provider value='Golden Ring'>
         <section className='flex'>
                <Father Ring={Ring}></Father>
                <Uncle></Uncle>
                <Anty></Anty>
            </section>
         </Ringcontext.Provider>
         </MoneyConttext.Provider>
        </div>
    );
};

export default Gandpha;