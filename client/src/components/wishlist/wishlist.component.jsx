import React from 'react';
import WishlistCartItem from './wishlist-tems/wishlistItem.component';

import { connect } from 'react-redux';

import { withRouter } from 'react-router';


const Wishlist = ({ wishlistItems }) => {

    const wishlistClickHandler = () => {
        window.history.back();
    }
    
    return (
        <div className='cartContainer'>
        <div className='cartClose' onClick={() => wishlistClickHandler()} />
            <div className='cartTitle'>
            {
                wishlistItems[0] ? <div className='cartTitleResponsive'>WISHLIST</div> : <div className='cartTitle' style={{paddingTop: '100px'}}>Nothing to show here. Go pick something up first</div>
            }
            </div>
            {
                wishlistItems.map(cartItem => {return <WishlistCartItem key={cartItem.id} product={cartItem} />} ) 
            }
        </div>
    );
}


const mapStsteToProps = ({ wishlist: { wishlistItems } }) => ({
    wishlistItems
});

export default withRouter(connect(mapStsteToProps)(Wishlist));