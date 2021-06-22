import React from 'react';
import ProcessorsInformation from '../../components/ProcessorsInformation';
import ProcessorsContainer from '../../components/Processors';
import StyledProcessorsPage from './StyledProcessorsPage';
import { compose } from 'redux';
import { withErrorBoundary } from '../../hoc/withErrorBoundary';

const ProcessorsPage = () => {
    return (
        <StyledProcessorsPage>
            <ProcessorsInformation />
            <ProcessorsContainer />
        </StyledProcessorsPage>
    );
};

export default compose(withErrorBoundary)(ProcessorsPage);
