import React from 'react';

const CartItem = ({item : {imgUrl, price, title, quantity} }) => {
    return(
        <div class="box-wrapper">
                <div class="box-tall">
                    <div className='cartItemImage' style={{backgroundImage: `url(${imgUrl})`}} />
                </div>
                <div class="box-left">
                    <div class="box-1">
                        <div className='cartItemTitle'>{title}</div>
                        <div className='cartItemSize'>XL</div>
                    </div>
                    <div class="box-2">
                        <div className='cartItemPrice'>Rs. {price}</div>
                        <img src={require('../../../assets/mini-icons/icon_love_filled_updated.png')} alt='Wishlist' style={{float: "right", margin: "5px 10px 10px 10px"}}/>
                        <button className='cartItemAddOne'>+</button>
                        <div className='cartItemQuantity'>{quantity}</div>
                        <button className='cartItemRemoveOne'>-</button>
                        <img src={require('../../../assets/mini-icons/icon_delete_outline_updated.png')} alt='Wishlist' className='cartItemRemove' />
                    </div>
                </div>
            </div>
    );
}

export default CartItem;