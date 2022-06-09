import { chatActions } from "./chat.action";

const initialState = {
    chosenChatDetails: null,
    chatType: null,
    messages: []
}

export const chatReducer = (state = initialState, action) => {
    switch(action.type){
        case chatActions.SET_CHOSEN_CHAT_DETAILS: 
            return{
                ...state,
                chosenChatDetails: action.payload,
                chatType: action.chatType,
                messages: []
            }
        case chatActions.SET_MESSAGES: 
            return{
                ...state,
                messages: action.payload
            }    
        default:
            return state
            
    }
}