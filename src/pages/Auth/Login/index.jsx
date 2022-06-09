import React from 'react';
import Alert from '@mui/material/Alert';
import { useForm, FormProvider } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import { AuthBox } from 'components/Auth/AuthBox';
import { AuthInput } from 'components/Auth/AuthInput';
import { Button, AuthFooter, AuthFooterLink } from 'styles/pages/Auth.styles';
import { Typography } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { loginAction } from 'store/authentication/auth.action';
import { useHistory } from 'react-router-dom';
import { loginSchemaValidation } from 'utils/validator';

const LoginPage = () => {

    const form = useForm({
        mode: 'onSubmit',
        resolver: yupResolver(loginSchemaValidation)
    });

    const dispatch = useDispatch();
    const history = useHistory();

    const { alertMessage, showAlertMessage} = useSelector(store => store.alert)

    //! Отправка запроса на авторизацию
    const postLogin = (userDetails) => {
        dispatch(loginAction(userDetails, history))
    }

    return (
        <>
            <AuthBox headerTitle='Вход на сайт'>
                <FormProvider {...form}>
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
                        onClick={form.handleSubmit(postLogin)}
                    >
                        Войти
                    </Button>
                </FormProvider>
                <AuthFooter>
                    <Typography 
                        sx={{ color: 'rgb(83, 100, 113)'}}
                        variant='body1'
                    >
                        Нет учетной записи?
                    </Typography>
                    <AuthFooterLink to='/register'>Зарегистрируйтесь</AuthFooterLink>
                </AuthFooter>
            </AuthBox>
        </>
    )
}

export default LoginPage;
