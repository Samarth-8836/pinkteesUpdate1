import React from 'react';
import './cart.styles.css';
import CartItem from './cart-item/cartItem.component';

import { connect } from 'react-redux';

import { withRouter } from 'react-router';

const Cart = ({ cartItems, history, totalCount }) => {

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
                cartItems[0] ? 
                <div>
                    <div className='Total'>
                        Total : Rs. {totalCount}
                    </div>
                </div>

                :

                <div />
                    
            }
            {
                cartItems[0] ? <div className='checkoutBtn'><button className='cartCheckout' onClick={ () => alert('CheckOutInitiated') }>CHECKOUT</button></div> : <div />
            }
        </div>
    );
}


const mapStsteToProps = ({ cart: { cartItems } }) => ({
    cartItems,
    totalCount: cartItems.reduce((accumalatedQuantity, cartItem) => accumalatedQuantity + (cartItem.quantity * cartItem.price) ,0)
});

export default withRouter(connect(mapStsteToProps)(Cart));