import React from 'react'
import TextField from '@mui/material/TextField';
import { Typography } from '@mui/material';
import { 
    ContentText
} from './SendMail.styles';

export const SendMail = ({formState, register}) => {
    return (
        <>
            <ContentText>
                    Напишите Email адрес вашего друга, которого хотите пригласить в наш чат
            </ContentText>
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
