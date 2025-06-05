import axios from 'axios';

const BASE_BACKEND_URL = import.meta.env.VITE_BASE_BACKEND_URL;

export const axiosInstance = axios.create({
    baseURL : BASE_BACKEND_URL
})

export const axiosPrivateInstance= axios.create({
    baseURL: BASE_BACKEND_URL,
    withCredentials: true
})