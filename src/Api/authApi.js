import axios from "axios";
import { baseURL } from "../utilities/authUtillities";

const API = axios.create({ baseURL: baseURL })

export const verification = (email) => {
    return API.post('/auth/verification', email);
}

export const signUp = (userData) => {
    return API.post('/auth/signup', userData);
}

export const signUpGoogle = (accessToken) => {
    return API.post('/auth/signup', {
        googleAccessToken: accessToken
    });
}

export const logIn = (userData) => {
    return API.post('/auth/login', userData);
}

export const logInGoogle = (accessToken) => {
    return API.post('/auth/login', {
        googleAccessToken: accessToken
    });
}