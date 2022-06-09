import styled from '@emotion/styled';
import { Link } from 'react-router-dom';

export const Button = styled.button`
    padding: 12px;
    border: none;
    border-radius: 3px;
    color: white;
    width: 100%;
    background-color: rgb(46, 125, 50);
    transition: all .3s;
    font-size: 16px;
    cursor: pointer;
    &:hover{
        background-color: rgb(46, 90, 40);
    }
`;

export const AuthFooter = styled.div`
    text-align: center;
    width: 100%;
    margin-top: 15px;
`;

export const AuthFooterLink = styled(Link)`
    color: rgb(29, 155, 240);
    &:hover{
        color: rgb(29, 155, 200);
    }
`;
