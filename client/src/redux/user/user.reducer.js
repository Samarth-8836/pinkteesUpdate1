import { UserActionTypes } from './user.types';

const INITIAL_STATE = {
    user: null
}
const userReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case UserActionTypes.SET_CURRENT_USER:
            return {
                ...state,
                currentUser: action.payload
            }
        case UserActionTypes.GET_CURRENT_USER:
            return {
                ...state,
                currentUserLoggedIn: action.payload
            }

        default:
            return state;
    }
}

export default userReducer;