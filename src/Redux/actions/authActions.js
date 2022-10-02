import * as authApi from '../../Api/authApi';


export const signUp = (userData) => async (dispatch) => {
    try {
        dispatch({ type: "AUTH_START" });
        const { data } = await authApi.signUp(userData);
        dispatch({ type: "AUTH_SUCCESS", data: data })
    } catch (error) {
        console.log(error)
        dispatch({ type: "AUTH_FAIL" })
    }
}

export const signUpGoogle = (accessToken) => async (dispatch) => {
    try {
        dispatch({ type: "AUTH_START" });
        const { data } = await authApi.signUpGoogle(accessToken);
        dispatch({ type: "AUTH_SUCCESS", data: data })
    } catch (error) {
        console.log(error)
        dispatch({ type: "AUTH_FAIL" })
    }
}


export const logInGoogle = (accessToken) => async (dispatch) => {
    try {
        dispatch({ type: "LOGIN_START" });
        const { data } = await authApi.logInGoogle(accessToken);
        dispatch({ type: "LOGIN_SUCCESS", data: data })
    } catch (error) {
        console.log(error)
        dispatch({ type: "LOGIN_FAIL" })
    }
}



export const verification = (email) => async (dispatch) => {
    try {
        console.log('otp request');
        dispatch({ type: "VERIFICATION_START" });
        const { data } = await authApi.verification(email);
        console.log(data);
        dispatch({ type: "VERIFICATION_SUCCESS", data: data })
    } catch (error) {
        console.log(error)
        dispatch({ type: "VERIFICATION_FAIL" })
    }
}

export const logIn = (userData) => async (dispatch) => {
    try {
        dispatch({ type: "LOGIN_START" });
        const { data } = await authApi.logIn(userData);
        dispatch({ type: "LOGIN_SUCCESS", data: data })
    } catch (error) {
        console.log(error)
        dispatch({ type: "LOGIN_FAIL" })
    }
}