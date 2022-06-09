import * as yup from "yup";

// ! Здесь мы описываем схему валидации нашей формы
export const loginSchemaValidation = yup.object().shape({
    mail: yup.string()
        .email('Введите корректный email-адрес')
        .required('Введите Email-адрес'),
    password: yup.string()
        .min(6, 'Должно быть не менее 6 символов')
        .max(15, 'Должно быть не более 15 символов')
        .required('Введите пароль'),
});

// ! Здесь мы описываем схему валидации нашей формы
export const registerSchemaValidation = yup.object().shape({
    username: yup.string().required('Обязательное поле (Вы не можете оставить поле пустым)'),
}).concat(loginSchemaValidation);


//! Схема валидации для отправки на почту
export const mailSchemaValidation = yup.object().shape({
    email: yup.string()
        .email('Введите корректный email-адрес')
        .required('Введите Email-адрес'),
});