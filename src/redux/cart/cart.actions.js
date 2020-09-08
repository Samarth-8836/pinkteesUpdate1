import CartActionTypes from './cart.types';

export const addItem = item => ({
    type: CartActionTypes.ADD_ITEM,
    payload: item
}); 

export const updateItem = item => ({
    type: CartActionTypes.UPDATE_ITEM,
    payload: item
});