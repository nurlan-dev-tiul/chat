import styled from '@emotion/styled';
import Fab from '@mui/material/Fab';
import TelegramIcon from '@mui/icons-material/Telegram';

export const MainContainer = styled.div`
    width: 100%;
    height: 60px;
    display: flex;
    z-index:100;
    position: sticky;
    bottom: 0;
    background: #fff;
    padding: 10px;
    border-top: 1px solid #e5e5e5;
    z-index:100;
`;

export const Input = styled.input`
    position: sticky;
    bottom: 0;
    background-color: #fff;
    border: none;
    border-radius: 8px;
    padding: 15px;
    width: 100%;
    outline: none;
    margin-bottom: 10px;
    width: 98%;
    margin: 0 auto;
    position: relative;
    &::placeholder{
        font-size: 15px;
    }
`;

export const AddButton = styled.div`
    position: absolute;
    right: 25px;
    top: 12px;
    width: 35px;
    height: 35px;
    background-color: #304FFD;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 100%;
    cursor: pointer;
`;
export const AddIcon = styled(TelegramIcon)`
    font-size: 18px;
    color: white;
    margin-right: 2px;
`;