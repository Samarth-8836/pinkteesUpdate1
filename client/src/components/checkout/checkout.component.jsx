import React from 'react';
import './checkout.styles.css';

import { connect } from 'react-redux';

const Checkout = (props) => {
    return (
        <div className='checkoutContainer'>
            <div className='checkoutHeader'>
                <div className='checkoutHeaderBlock'>
                    <span>Product</span>
                </div>
                <div className='checkoutHeaderBlock'>
                    <span>Title</span>
                </div>
                <div className='checkoutHeaderBlock'>
                    <span>Quantity</span>
                </div>
                <div className='checkoutHeaderBlock'>
                    <span>Price</span>
                </div>
                <div className='checkoutHeaderBlock'>
                    <span>Remove</span>
                </div>
            </div>
            {
                props.cartItems.map(cartItem => {
                    return cartItem.title
                })
            }
        </div>
    );
}

const mapStateToProps = (state) => ({
    cartItems : state.cart.cartItems
});

export default connect(mapStateToProps)(Checkout);


