const eventReducers = (state = {
    allEvent: [], eventData: null, error: false
}, action) => {
    switch (action.type) {
        case "EC_START":
            return { ...state, error: false };
        case "EC_SUCCESS":
            return { ...state, eventData: action.data, error: false };
        case "EC_FAIL":
            return { ...state, error: true };
        case "GAE_START":
            return { ...state, error: false };
        case "GAE_SUCCESS":
            return { ...state, allEvent: action.data, error: false }
        case "GAE_FAIL":
            return { ...state, error: true };
        default:
            return state
    }
}

export default eventReducers;