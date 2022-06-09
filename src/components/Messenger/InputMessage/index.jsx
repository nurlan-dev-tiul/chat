import React from 'react';
import { useSelector } from 'react-redux';
import { sendDirectMessage } from 'socket/socketConnection';
import {
    MainContainer,
    Input,
    AddButton,
    AddIcon
} from './InputMessage.styles';

export const InputMessage = () => {

    const [message, setMessage] = React.useState('');

    const { chosenChatDetails } = useSelector(store => store.chat);

    //! Получаем текст из инпута
    const handleMessageValueChange = (event) => {
        setMessage(event.target.value);
    }

    //! Отправка сообщение если кликнули на Enter
    const handleKeyPressed = (event) => {
        if(event.key === 'Enter'){
            handleSendMessage()
        }
    }

    //! Отправка сообщения
    const handleSendMessage = () => {
        if(message.length > 0){
            sendDirectMessage({
                //! Получатель, то есть chosenChatDetails.id это id пользователя которому
                //! отправляем сообщение
                receiverUserId: chosenChatDetails.id,
                content: message
            });
            setMessage('');
        }
    }

    return (
        <MainContainer>
            <Input 
                placeholder='Напишите сообщение'
                value={message}
                onChange={handleMessageValueChange}
                onKeyDown={handleKeyPressed}
            />
            {message?.length > 0 ? (
                <AddButton 
                    color="primary" 
                    aria-label="add" 
                    size='small' 
                    onClick={handleSendMessage}
                >
                    <AddIcon />
                </AddButton>
                ) : null
            }
        </MainContainer>
    )
}
