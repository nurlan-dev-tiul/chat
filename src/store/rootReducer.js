import { combineReducers } from 'redux';
import { alertReducer } from './alert/alert.reducer';
import { authReducer } from './authentication/auth.reducer';
import { friendsReducer } from './friends/friends.reducer'
import { chatReducer } from './chat/chat.reducer';


export const rootReducers = combineReducers({
    auth: authReducer,
    alert: alertReducer,
    friends: friendsReducer,
    chat: chatReducer,
});
