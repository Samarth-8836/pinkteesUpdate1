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