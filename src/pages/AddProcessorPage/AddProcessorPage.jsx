import React from 'react';
import AddProcessorContainer from '../../components/AddProcessor';
import StyledAddProcessorsPage from './StyledAddProcessorsPage';
import { compose } from 'redux';
import { withErrorBoundary } from '../../hoc/withErrorBoundary';

const AddProcessorsPage = () => {
    return (
        <StyledAddProcessorsPage>
            <AddProcessorContainer />
        </StyledAddProcessorsPage>
    );
};
export default compose(withErrorBoundary)(AddProcessorsPage);
