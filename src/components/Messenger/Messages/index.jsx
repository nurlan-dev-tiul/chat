import React from 'react';
import Avatar from '@mui/material/Avatar';
import moment from 'moment';
import { useSelector } from 'react-redux';
import { HeaderMessage } from '../HeaderMessage';
import { Typography } from '@mui/material';
import { stringAvatar } from 'utils/avatarColor';
import { avatarColorOption } from 'styles/global.styles';
import { 
    ChatWrapper,
    FriendMessage,
    MyMessage,
    TimeStamp
} from './Messages.styles';

export const Messages = ({content, sameDay, sameAuthor, date}) => {
    const messageRef = React.useRef(null);
    const {userDetails} = useSelector(store => store.auth);
    const isLoginEmail = userDetails._id
    const MessageType = sameAuthor === isLoginEmail ? MyMessage : FriendMessage;

    React.useLayoutEffect(() => {
        messageRef.current.scrollIntoView();
    }, [content])

    return (
        <ChatWrapper ref={messageRef}>
            <MessageType>
                {content}
                <TimeStamp>{moment(date).format('HH:mm')}</TimeStamp>
            </MessageType>
        </ChatWrapper>
    )
}
