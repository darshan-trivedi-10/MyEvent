import React from 'react'
import './Auth.css'
import loginBanner from '../../image/loginBanner.jpg'
import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { logIn, logInGoogle, signUp, signUpGoogle, verification } from '../../Redux/actions/authActions'
import { useGoogleLogin } from '@react-oauth/google'


const Auth = () => {

    const verificationReq = useSelector((state) => state.authReducers.verification)
    const signupReq = useSelector((state) => state.authReducers.authData);
    const dispatch = useDispatch();
    const [isSignUp, setIsSignUp] = useState(false);
    const [userData, setUserData] = useState({
        firstname: '',
        lastname: '',
        email: '',
        password: '',
        otp: '',
        companyname: ''
    });


    const [warning, setWarning] = useState('');
    const login = useGoogleLogin({ onSuccess: handleGoogleLoginSuccess })

    function handleGoogleLoginSuccess(tokenResponse) {
        const accesstoken = tokenResponse.access_token;
        if (!isSignUp) {
            dispatch(logInGoogle(accesstoken));
        } else {
            dispatch(signUpGoogle(accesstoken));
        }
        setWarning(signupReq);
    }



    const validateEmail = (email) => {
        return String(email)
            .toLowerCase()
            .match(
                /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
            );
    };

    const checkDetails = () => {
        if (userData.firstname.length === 0 || userData.lastname.length === 0 || userData.password.length === 0 || userData.otp.length === 0) {
            return true;
        }
        console.log(userData.password.length)
        return false;
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        if (validateEmail(userData.email) == null) {
            setWarning('*Please Enter Correct Email Id')
        } else {
            if (isSignUp) {
                if (checkDetails()) {
                    setWarning("Please Fill all the details . . .")
                } else {
                    // alert('signup')
                    dispatch(signUp(userData));
                    console.log(signupReq)
                }
            } else {
                // alert('login')
                dispatch(logIn({
                    email: userData.email,
                    password: userData.password
                }))
            }
        }
    }

    const handleChange = (event) => {
        setUserData({ ...userData, [event.target.name]: event.target.value });
        setWarning('');
    }

    const sendOtp = () => {
        if (validateEmail(userData.email) == null) {
            setWarning('*Please Enter Correct Email Id')
        } else {
            dispatch(verification({ email: userData.email }));
            setWarning(verificationReq);
        }
    }

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
                    {
                        isSignUp && <div>
                            <input type='firstname' name='firstname' value={userData.firstname} placeholder=' firstname' onChange={handleChange} />
                            <input type='lastname' name='lastname' value={userData.lastname} placeholder=' lastname' onChange={handleChange} />
                        </div>
                    }
                    <div>
                        <input type='email' name='email' value={userData.email} placeholder=' Email ' onChange={handleChange} />

                        <input type='password' name='password' placeholder=' Password' onChange={handleChange} />
                    </div>
                    <div>
                        {
                            isSignUp && <input type='text' placeholder=' Enter OTP' name='otp' value={userData.otp} onChange={handleChange} />
                        }
                        {
                            isSignUp &&
                            <input type='business name' name='companyname' placeholder=' Business name' onChange={handleChange} />
                        }
                    </div>
                    <span style={{ cursor: 'pointer', color: "blue", fontWeight: "bolder" }} onClick={() =>
                        setIsSignUp((prev) => !prev)} >
                        {
                            isSignUp ? "Already have account. Login!"
                                : "Don't have an account ? Sign Up"
                        }
                    </span>
                    <div style={{ color: 'red', fontSize: '12px', marginTop: '-10px' }}>
                        {
                            warning
                        }
                    </div>
                    <div style={{ display: 'flex', gap: '1rem' }}>
                        {
                            isSignUp && <button className='login-btn' onClick={sendOtp}>Send OTP</button>
                        }
                        <button className='login-btn' onClick={handleSubmit}>Submit</button>
                    </div>
                    <h6>Or</h6>
                    <p className='google' onClick={login}>{isSignUp ? "SignUp With Google" : "Login With Google"}</p>
                </div>
            </div>
        </div>
    )
}

export default Auth