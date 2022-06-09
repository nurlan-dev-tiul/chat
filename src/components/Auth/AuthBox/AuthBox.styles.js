import styled from '@emotion/styled';

export const BoxWrapper = styled.div`
    width: 100%;
    height: 100vh;
    background-color: #E9F3F5;
    display: flex;
    align-items: center;
    justify-content: center;
    
    @media (max-width: 425px) {
        padding: 0px 15px;
    }
`;

export const BoxHeader = styled.div`
    width: 100%;
    padding: 8px 40px;
    display: flex;
    border-bottom: 1px solid #f0f0f0;
    box-sizing:border-box;
`;

export const BoxContent = styled.div`
    width: 100%;
    padding: 30px 40px;
    box-sizing:border-box;
`;


