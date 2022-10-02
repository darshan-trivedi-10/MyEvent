import React, { useState } from 'react'
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom'
import './navbar.css'

const Navbar = ({ singIn }) => {

    const user = useSelector((state) => state.authReducers.authData?.user);
    return (
        <>
            <div className='navbar'>
                <nav >
                    <Link to='/'>
                        <img src='https://allevents.in/img/ae-logo-website.png' alt='logo' width='130px' />
                    </Link>
                    <h6>
                        <Link to='/createevent' style={{ textDecoration: 'none', color: 'white' }}>
                            Create Event
                        </Link>
                    </h6>
                    {
                        (singIn !== false) &&
                        <Link to={user ? `/user/${user._id}` : "/auth"} style={{ textDecoration: 'none', color: 'white' }}>
                            <h6>
                                {user ? user.firstname : 'Sign In'}
                            </h6>
                        </Link>
                    }
                </nav>
            </div>
        </>
    )
}

export default Navbar;