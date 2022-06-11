import styled from '@emotion/styled';
import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';

export const ModalSxStyles = {
    width: '100%',
    margin: 0
}

export const ModalContainer = styled(Dialog)`

    @media (max-width: 320px) {
        width: 100%;
        margin: 5px;
    }
`;

export const DialogContainer = styled(DialogContent)`

    margin: 10px;
    @media (max-width: 320px) {
        width: 100%;
        margin: 5px;
        padding: ${props => props.full ? '20px' : '0px'};
    }
`;