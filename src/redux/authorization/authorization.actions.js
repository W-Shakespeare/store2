import * as authorization from './authorization.types';

export const changeUserStatus = payload => ({
    type: authorization.CHANGE_USER_STATUS,
    payload
});
