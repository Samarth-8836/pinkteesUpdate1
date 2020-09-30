import CartActionTypes from './wishlist.types';

export const addItem = item => ({
    type: CartActionTypes.ADD_ITEM_WISHLIST,
    payload: item
}); 

export const updateItem = item => ({
    type: CartActionTypes.UPDATE_ITEM_WISHLIST,
    payload: item
});

export const clearItemFromCart = item => ({
    type: CartActionTypes.CLEAR_ITEM_FROM_CART_WISHLIST,
    payload: item
});

export const removeItem = item => ({
    type: CartActionTypes.REMOVE_ITEM_WISHLIST,
    payload: item
});