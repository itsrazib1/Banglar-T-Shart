import React, { useContext } from 'react';
import { Ringcontext } from '../Gandpha/Gandpha';

const Speicial = ({}) => {
    const Angti = useContext(Ringcontext);
    return (
        <div>
            <h2><small>Speicial :{Angti}</small>  </h2>
        </div>
    );
};

export default Speicial;