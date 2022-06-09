import styled from '@emotion/styled';
import { keyframes } from '@emotion/react';

export const MainContainer = styled.div`
    width: 250px;
    display: flex;
    flex-direction: column;
    align-items: space-between;
    background-color: #F8F8F8;
    padding-top: 10px;
    margin-top: 50px;
    overflow-y: auto;
    padding-bottom: 45px;
    padding-left: 10px;
    padding-right: 10px;


    &::-webkit-scrollbar{
        width: 5px;

    }
    &::-webkit-scrollbar-track{
        background-color: #c1c1c1;
    }
    &::-webkit-scrollbar-thumb{
        background-color: #929292;
    }

    @media (max-width: 600px) {
        display: none;
    }

`;

const fadeInFromNone = keyframes`
    0% {
        display: none;
        opacity: 0;
    }

    1% {
        display: block;
        opacity: 0;
    }

    100% {
        display: block;
        opacity: 1;
    }

`;

export const ResponseContainer = styled.div`
    position: fixed;
    top: 50px;
    left: -250px;
    bottom: 0;
    width: 250px;
    background-color: #F8F8F8;
    height: 100%;
    padding: 15px 25px;
    display: none;
    z-index: 500;
    overflow-y: auto;
    opacity: 0;
    @media (max-width: 600px) {
        display: block;
        opacity: 1;
        animation: ${fadeInFromNone} 0.3s ease-in-out;

    }
    @media (max-width: 400px) {
        width: 100%;
        background-color: #fff;
    }

`;



