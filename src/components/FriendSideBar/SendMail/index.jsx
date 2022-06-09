import React from 'react'
import TextField from '@mui/material/TextField';
import DialogContentText from '@mui/material/DialogContentText';
import { Typography } from '@mui/material';

export const SendMail = ({formState, register}) => {
    return (
        <>
            <DialogContentText>
                    Напишите Email адрес вашего друга, которого хотите пригласить в наш чат
            </DialogContentText>
            <TextField
                autoFocus
                margin="dense"
                id="name"
                label="Email адрес"
                type="email"
                fullWidth
                variant="standard"
                name='email'
                {...register("email")}
            />
            <Typography 
                variant='body1'
                sx={{
                    color: '#da230f',
                    fontSize: 13,
                    marginTop: '8px',
                }}
            >
                {formState.errors['email']?.message}
            </Typography>
        </>
    )
}
