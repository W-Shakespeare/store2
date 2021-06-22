import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import Processor from './Processor';
import withEditeItem from '../../../hoc/withEditeItem';
import { compose } from 'redux';

const ProcessorContainer = ({ processor, ...res }) => {
    const { isAdmin } = useSelector(state => state.authorization);
    const [isShowConfirm, setIsShowConfirm] = useState(false);
    const dispatch = useDispatch();
    const deleteSelectedProcessor = id => {
        dispatch(deleteProcessor(id));
    };
    return (
        <Processor
            {...res}
            {...processor}
            isShowConfirm={isShowConfirm}
            setIsShowConfirm={setIsShowConfirm}
            processor={processor}
            isAdmin={isAdmin}
            deleteSelectedProcessor={deleteSelectedProcessor}
        />
    );
};

ProcessorContainer.propTypes = {
    processor: PropTypes.object
};
export default compose(withEditeItem)(ProcessorContainer);
