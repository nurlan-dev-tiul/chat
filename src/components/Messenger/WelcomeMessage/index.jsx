import React from 'react';
import { Wrapper, ImageContainer, Image } from './WelcomeMessage.styles';

export const WelcomeMessage = () => {
    return (
        <Wrapper>
            <ImageContainer>
                <Image src='https://cdn.pixabay.com/photo/2015/11/06/15/13/internet-1028794_960_720.jpg' />
            </ImageContainer>
        </Wrapper>
    )
}
