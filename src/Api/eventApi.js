import axios from "axios";
import { baseURL } from "../utilities/authUtillities";

const API = axios.create({ baseURL: baseURL })

API.interceptors.request.use((req) => {
    if (JSON.parse(localStorage.getItem('store'))?.authReducers?.authData?.token) {
        req.headers.Authorization = `Bearer ${JSON.parse(localStorage.getItem('store')).authReducers.authData.token}`
    }
    return req;
})

export const createEvent = (eventData) => {
    return API.post('/event/create', eventData)
}

export const getAllEvent = async () => {
    const { data } = await API.get('/event/allevent');
    return data;
}

export const getUserEvent = async (id) => {
    const temp = await API.get(`/event/myevent/${id}`);
    const { data } = temp;
    return data;
}

export const getEventbyCity = async (city) => {
    const { data } = await API.get(`/event/city/${city}`);
    return data;
}

