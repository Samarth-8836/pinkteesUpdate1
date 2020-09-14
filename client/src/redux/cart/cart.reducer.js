import CartActionTypes from './cart.types';
import { addItemToCart, updateItemFromCart, removeItemFromCart } from './cart.utils';

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
        
        case CartActionTypes.CLEAR_ITEM_FROM_CART:
            return{
                ...state,
                cartItems: state.cartItems.filter( cartItem => {
                    if( (cartItem.id !== action.payload.id) ){
                        return true;
                    } 
                    if( (cartItem.selectedColor !== action.payload.selectedColor) ) {
                        return true;
                    }
                    if( (cartItem.selectedSize !== action.payload.selectedSize) ) {
                        return true;
                    }
                    return false;
                })
            };

        case CartActionTypes.REMOVE_ITEM:
            return{
                ...state,
                cartItems: removeItemFromCart(state.cartItems, action.payload)
            };
        
        default:
            return state;
    }
};

export default cartReducer; 