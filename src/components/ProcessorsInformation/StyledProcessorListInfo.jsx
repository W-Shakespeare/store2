import styled from 'styled-components';
import Box from '@material-ui/core/Box';

export const StyledProcessorListInfo = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-around;
    align-items: center;
    @media (max-width: 950px) {
        /* min-width: 70px; */
    }
    @media (max-width: 760px) {
        flex-wrap: wrap;
    }
`;

export const Wrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    @media (max-width: 345px) {
        margin-top: 25px;
    }
`;

export const Item = styled.p`
    @media (max-width: 920px) {
        font-size: 12px;
    }
    @media (max-width: 760px) {
        padding: 10px;
    }
    @media (max-width: 345px) {
        padding: 0px 10px 0px 10px;
    }
`;
