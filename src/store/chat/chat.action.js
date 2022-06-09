export const chatTypes = {
    DIRECT: 'DIRECT', //! конкретный чат с одним человеком
    GROUP: 'GROUP' //! групповой чат
}

export const chatActions = {
    SET_CHOSEN_CHAT_DETAILS: 'CHAT.SET_CHOSEN_CHAT_DETAILS',
    SET_MESSAGES: 'CHAT.SET_MESSAGES',
    SET_CHAT_TYPE: 'CHAT.SET_CHAT_TYPE'
}

export const setChosenChatDetails = (chatDetails, types) => {
    return {
        type: chatActions.SET_CHOSEN_CHAT_DETAILS,
        chatType: types, //! Групповой чат или одиночный
        payload: chatDetails
    }
}

export const setMessages = (messages) => {
    return {
        type: chatActions.SET_MESSAGES,
        payload: messages
    }
}

