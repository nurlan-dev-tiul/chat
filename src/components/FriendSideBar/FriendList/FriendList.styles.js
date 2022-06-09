import styled from '@emotion/styled';
import List from '@mui/material/List';

export const ListBox = styled(List)`
    width: 100%;
    max-width: 360px;
    background-color: #f8f8f8;
    padding: 0px;

    @media (max-width: 400px) {
        width: 100%;
        background-color: #fff;
    }
`;

export const SpanOnline = styled.span`
    color: #979797;
`;

export const UserListItem = {
    padding: '2px',
    cursor: 'pointer',
    
}
