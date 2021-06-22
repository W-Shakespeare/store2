import React from 'react';
import { useSelector } from 'react-redux';
import Processors from './Processors';
import { StyledProcessors } from './StyledProcessors';

const ProcessorsContainer = () => {
    const { processorsList } = useSelector(state => state.processorsList);
    return (
        <StyledProcessors>
            <Processors processorsList={processorsList} />
        </StyledProcessors>
    );
};
export default ProcessorsContainer;
