export const addItemToCart = (cartItems, cartItemToAdd) => {
    const existingCartItem = cartItems.find(cartItem => (cartItem.id === cartItemToAdd.id) && (cartItem.selectedColor === cartItemToAdd.selectedColor) && (cartItem.selectedSize === cartItemToAdd.selectedSize) );

    if(existingCartItem) {
        return cartItems.map(cartItem => {
            return (cartItem.id === cartItemToAdd.id) && (cartItem.selectedColor === cartItemToAdd.selectedColor) && (cartItem.selectedSize === cartItemToAdd.selectedSize) ? {...cartItem, quantity: cartItem.quantity + 1} : cartItem
        });
            
    }

    return [...cartItems,{...cartItemToAdd, quantity: 1}]
};

export const updateItemFromCart = (cartItems, cartItemToAdd) => {
    const existingCartItem = cartItems.find(cartItem => (cartItem.id === cartItemToAdd.id) && (cartItem.selectedColor === cartItemToAdd.selectedColor) && (cartItem.selectedSize === cartItemToAdd.selectedSize) );

    if(existingCartItem) {
        return cartItems.map(cartItem => {
            return (cartItem.id === cartItemToAdd.id) && (cartItem.selectedColor === cartItemToAdd.selectedColor) && (cartItem.selectedSize === cartItemToAdd.selectedSize) ? {...cartItem, quantity: cartItem.quantity} : cartItem
        });
            
    }

    return [...cartItems,{...cartItemToAdd, quantity: 1}]
};

export const removeItemFromCart = (cartItems, cartItemToRemove) => {
    const existingCartItem = cartItems.find(cartItem => (cartItem.id === cartItemToRemove.id) && (cartItem.selectedColor === cartItemToRemove.selectedColor) && (cartItem.selectedSize === cartItemToRemove.selectedSize) );

    if(existingCartItem.quantity < 2) {
        return cartItems.filter(cartItem => {
            if( (cartItem.id !== cartItemToRemove.id) ){
                return true;
            } 
            if( (cartItem.selectedColor !== cartItemToRemove.selectedColor) ) {
                return true;
            }
            if( (cartItem.selectedSize !== cartItemToRemove.selectedSize) ) {
                return true;
            }
            return false;
        })
    }

    return cartItems.map(cartItem => {
        if( (cartItem.id === cartItemToRemove.id) ){
            if( (cartItem.selectedColor === cartItemToRemove.selectedColor) ) {
                if( (cartItem.selectedSize === cartItemToRemove.selectedSize) ) {
                    return {...cartItem, quantity: cartItem.quantity -1 }
                } else {
                    return cartItem;
                }
            } else {
                return cartItem;
            }    
        } else{
            return cartItem;
        } 
    })
};