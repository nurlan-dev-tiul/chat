import React from 'react';
import { useSelector } from 'react-redux';
import { getDirectChatHistory } from 'socket/socketConnection';
import { HeaderMessage } from '../HeaderMessage'
import { InputMessage } from '../InputMessage'
import { Messages } from '../Messages'
import { Wrapper, MessagesContainer } from './MessageContent.styles'

export const MessageContent = () => {
    const { chosenChatDetails, messages } = useSelector(store => store.chat);

    React.useEffect(() => {
        getDirectChatHistory({
            receiverUserId: chosenChatDetails.id
        })
    }, [chosenChatDetails]);

    return (
        <Wrapper>
            <HeaderMessage name={chosenChatDetails?.name}/>
            <MessagesContainer>
                {messages.map((message, index) => {
                    return <Messages 
                        key={message._id}
                        content={message.content}
                        username={message.author.username}
                        sameAuthor={message.author._id}
                        date={message.date}
                        sameDay={message.sameDay}
                    />
                })}
                <InputMessage />
            </MessagesContainer>

        </Wrapper>
    )
}
