import { authAction, userLoginFromStorage } from "./auth.action";

const initialState = {
    userDetails: null,
    isAuth: false
};

export const authReducer = (state = initialState, action) => {
    switch(action.type){
        case authAction.SET_USER_DETAILS:
            return {
                ...state,
                isAuth: true,
                userDetails: action.payload,

            }
        case authAction.LOGOUT_USER:
            return {
                ...state,
                userDetails: null,
                isAuth: false
            }
        default:
            return state
    }
}