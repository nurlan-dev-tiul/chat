import { loginApi, registerApi, getProfileApi } from 'utils/api/auth/userApi';
import { openAlertActionCreator, closeAlertActionCreator } from 'store/alert/alert.action';

//! Константы Action
export const authAction = {
    SET_USER_DETAILS: 'AUTH.SET_USER_DETAILS',
    LOGOUT_USER: 'AUTH.LOGOUT_USER',
    LOADING: 'AUTH.LOADING'
}

//! Action Creators устанавливаем в стейт данные о пользователе
export const setUserDetails = (userDetails) => {
    return {
        type: authAction.SET_USER_DETAILS,
        payload: userDetails
    }
}

//! Loading
export const setLoading = () => {
    return {
        type: authAction.LOADING,
    }
}


//! Получаем данные пользователя из localStorage и сохраняем в state
export const userLoginFromStorage = localStorage.getItem('userChat')
    ? JSON.parse(localStorage.getItem('userChat'))
    : null;

//! Action thunk запрос на сервер на получение логина и отправка данных в store
export const loginAction = (user) => async (dispatch, getState) => {

    const { showAlertMessage } = getState().alert;
    try {
        dispatch(setLoading());
        const res = await loginApi(user);
        const { userDetails } = res.data;

        localStorage.setItem('userChat', JSON.stringify(userDetails.token));
        //! Dispatch in store
        dispatch(setUserDetails(userDetails));

        //! Очищаем state alert если там статус true 
        if(showAlertMessage){
            dispatch(closeAlertActionCreator());
        }
    } catch (error) {
        dispatch(openAlertActionCreator(error?.response?.data))
    }
}


//! Action thunk запрос на сервер на получение регистрации и отправка данных в store
export const registerAction = (user) => async (dispatch, getState) => {

    const { showAlertMessage } = getState().alert;

    try {
        dispatch(setLoading());
        const res = await registerApi(user);
        const { userDetails } = res.data;
        localStorage.setItem('userChat', JSON.stringify(userDetails.token));

        //! Dispatch in store
        dispatch(setUserDetails(userDetails));

        //! Очищаем state alert если там статус true 
        if(showAlertMessage){
            dispatch(closeAlertActionCreator());
        }
    } catch (error) {
        dispatch(openAlertActionCreator(error?.response?.data))
    }
}

//! Action thunk запрос на сервер на получение профиля и отправка данных в store
export const getProfileAction = () => async (dispatch) => {
    try {
        dispatch(setLoading());
        const {data} = await getProfileApi();

        //! Dispatch in store
        dispatch(setUserDetails(data));
    } catch (error) {
        console.log(error);
    }
}

//! Асинхронный Action для Loggout
export const logoutAction = () => async(dispatch) => {

    localStorage.clear();
    dispatch({type: authAction.LOGOUT_USER})
    window.location.pathname = "/login";
};
