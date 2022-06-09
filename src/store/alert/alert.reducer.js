import { alertAction } from "./alert.action";

const initialState = {
    alertMessage: null,
    showAlertMessage: false
};

export const alertReducer = (state = initialState, action) => {
    switch(action.type){
        case alertAction.OPEN_ALERT_MESSAGE:
            return {
                ...state,
                showAlertMessage: true,
                alertMessage: action.payload
            }
        case alertAction.CLOSE_ALERT_MESSAGE:
            return {
                ...state,
                showAlertMessage: false,
                alertMessage: null
            }    
        default:
            return state
    }
}