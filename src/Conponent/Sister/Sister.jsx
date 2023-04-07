import React, { useContext } from 'react';
import { MoneyConttext } from '../Gandpha/Gandpha';

const Sister = () => {
    const [Money] = useContext(MoneyConttext);
    return (
        <div>
            <h2>This is Sister</h2>
            <p><small>
                grandpha money:{Money}
                </small></p>
        </div>
    );
};

export default Sister;