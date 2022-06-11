import React from 'react';
import DialogActions from '@mui/material/DialogActions';
import DialogTitle from '@mui/material/DialogTitle';
import Button from '@mui/material/Button';
import {
    ModalSxStyles,
    ModalContainer,
    DialogContainer,

} from './Modal.styles';

export const Modal = ({children, title, open, handleClose, showBtn, handleSend, fullwidth}) => {
    return (
        <>
            <ModalContainer open={open} onClose={handleClose}>
                <DialogTitle>{title}</DialogTitle>
                    <DialogContainer full={fullwidth}>
                        {children}
                    </DialogContainer>
                {showBtn && <DialogActions>
                        <Button onClick={handleClose}>Закрыть</Button>
                        <Button type='button' onClick={handleSend}>Отправить</Button>
                    </DialogActions>
                }
            </ModalContainer>
        </>
    )
}
