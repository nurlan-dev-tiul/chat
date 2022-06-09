import styled from '@emotion/styled';

export const ChatWrapper = styled.div`
    display: flex;
`;

export const MessageBubble = styled.div`
    padding: 15px;
    padding-bottom: 30px;
    text-align: right;
    background-color: white;
    position: relative;
    max-width: 400px;
    margin: 5px 20px;
    word-wrap: break-word;

    @media (max-width: 717px) {
        max-width: 270px;
    }

    @media (max-width: 460px) {
        max-width: 200px;
    }

`;
export const MyMessage = styled(MessageBubble)`
    margin-left: auto;
    background-color: #dcf8c6;
    border-radius: 8px 0px 8px 8px;
`;

export const FriendMessage = styled(MessageBubble)`
    background-color: #f9f9f9;
    text-align: left;
    border-radius: 0px 8px 8px 8px;
    border: 1px solid #E8E9EB;
`;

export const TimeStamp = styled.span`
    color: gray;
    padding: 10px;
    font-size: 12px;
    position: absolute;
    bottom: -4px;
    right: -3px;
`;










