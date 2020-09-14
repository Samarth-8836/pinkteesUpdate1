import React from 'react';
import './wishlist.styles.css';

const Wishlist = () => {
    return (
        <div className='wishlistContainer'>
            <div className='wishlistTitle'>
                Wishlist
            </div>
            <div class="box-wrapper">
                <div class="box-tall">
                    <div className='wishlistItemImage' />
                </div>
                <div class="box-left">
                    <div class="box-1">
                        <div className='wishlistItemTitle'>White T-Shirt</div>
                        <div className='wishlistItemSize'>XL</div>
                    </div>
                    <div class="box-2">
                        <div className='wishlistItemPrice'>Rs. 500</div>
                        <img src={require('../../assets/mini-icons/icon_love_filled_updated.png')} alt='Wishlist' style={{float: "right", margin: "5px 10px 10px 10px"}}/>
                        <img src={require('../../assets/mini-icons/Icon_cart_dark_updated.png')} alt='toCart' style={{float: "right", margin: "5px 0px 10px 10px"}}/>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Wishlist;