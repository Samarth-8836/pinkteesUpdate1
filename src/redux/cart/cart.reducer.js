import CartActionTypes from './cart.types';
import { addItemToCart, updateItemFromCart } from './cart.utils';

const INITIAL_STATE = {
    cartItems: []
};

const cartReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case CartActionTypes.ADD_ITEM:
            return{
                ...state,
                cartItems: addItemToCart(state.cartItems, action.payload)
            };
        
        case CartActionTypes.UPDATE_ITEM:
            return{
                ...state,
                cartItems: updateItemFromCart(state.cartItems, action.payload)
            };
        
        default:
            return state;
    }
};

export default cartReducer; 