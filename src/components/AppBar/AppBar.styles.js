import styled from '@emotion/styled';
import { css } from '@emotion/react';
import MenuOutlinedIcon from '@mui/icons-material/MenuOutlined';
import CloseIcon from '@mui/icons-material/Close';

export const MainContainer = styled.div`
    position: fixed;
    top: 0;
    right: 0;
    background-color: white;
    height: 50px;
    width: 100%;
    border-bottom: 1px solid #e5e5e5;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    z-index: 10;
    padding: 0 15px;
`;

const ToggleBTN = css`
    font-size: 25px;
    cursor: pointer;
    display: none;
    position: absolute;
    left: 20px;

    @media (max-width: 600px) {
        display: block;
    }
`;

export const MenuToggleIcon = styled(MenuOutlinedIcon)`
    ${ToggleBTN}
`;

export const MenuCloseIcon = styled(CloseIcon)`
    ${ToggleBTN}
`;