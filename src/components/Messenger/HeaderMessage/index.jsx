import React from 'react';
import Avatar from '@mui/material/Avatar';
import { Typography } from '@mui/material';
import { stringAvatar } from 'utils/avatarColor';
import { Wrapper } from './HeaderMessage.styles';
import { avatarColorOption } from 'styles/global.styles';

export const HeaderMessage = ({name}) => {
    return (
        <Wrapper>
            <Avatar  {...stringAvatar(name, {...avatarColorOption})}>
                {name.substring(0, 1)}
            </Avatar>
            <Typography sx={{marginLeft: 1}}>
                {name}
            </Typography>
        </Wrapper>
    )
}
