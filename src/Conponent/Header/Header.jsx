import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css'
const Header = () => {
    return (
        <nav>
            <Link className='mr-10' to='/' >Home</Link>
            <Link className='mr-10' to='/review' >Order Review</Link>
            <Link className='mr-10' to='/Gandpha' >Gandpha</Link>
            <Link className='mr-10' to='/About' >About</Link>
            <Link className='mr-10' to='/Contract' >Contract</Link>
         
        </nav>
    );
};

export default Header;