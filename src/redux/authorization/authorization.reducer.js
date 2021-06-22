import * as authorization from './authorization.types';

const initialState = {
    isAdmin: false
};

const authorizationReducer = (state = initialState, action) => {
    switch (action.type) {
        case authorization.CHANGE_USER_STATUS: {
            return {
                ...state,
                isAdmin: action.payload
            };
        }
        default: {
            return state;
        }
    }
};

export default authorizationReducer;
