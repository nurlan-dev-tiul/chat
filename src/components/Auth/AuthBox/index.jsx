import React from 'react'
import Box from '@mui/material/Box';
import { BoxWrapper, BoxHeader, BoxContent } from './AuthBox.styles';
import { Typography } from '@mui/material';


export const AuthBox = ({children, headerTitle}) => {
    return (
        <BoxWrapper>
            <Box
                sx={{
                    width: 400,
                    backgroundColor: '#fff',
                    borderRadius: 3,
                    boxShadow: '0px 1px 10px 0px rgb(0 0 0 / 10%)',
                    display: 'flex',
                    flexDirection: 'column',
                }}
            >
                <BoxHeader>
                    <Typography variant='h6' >{headerTitle}</Typography>
                </BoxHeader>
                <BoxContent>
                    {children}
                </BoxContent>
            </Box>
        </BoxWrapper>

    )
}
