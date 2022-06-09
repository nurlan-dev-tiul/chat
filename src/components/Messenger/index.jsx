import React from 'react';
import { useSelector } from 'react-redux';
import { MainContainer } from './Messenger.styles';
import { WelcomeMessage } from './WelcomeMessage';
import { MessageContent } from './MessageContent';

export const Messenger = () => {

    const { chosenChatDetails } = useSelector(store => store.chat);

    return (
        <MainContainer>
            {!chosenChatDetails ? (
                <WelcomeMessage />
            ) : (
                <MessageContent />
            )}
        </MainContainer>
    )
}
