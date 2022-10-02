import * as eventApi from '../../Api/eventApi';

export const createEvent = (eventData, id, companyname) => async (dispatch) => {
    try {
        dispatch({ type: "EC_START" });
        eventData.userId = id;
        eventData.eventCreater = companyname;
        const { data } = await eventApi.createEvent(eventData);
        dispatch({ type: "EC_SUCCESS", data: data })
    } catch (error) {
        console.log(error)
        dispatch({ type: "EC_FAIL" })
    }
}


export const getAllEvent = () => async (dispatch) => {
    try {
        dispatch({ type: "GAE_START" });
        const data = await eventApi.getAllEvent();
        dispatch({ type: "GAE_SUCCESS", data: data })
    } catch (error) {
        console.log(error)
        dispatch({ type: "GAE_FAIL" })
    }
}