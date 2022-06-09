import axios from 'axios';

export const apiClient = axios.create({
    baseURL: 'https://mern-redux-app.herokuapp.com/api',
});

//! Get token localStorage
apiClient.interceptors.request.use((config) => {
    const userChat = localStorage.getItem('userChat');

    if(userChat){
        const token = JSON.parse(userChat);
        config.headers.Authorization = `Bearer ${token}`
    }
    return config;
}, (err) => {
    return Promise.reject(err)
});