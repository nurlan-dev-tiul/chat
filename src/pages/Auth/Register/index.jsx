import React from 'react';
import { useForm, FormProvider } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import { AuthBox } from 'components/Auth/AuthBox';
import { AuthInput } from 'components/Auth/AuthInput';
import { Button, AuthFooter, AuthFooterLink } from 'styles/pages/Auth.styles';
import { Alert, Typography } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { registerAction } from 'store/authentication/auth.action';
import { registerSchemaValidation } from 'utils/validator';

const RegisterPage = () => {

    const form = useForm({
        mode: 'onSubmit',
        resolver: yupResolver(registerSchemaValidation)
    });

    const dispatch = useDispatch();
    const history = useHistory();

    const { alertMessage, showAlertMessage } = useSelector(store => store.alert);

    //! Отправка запроса на регистрацию
    const postRegister = (userDetails) => {
        dispatch(registerAction(userDetails, history));
    }

    return (
        <>
            <AuthBox headerTitle='Создайте учетную запись'>
                <FormProvider {...form}>
                    <AuthInput 
                        label='Имя пользователя' 
                        name='username'
                    />
                    <AuthInput 
                        label='Email' 
                        name='mail'
                    />
                    <AuthInput 
                        label='Пароль' 
                        type='password'
                        name='password'
                    />
                    {showAlertMessage ? (
                        <Alert sx={{marginBottom: '15px'}} severity="error">{alertMessage}</Alert>
                    ) : null}
                    <Button 
                        type='button' 
                        onClick={form.handleSubmit(postRegister)}
                    >
                        Зарегистрироваться
                    </Button>
                </FormProvider>
                <AuthFooter>
                    <Typography sx={{color: 'rgb(83, 100, 113)'}}>Уже зарегистрированы?</Typography>
                    <AuthFooterLink to='/'>Войти в аккаунт</AuthFooterLink>
                </AuthFooter>
            </AuthBox>
        </>
    )
}

export default RegisterPage;