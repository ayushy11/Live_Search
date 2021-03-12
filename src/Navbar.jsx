import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
    <>
        <div className='menu-style'>          
        <Link exact activeClassName="active_class" to="/">Search</Link>
        </div>
    </>
    );
};

export default Navbar;