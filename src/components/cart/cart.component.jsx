import React from 'react';
import './cart.styles.css';

const Cart = () => {
    return (
        <div className='cartContainer'>
            <div className='cartTitle'>
                CART
            </div>
            <div class="box-wrapper">
                <div class="box-tall">
                    <div className='cartItemImage' />
                </div>
                <div class="box-left">
                    <div class="box-1">
                        <div className='cartItemTitle'>White T-Shirt</div>
                        <div className='cartItemSize'>XL</div>
                    </div>
                    <div class="box-2">
                        <div className='cartItemPrice'>Rs. 500</div>
                        <img src={require('../../assets/mini-icons/icon_love_filled_updated.png')} alt='Wishlist' style={{float: "right", margin: "5px 10px 10px 10px"}}/>
                        <button className='cartItemAddOne'>+</button>
                        <div className='cartItemQuantity'>2</div>
                        <button className='cartItemRemoveOne'>-</button>
                        <img src={require('../../assets/mini-icons/icon_delete_outline_updated.png')} alt='Wishlist' className='cartItemRemove' />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Cart;