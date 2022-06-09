import React from 'react';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import { useDispatch } from 'react-redux';
import { stringAvatar } from 'utils/avatarColor';
import { acceptFriendInvitation, rejectFriendInvitation } from 'store/friends/friends.action';
import { 
    ButtonContainer, 
    ListWrapper,
    AcceptIcon,
    RemoveIcon
} from './InviteList.styles';

export const InviteList = ({id, username, handleClose}) => {
    
    const dispatch = useDispatch();

    //! Отправка запроса если приглашение принято
    const handleAcceptInvitation = () => {
        dispatch(acceptFriendInvitation(id));
        handleClose(); //! Закрываем модальное окно
    }

    //! Отправка запроса если приглашение отклонено
    const handleRejectInvitation = () => {
        dispatch(rejectFriendInvitation(id));
        handleClose();//! Закрываем модальное окно
    }

    return (
    <ListWrapper>
        <ListItem 
            sx={{ padding: '10px 2px', display: 'flex'}}
        >
            <ListItemAvatar>
                <Avatar {...stringAvatar(username)}>
                    {username.substring(0, 1)}
                </Avatar>
            </ListItemAvatar>
            <ListItemText
                sx={{ display: 'flex', justifyContent: 'space-between'}}
                primary={username}
            />
            <ButtonContainer>
                <IconButton onClick={handleAcceptInvitation} >
                    <AcceptIcon />
                </IconButton>
                
                <IconButton onClick={handleRejectInvitation} >
                    <RemoveIcon />
                </IconButton>
            </ButtonContainer>
            
        </ListItem>
    </ListWrapper>
    )
}
