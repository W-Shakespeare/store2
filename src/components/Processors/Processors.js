import React from 'react';
import PropTypes from 'prop-types';
import Processor from './Processor';

const Processors = ({ processorsList }) => {
    return (
        <>
            {processorsList.map(processor => {
                return <Processor key={processor.id} processor={processor} />;
            })}
        </>
    );
};

Processors.propTypes = {
    processorsList: PropTypes.array.isRequired
};

export default Processors;
