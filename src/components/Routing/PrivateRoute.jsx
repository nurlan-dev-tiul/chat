import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { useSelector } from 'react-redux';


//! <Route exact path='/' component={HomePage} /> 
//! ...props тут лежат exact path='/какой нибудь url'
export const PrivateRouter = (props) => {

    //! Смотрим авторизован ли пользователь есть ли в редаксе данные о нем
    const {isAuth} = useSelector(store => store.auth);

    //! Если авторизован тогда показывай эти страницы если нет тогда редирект на логин
    return isAuth ?  <Route {...props} /> : <Redirect to='/login' />

    //! В App.js будет выглядить так <PrivateRoute exact path='/add-category' component={AddNewCategory} />
}
