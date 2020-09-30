import SizeColorActionTypes from './sizecolor.types';

const INITIAL_STATE = {
    sizeState: [],
    colorState: []
};

const SizeColorReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case SizeColorActionTypes.ADD_ITEM_SIZE:
            return{
                ...state,
                sizeState: action.payload
            };
        
        case SizeColorActionTypes.ADD_ITEM_COLOR:
            return{
                ...state,
                colorState: action.payload
            };
    
        
        default:
            return state;
    }
};

export default SizeColorReducer; 