import { UserActionTypes } from './user.types';

export const setCurrentUser = user => ({
    type: UserActionTypes.SET_CURRENT_USER,
    payload: user
});

export const setCurrentUserName = user => ({
    type: UserActionTypes.GET_CURRENT_USER,
    payload: user
});