import { friendsActions } from "./friends.action";

const initialState = {
    friends: [],
    pendingFriendsInvitations: [],
    onlineUsers: []
}


export const friendsReducer = (state = initialState, action) => {
    switch(action.type){
        case friendsActions.SET_PENDING_FRIENDS_INVITATIONS:
            return {
                ...state,
                pendingFriendsInvitations: action.payload
            }
        case friendsActions.SET_FRIENDS:
            return {
                ...state,
                friends: action.payload
            }
        case friendsActions.SET_ONLINE_USERS:
            return {
                ...state,
                onlineUsers: action.payload
            }    
        default:
            return state
    }
}