import React from 'react';
import Friend from '../Friend/Friend';

const Cousen = ({childrien,hasfriend}) => {
    return (
        <div>
            <h2>This is Cousin</h2>
            <p>{childrien}</p>
    {hasfriend && <Friend></Friend>}
        </div>
    );
};

export default Cousen;