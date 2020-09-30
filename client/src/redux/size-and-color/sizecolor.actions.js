import SizeColorActionTypes from './sizecolor.types';

export const addItemSize = item => ({
    type: SizeColorActionTypes.ADD_ITEM_SIZE,
    payload: item
}); 


export const addItemColor = item => ({
    type: SizeColorActionTypes.ADD_ITEM_COLOR,
    payload: item
}); 
