import { apiClient } from "../";

//! Отправляем приглашение
export const sendFriendInvitationApi = async (data) => {
    return await apiClient.post('/friend-invitation/invite', data);
}

//! Отправляем запрос если приняли приглашение
export const acceptFriendInvitationApi = async (id) => {
    return await apiClient.post('/friend-invitation/accept', {id: id});
}

//! Отправляем запрос если отклонили приглашение
export const rejectFriendInvitationApi = async (id) => {
    return await apiClient.post('/friend-invitation/reject', {id: id});
}