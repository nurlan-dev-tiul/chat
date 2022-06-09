import React from 'react';
import { useSelector } from 'react-redux';
import { Typography } from '@mui/material';
import { ChosenNameLabel } from './Chosen.styles';

export const ChosenOptionalLabel = () => {

    const { chosenChatDetails } = useSelector(store => store.chat);

    return (
        <Typography
            sx={ChosenNameLabel}
        >{`${chosenChatDetails?.name ? chosenChatDetails?.name : ''}`}</Typography>
    )
}
