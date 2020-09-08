import React from 'react';
import './cart.styles.css';
import CartItem from './cart-item/cartItem.component';

import { connect } from 'react-redux';

const Cart = ({ cartItems }) => {
    return (
        <div className='cartContainer'>
            <div className='cartTitle'>
                CART
            </div>
            {
                cartItems.map(cartItem => (<CartItem key={cartItem.id} item={cartItem} />) )
            }
        </div>
    );
}


const mapStsteToProps = ({ cart: { cartItems } }) => ({
    cartItems
});

export default connect(mapStsteToProps)(Cart);