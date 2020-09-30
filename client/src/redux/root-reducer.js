import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage'

import userReducer from './user/user.reducer';
import cartReducer from './cart/cart.reducer';
import wishlistReducer from './wishlist/wishlist.reducer';
import colorSizeReducer from './size-and-color/sizecolor.reducer';

const persistConfig = {
    key: 'root',
    storage,
    whitelist: ["cart", "wishlist"]
}

const rootReducer = combineReducers({
    user: userReducer,
    cart: cartReducer,
    wishlist: wishlistReducer,
    colorSize: colorSizeReducer
});

export default persistReducer(persistConfig, rootReducer);