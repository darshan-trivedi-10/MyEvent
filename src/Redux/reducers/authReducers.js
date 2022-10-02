const authReducers = (state = {
    authData: null, verification: '', error: false
}, action) => {

    switch (action.type) {
        case "AUTH_START":
            return { ...state, error: false }
        case "AUTH_SUCCESS":
            return { ...state, authData: action.data, error: false }
        case "AUTH_FAIL":
            return { ...state, error: true }
        case "VERIFICATION_START":
            return { ...state, error: false }
        case "VERIFICATION_SUCCESS":
            return { ...state, verification: action.data, error: false }
        case "VERIFICATION_FAIL":
            return { ...state, error: true }
        case "LOGIN_START":
            return { ...state, error: false }
        case "LOGIN_SUCCESS":
            return { ...state, authData: action.data, error: false }
        case "LOGIN_FAIL":
            return { ...state, error: true }
        default:
            return state
    }
}

export default authReducers;