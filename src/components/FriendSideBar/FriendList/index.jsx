import React from 'react';
import ListItem from '@mui/material/ListItem';
import Divider from '@mui/material/Divider';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';
import { stringAvatar } from 'utils/avatarColor';
import { setChosenChatDetails, chatTypes } from 'store/chat/chat.action';
import { useDispatch } from 'react-redux';
import { SpanOnline, UserListItem, ListBox } from './FriendList.styles';


export const FriendList = ({id, username, isOnline, setCloseFriendBar, responseBar}) => {

    const dispatch = useDispatch();

    //! Метод для активной беседы
    const handleChooseActiveConvertation = () => {
        dispatch(setChosenChatDetails({id: id, name: username}, chatTypes.DIRECT));
        
        //! Если сайдбар на маленьких экранах, то при нажатии на собеседника сайдбар должен закрыться
        if(responseBar){
            setCloseFriendBar()
        }
    }

    return (
    <ListBox>
        <ListItem sx={UserListItem} onClick={handleChooseActiveConvertation}>
            <ListItemAvatar>
                {/* <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" /> */}
                <Avatar {...stringAvatar(username)}>
                    {username.substring(0, 1)}
                </Avatar>
            </ListItemAvatar>
            <ListItemText
                primary={username}
                secondary={
                    <>
                        {isOnline ? (
                            <Typography
                                sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center'}}
                                component="span"
                                variant="body2"
                                color="text.primary"
                            >
                                <SpanOnline>В сети</SpanOnline>
                                <FiberManualRecordIcon  
                                    sx={{color: 'green', fontSize: '11px'}}
                                />
                            </Typography>
                        ) : (
                            <Typography
                                sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}
                                component="span"
                                variant="body2"
                                color="text.primary"
                            >
                                <SpanOnline>Не в сети</SpanOnline>
                            </Typography>
                        )}
                    </>
                }
            />
        </ListItem>
        <Divider variant="fullWidth" component="li" />
    </ListBox>
    )
}
