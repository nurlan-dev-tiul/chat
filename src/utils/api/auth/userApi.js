import { apiClient } from "../";

//! Авторизация
export const loginApi = async (data) => {
    return await apiClient.post('/auth/login', data);
}

//! Регистрация
export const registerApi= async (data) => {
    return await apiClient.post('/auth/register', data);
}

//! Получаем профиль
export const getProfileApi= async () => {
    return await apiClient.get('/auth/profile');
}