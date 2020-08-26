import React from 'react';
import { Link } from 'react-router-dom';


const Nav =() => {
    return (
        <nav>
            <h3>Register/Login</h3>
            <ul className='nav-Links'>
                <Link to='/Form'>
                    <li>Register</li>
                </Link>
                <Link to='/'>
                    <li>Login</li>
                 </Link>
            </ul>
        </nav>
    )
}

export default Nav