import styled from '@emotion/styled';
import { keyframes } from '@emotion/react';

export const MainContainer = styled.div`
    align-items: center;
    background-color: white;
    display: flex;
    height: 100vh;
    justify-content: center;
    width: 100vw;
`;

const skScaleout = keyframes`
        0% {
            -webkit-transform: scale(0);
            transform: scale(0);
        }
        100% {
            -webkit-transform: scale(1);
            opacity: 0.5;
            transform: scale(1);
        }
`;

export const Loading = styled.div`
    -webkit-animation: ${skScaleout} 1s infinite ease-in-out;
    animation: ${skScaleout} 1s infinite ease-in-out;
    background-color: #124c62;
    border-radius: 100%;
    height: 6em;
    width: 6em;
`;