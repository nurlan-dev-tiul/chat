import store from 'store';
import {setMessages} from 'store/chat/chat.action';

//! Здесь мы принимаем участников чата из сервера и их сообщения
//! Проверяем если участники пришедшие с сервера и участники которые у нас уже в редаксе совподают
//! Их чат активен тогда обновляем историю сообщении
export const updateDirectChatHistoryIfActive = (data) => {

    const { participants, messages } = data;

    //! Смотрим id пользователя из токена и id собеседника из store
    const receivedId = store.getState().chat.chosenChatDetails?.id;
    const userId = store.getState().auth.userDetails?._id;

    if(receivedId && userId){
        const userInConversation = [receivedId, userId];

        //! Обновляем историю чата, если этот чат активен 
        updateChatHistoryIfSameConversationActive({
            participants,
            userInConversation,
            messages
        })
    }
}

const updateChatHistoryIfSameConversationActive = ({
    participants,
    userInConversation,
    messages
}) => {
    //! Проходимся по массиву участников, every вернет true если includes найдет элементы
    //! если participants === userInConversation
    const result = participants.every(function(participantId) {
        //! Тут мы проверяем есть ли такие участники в массиве
        return userInConversation.includes(participantId)
    });

    //! result и его проверки every вернет true тогда диспатчим сообщения в store
    if(result){
        store.dispatch(setMessages(messages));
    }
}