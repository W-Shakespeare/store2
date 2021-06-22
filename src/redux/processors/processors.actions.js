import * as processor from './processors.types';

export const setProcessorList = processorArr => ({
    type: processor.GET_PROCESSORS_LIST,
    processorArr
});

export const clearAllProcessors = () => ({
    type: processor.CLEAN_ALL_PROCESSORS
});
