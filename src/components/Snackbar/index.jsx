import React from 'react';
import Snackbar from '@mui/material/Snackbar';
import Alert from '@mui/material/Alert';
import { useDispatch, useSelector } from 'react-redux';
import { closeAlertActionCreator } from 'store/alert/alert.action';

export const SnackBar = () => {

    const dispatch = useDispatch();
    const { alertMessage, showAlertMessage } = useSelector(store => store.alert);

    const handleClose = () => {
        dispatch(closeAlertActionCreator())
    }

    return (
        <Snackbar
            open={showAlertMessage}
            autoHideDuration={7000}
            anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
            onClose={handleClose}
        >
            <Alert onClose={handleClose} severity="success" sx={{ width: '100%' }}>
                {alertMessage}
            </Alert>
        </Snackbar>
    )
}
