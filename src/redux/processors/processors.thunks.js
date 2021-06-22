import * as api from '../../api/processors';
import * as action from './processors.actions';

export const getProcessorList = () => async dispatch => {
    const res = await api.getProcessorListData();
    console.log('RES_Processors', res);
    dispatch(action.setProcessorList(res));
};

export const updateProcessor = (processorId, processorData) => async dispatch => {
    const res = await api.updateProcessorList(processorId, processorData);
    dispatch(getProcessorList());
};

export const createProcessor = processorData => async dispatch => {
    const res = await api.createProcessor(processorData);
    dispatch(getProcessorList());
};

export const deleteSelectedProcessor = processorId => async dispatch => {
    const res = await api.deleteProcessor(processorId);
    dispatch(getProcessorList());
};

export const clearAllProcessors = () => async dispatch => {
    // simulate a request
    //clean only redux
    setTimeout(() => {
        dispatch(action.clearAllProcessors());
    }, 1000);
};
