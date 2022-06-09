import { openAlertActionCreator, closeAlertActionCreator } from 'store/alert/alert.action';
import { 
    sendFriendInvitationApi,
    acceptFriendInvitationApi,
    rejectFriendInvitationApi
} from 'utils/api/friends/friendsApi';

export const friendsActions = {
    SET_FRIENDS: 'FRIENDS.SET_FRIENDS',
    SET_PENDING_FRIENDS_INVITATIONS: 'FRIENDS.SET_PENDING_FRIENDS_INVITATIONS',
    SET_ONLINE_USERS: 'FRIENDS.SET_ONLINE_USERS'
}

//! Action Creators для добавления списка Приглашения
export const setPendingFriendsInvitations = (pendingFriendsInvitations) => {
    return {
        type: friendsActions.SET_PENDING_FRIENDS_INVITATIONS,
        payload: pendingFriendsInvitations
    }
}

//! Action Creators для добавления списка Друзей
export const setFriends = (friends) => {
    return {
        type: friendsActions.SET_FRIENDS,
        payload: friends
    }
}

//! Action Creators для списка онлайн Друзей
export const setOnlineUsers = (onlineUsers) => {
    return {
        type: friendsActions.SET_ONLINE_USERS,
        payload: onlineUsers
    }
}


//! Отправляем приглашение
export const sendFriendInvitation = (data, closeModalHandler) => async (dispatch) => {
    try {
        const res = await sendFriendInvitationApi(data);
        dispatch(openAlertActionCreator('Приглашение отправлено'));
        closeModalHandler();
    } catch (error) {
        dispatch(openAlertActionCreator(error?.response?.data))
    }
}

//! Отправляем согласие на приглашение
export const acceptFriendInvitation = (id) => async (dispatch) => {
    try {
        const res = await acceptFriendInvitationApi(id);
        dispatch(openAlertActionCreator('Приглашение принято!'));
    } catch (error) {
        dispatch(openAlertActionCreator(error?.response?.data))
    }
}

//! Отправляем отклонить приглашение
export const rejectFriendInvitation = (data) => async (dispatch) => {
    try {
        const res = await rejectFriendInvitationApi(data);
        dispatch(openAlertActionCreator('Приглашение отклонено!'));
    } catch (error) {
        dispatch(openAlertActionCreator(error?.response?.data))
    }
}