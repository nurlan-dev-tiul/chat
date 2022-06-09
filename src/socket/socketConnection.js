import io from 'socket.io-client';
import { setPendingFriendsInvitations, setFriends, setOnlineUsers } from 'store/friends/friends.action';
import store from 'store';
import { updateDirectChatHistoryIfActive } from '../utils/chat';

let socket = null;

//! Подключаемся к сокет серверу
export const connectWithSocketServer = (userDetails) => {

    const jwtToken = userDetails;

    socket = io('https://mern-redux-app.herokuapp.com', {
        auth: {
            token: jwtToken
        }
    });

    socket.on('connect', () => {
        console.log('Успешное соединение с сервером');
    });

    //! Получаем список пользователей которые пригласили нас, этот список у нас в data
    socket.on('friends-invitations', (data) => {
        const { pendingInvitations } = data;
        store.dispatch(setPendingFriendsInvitations(pendingInvitations));
    });

    //! Получаем список друзей, этот список у нас в data
    socket.on('friends-list', (data) => {
        const { friends } = data;
        store.dispatch(setFriends(friends))
    });

    //! Получаем онлайн пользователей
    socket.on('online-users', (data) => {
        const { onlineUsers } = data;
        store.dispatch(setOnlineUsers(onlineUsers))
    });

    socket.on('direct-chat-history', (data) => {
        updateDirectChatHistoryIfActive(data);
    })
}

//! Отправка сообщения из одиночного чата
export const sendDirectMessage = (data) => {
    socket.emit('direct-message', data)
}

//! Получаем сообщения чата
export const getDirectChatHistory = (data) => {
    socket.emit('direct-chat-history', data)
}