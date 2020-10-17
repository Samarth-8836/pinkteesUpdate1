import CartActionTypes from './wishlist.types';
import { addItemToCart, updateItemFromCart, removeItemFromCart } from './wishlist.utils';

const INITIAL_STATE = {
    wishlistItems: []
};

const wishlistReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case CartActionTypes.ADD_ITEM_WISHLIST:
            return{
                ...state,
                wishlistItems: addItemToCart(state.wishlistItems, action.payload)
            };
        
        case CartActionTypes.UPDATE_ITEM_WISHLIST:
            return{
                ...state,
                wishlistItems: updateItemFromCart(state.wishlistItems, action.payload)
            };
        
        case CartActionTypes.CLEAR_ITEM_FROM_CART_WISHLIST:
            return{
                ...state,
                wishlistItems: state.wishlistItems.filter( cartItem => {
                    if( (cartItem.id !== action.payload.id) ){
                        return true;
                    } 
                    return false;
                })
            };

        case CartActionTypes.REMOVE_ITEM_WISHLIST:
            return{
                ...state,
                wishlistItems: removeItemFromCart(state.wishlistItems, action.payload)
            };
        
        default:
            return state;
    }
};

export default wishlistReducer; 