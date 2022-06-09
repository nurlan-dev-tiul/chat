import styled from '@emotion/styled';
import Fab from '@mui/material/Fab';

export const ListBlock = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: #F8F8F8;
    overflow-y: auto;

    &::-webkit-scrollbar{
        width: 5px;

    }
    &::-webkit-scrollbar-track{
        background-color: #c1c1c1;
    }
    &::-webkit-scrollbar-thumb{
        background-color: #929292;
    }
`;

export const AddFriendButton = styled(Fab)`
    position: fixed;
    bottom: 10px;
    left: 180px;
    z-index: 10;

    @media (max-width: 400px) {
        right: 20px;
        left: unset;
    }

`;

export const TotalInviteList = styled.div`
    position: absolute;
    right: -5px;
    top: -5px;
    z-index: 10;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: red;
    color: #fff;
    width: 24px;
    height: 24px;
    border-radius: 50px;
    font-size: 10px;
    font-weight: 600;
    padding: 10px;
`;

