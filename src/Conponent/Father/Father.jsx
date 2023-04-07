import React from 'react';
import Myself from '../Myself/Myself';
import Brother from '../Brother/Brother';
import Sister from '../Sister/Sister';

const Father = ({Ring}) => {
    return (
        <div>
            <h2>Father</h2>
            <section className='flex'>
                <Myself Ring={Ring}></Myself>
                <Brother></Brother>
                <Sister></Sister>
            </section>
        </div>
    );
};

export default Father;