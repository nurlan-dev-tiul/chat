import React from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { useDispatch, useSelector } from 'react-redux';
import { Button, Typography } from '@mui/material';
import { FriendList } from './FriendList';
import { Modal } from 'components/Modal';
import { AccordionCustom } from 'components/Accordion';
import { InviteList } from './InviteList';
import { mailSchemaValidation } from 'utils/validator';
import { SendMail } from './SendMail';
import { sendFriendInvitation } from 'store/friends/friends.action';
import AddIcon from '@mui/icons-material/Add';
import { 
    AddFriendButton,
    TotalInviteList
} from './FriendSideBar.styles';
import { FriendBox } from './FriendBox';

//! Этот метод смотрит какие онлайн какие не онлайн
const checkOnlineUsers = (friends = [], onlineUsers = []) => {
    friends.forEach(friend => {
        const isUserOnline = onlineUsers.find(user => user.userId === friend._id);
        friend.isOnline = isUserOnline ? true : false;
    });
    return friends;
}

export const FriendSideBar = ({openFriendBar, setCloseFriendBar, responseBar}) => {

    const [openMailModal, setOpenMailModal] = React.useState(false);
    const [openInviteModal, setOpenInviteModal] = React.useState(false);
    const {pendingFriendsInvitations, friends, onlineUsers} = useSelector(store => store.friends);

    const dispatch = useDispatch();

    //! Validation
    const { register, handleSubmit, formState } = useForm({
        resolver: yupResolver(mailSchemaValidation)
    });

    //! Close Modal Send Email
    const closeModalHandler = () => {
        setOpenMailModal(false)
    }

    //! Close Modal Invite List
    const closeModalInviteList = () => {
        setOpenInviteModal(false)
    }

    //! Send invite
    const sendModalHandler = (data) => {
        dispatch(sendFriendInvitation(data, closeModalHandler))
    }

    return (
        <FriendBox openFriendBar={openFriendBar} responseBar={responseBar}>
            <Button 
                variant="outlined" 
                onClick={() => setOpenInviteModal(true)}
                sx={{position: 'relative'}}
                fullWidth
            >
                Приглашения
                    {
                        //! Отображение количество приглашении
                        pendingFriendsInvitations?.length > 0 ? (
                            <TotalInviteList>
                                {pendingFriendsInvitations?.length}
                            </TotalInviteList>
                        ) : null
                    }
            </Button>
            <Modal 
                open={openInviteModal}
                handleClose={closeModalInviteList}
            >
                {pendingFriendsInvitations && pendingFriendsInvitations.length <= 0 ? (
                <Typography sx={{textAlign: 'center'}}>Приглашении нет</Typography>
            ) : (
                //! Список тех кто приглашает
                pendingFriendsInvitations?.map(friendInvitation => (
                    <InviteList 
                        handleClose={closeModalInviteList}
                        key={friendInvitation._id}
                        id={friendInvitation._id}
                        username={friendInvitation.senderId.username}
                    />                    
                ))
            )}
            </Modal>
            <AccordionCustom title='Ваши друзья' panel='panel2'>
                {friends && friends.length <= 0 ? (
                    <Typography sx={{textAlign: 'center'}}>Пригласите друзей</Typography>
                ) : (
                    //! Список друзей а также кто онлайн кто нет
                    checkOnlineUsers(friends, onlineUsers).map(friend => (
                        <FriendList 
                            key={friend._id}
                            id={friend._id}
                            username={friend.username}
                            isOnline={friend.isOnline}
                            responseBar={responseBar}
                            setCloseFriendBar={setCloseFriendBar}
                        />                    
                    ))
                )}
            </AccordionCustom>
            <AddFriendButton 
                color="primary" 
                aria-label="edit"
                onClick={() => {setOpenMailModal(true)}}
            >
                <AddIcon  />
            </AddFriendButton>
            <Modal 
                title='Пригласить друга'
                open={openMailModal}
                handleClose={closeModalHandler}
                handleSend={handleSubmit(sendModalHandler)}
                fullwidth='true'
                showBtn
            >
                <SendMail formState={formState} register={register} />
            </Modal>
        </FriendBox>
    )
}
