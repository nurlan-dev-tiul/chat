import styled from '@emotion/styled';
import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';

export const ModalContainer = styled(Dialog)`
    margin: 20px;
    @media (max-width: 320px) {
        margin: 5px;
    }
`;

export const DialogContainer = styled(DialogContent)`
    margin: 10px;
    @media (max-width: 320px) {
        margin: 0px;
    }
`;