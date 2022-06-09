import React from 'react';
import { useFormContext } from 'react-hook-form';
import { FormWrapper, Input, Label } from './FormInput.styles';
import { Typography } from '@mui/material';

export const AuthInput = ({label, type, name}) => {

    //! Контекст от react-hook-form
    const { formState, register } = useFormContext();

    return (
        <FormWrapper>
            <Label>{label}</Label>
            <Input 
                {...register(name)} // ! React hook form таким способом ссылается на этот инпут
                type={type}
                name={name}
            />
            <Typography 
                variant='body1'
                sx={{
                    color: '#da230f',
                    fontSize: 13,
                    marginTop: '-10px',
                    marginBottom: '10px'
                }}
            >
                {formState.errors[name]?.message}
            </Typography>
        </FormWrapper>
    )
}

