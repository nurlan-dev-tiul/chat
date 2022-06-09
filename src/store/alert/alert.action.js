export const alertAction = {
    OPEN_ALERT_MESSAGE: 'ALERT.OPEN_ALERT_MESSAGE',
    CLOSE_ALERT_MESSAGE: 'ALERT.CLOSE_ALERT_MESSAGE'
}

//! Action Creators для сообщения ошибки или что нибудь еще что придет с сервера
export const openAlertActionCreator = (message) => {
    return {
        type: alertAction.OPEN_ALERT_MESSAGE,
        payload: message
    }
}

//! Action Creators очищаем стейт
export const closeAlertActionCreator = () => {
    return {
        type: alertAction.CLOSE_ALERT_MESSAGE,
    }
}