import React from 'react';
import Cousen from '../../../Cousen/Cousen';

const Anty = () => {
    return (
        <div>
            <h2>Anty</h2>
            <section className='flex'>
                <Cousen>Abir</Cousen>
                <Cousen hasfriend={true}>NIbir</Cousen>
            </section>
        </div>
    );
};

export default Anty;