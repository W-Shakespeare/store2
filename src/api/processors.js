import axiosConfig from './api.config';

export const getProcessorListData = () => axiosConfig.get();

export const updateProcessorList = (processorId, processorData) =>
    axiosConfig.put(`/${processorId}`, processorData);

export const deleteProcessor = processorId => axiosConfig.delete(`${processorId}`);

// export const createContact = (contactData) => axiosConfig.post("", contactData);

export const createProcessor = contactData => axiosConfig.post('', contactData);
