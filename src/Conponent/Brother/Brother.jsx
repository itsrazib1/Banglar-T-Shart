import React, { useContext } from 'react';
import { Ringcontext } from '../Gandpha/Gandpha';

const Brother = () => {
    const Angti = useContext(Ringcontext);
    return (
        <div>
            <h2>This my Brother</h2>
            <small>{Angti}</small>
        </div>
    );
};

export default Brother;