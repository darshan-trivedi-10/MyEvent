import React from 'react'
import './navbar.css'


const Navbar = ({ singIn }) => (
    <>
        <div className='navbar'>
            <nav >
                <img src='https://allevents.in/img/ae-logo-website.png' alt='logo' width='130px' />
                <h6>
                    Create Event
                </h6>
                {
                    (singIn !== false) && <h6>Sign In</h6>
                }
            </nav>
        </div>
    </>
)

export default Navbar