import React from 'react';

import {
    MainContainer,
    ResponseContainer
} from './FriendBox.styles';

export const FriendBox = ({responseBar, children, openFriendBar}) => {

    if(responseBar){
        return ( 
            //! Контейнер для маленьких экранов
            <ResponseContainer 
                style={openFriendBar ? { left: 0 } : {}}>
                {children}
            </ResponseContainer>
        )
    }else{
        return (
            <MainContainer>
                {children}
            </MainContainer>
        )
    }
}
