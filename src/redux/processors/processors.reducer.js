import * as processor from './processors.types';
const initialState = {
    processorsList: []
};

const processorReducer = (state = initialState, action) => {
    switch (action.type) {
        case processor.GET_PROCESSORS_LIST: {
            return {
                ...state,
                processorsList: action.processorArr
            };
        }
        case processor.CLEAN_ALL_PROCESSORS: {
            return {
                ...state,
                processorsList: []
            };
        }
        default: {
            return state;
        }
    }
};

export default processorReducer;
