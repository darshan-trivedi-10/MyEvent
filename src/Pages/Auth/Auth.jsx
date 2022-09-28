import React from 'react'
import './Auth.css'
import loginBanner from '../../image/loginBanner.jpg'
import logo from '../../image/ae-logo-website.webp'

const Auth = () => {
    return (
        <div className='authPage'>
            <img src={loginBanner} alt='loginBanner' />
            <div className='singUp'>
                <h1>Welcome to the MyEvent</h1>
                <h3>
                    <pre>Publish, Promote & Sell your</pre>
                    <center>
                        <pre>events!</pre>
                    </center>
                </h3>
                <div className='login'>
                    <input type='email' placeholder='Enter Your Email ' />
                    <input type='password' placeholder='Enter Your Password' />
                    <button className='login-btn'>Submit</button>
                    <h6>Or</h6>
                    <p>Sing With Google</p>
                </div>

            </div>
        </div>
    )
}

export default Auth
