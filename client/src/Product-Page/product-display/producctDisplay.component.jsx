import React from 'react';
import './productDisplay.styles.css';
import Slider from 'react-slick';

import { connect } from 'react-redux';
import { addItem, clearItemFromCart } from '../../redux/wishlist/wishlist.actions';

const ProductDisplay = (props) => {

    let addedToWishList = false;

    const initi = () => {
        props.wishlistItems.map(item => {
            if(item.title === props.product.title) {
                addedToWishList = true;
            }
        });
    }

    const photos = props.product.imgUrl.map( (image) => {
        return { url: image }
    });

    const handleAddToWishlist = () => {
        if(props.colorState) {
            Object.assign(props.product, {selectedColor: props.colorState});
        } else {
            Object.assign(props.product, {selectedColor: props.product.color[0]})
        }

        if(props.sizeState) {
            Object.assign(props.product, {selectedSize: props.sizeState});
        } else {
            Object.assign(props.product, {selectedSize: props.product.size[0]});
        }
            
        props.addItem(props.product);
    }

    const handleAddToWishlistAlready = () => {
        props.clearItem(props.product);
    }

    const settings = {
        dots: false,
        fade: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        className: 'slides',
        autoplay: true,
        dotsClass: 'slick-dots'
    };

    return (
        <div className='productDisplayMainContainer'>
            {initi()}
            <Slider {...settings} className='productDisplaySliderContainer'>
                { photos.map((photo) => {
                    return (
                        <div>
                            <img width="100%" height='400px' src={photo.url} alt='bannerones'/>
                        </div>
                    );
                })}
            </Slider>
            <div className='productDisplayContainer'>
                <div className='productDisplayName'>
                    {props.product.title}
                </div>
                <div className='productDisplayIconContainer'>
                    {
                        addedToWishList ? <div className='iconComponent wishlistFilled' onClick={() => handleAddToWishlistAlready()}/> : <div className='iconComponent wishlistOutline' onClick={() => handleAddToWishlist()}/>
                    }
                </div>
            </div>
        </div>
    );
}


const mapDispatchToProps = dispatch => ({
    addItem : item => dispatch(addItem(item)),
    clearItem : item => dispatch(clearItemFromCart(item))
});

const mapStsteToProps = ({ colorSize: { colorState, sizeState } , wishlist: { wishlistItems }}) => ({
    colorState,
    sizeState,
    wishlistItems
});

export default connect(mapStsteToProps, mapDispatchToProps)(ProductDisplay);