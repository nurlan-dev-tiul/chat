import styled from '@emotion/styled';
import Button from '@mui/material/Button';
import List from '@mui/material/List';
import CheckCircleOutlineOutlinedIcon from '@mui/icons-material/CheckCircleOutlineOutlined';
import DeleteIcon from '@mui/icons-material/Delete';

export const ListWrapper = styled(List)`
    width: 100%;
    max-width: 360px;
    padding: 0px;

    @media (max-width: 450px) {
        max-width: 100%;
        margin: 0px;
        padding: 0px;
    }
    
    @media (max-width: 320px) {
        width: 100%;
    }
`;

export const ButtonContainer = styled.div`
    margin-left: 90px;
    display: flex;

    @media (max-width: 450px) {
        margin-left: 0px;
        padding-left: 10px;
    }

    @media (max-width: 320px) {
        margin-left: 0px;
        padding-left: 0px;
    }
`;

export const AcceptIcon = styled(CheckCircleOutlineOutlinedIcon)`
    color: green;

`;

export const RemoveIcon = styled(DeleteIcon)`

`;

export const SpanButton = styled(Button)`
    font-size: 12px;
    margin-left: 16px;
    text-transform: none;
`;