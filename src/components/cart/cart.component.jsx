import React from 'react';
import './cart.styles.css';
import CartItem from './cart-item/cartItem.component';

import { connect } from 'react-redux';

import { withRouter } from 'react-router';

const Cart = ({ cartItems, history }) => {
    return (
        <div className='cartContainer'>
            <div className='cartTitle'>
            {
                cartItems[0] ? <div>Cart</div> : <div className='cartTitle' style={{paddingTop: '100px'}}>Nothing to show here. Go pick something up first</div>
            }
            </div>
            {
                cartItems.map(cartItem => {return <CartItem key={cartItem.id} product={cartItem} />} ) 
            }
            {
                cartItems[0] ? <button className='cartCheckout' onClick={ () => history.push('/checkout')}>Checkout</button> : <div />
            }
        </div>
    );
}


const mapStsteToProps = ({ cart: { cartItems } }) => ({
    cartItems
});

export default withRouter(connect(mapStsteToProps)(Cart));