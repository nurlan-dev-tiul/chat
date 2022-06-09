import styled from '@emotion/styled';
import Avatar from '@mui/material/Avatar';

export const Wrapper = styled.div`
    flex-grow: 1;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
`;

export const ImageContainer = styled.div`
    width: 200px;
    height: 200px;
    max-width: 200px;
`;

export const Image = styled(Avatar)`
    width: 100%;
    height: 100%;
`;
