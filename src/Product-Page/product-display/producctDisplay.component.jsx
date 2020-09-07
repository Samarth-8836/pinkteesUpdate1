import React from 'react';
import './productDisplay.styles.css';
import Slider from 'react-slick';

const ProductDisplay = (props) => {


    const photos = props.images.map( (image) => {
        return { url: image }
    });
    
    
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
                    {props.title}
                </div>
                <div className='productDisplayIconContainer'>
                    <div className='iconComponent cart' />
                    <div className='iconComponent wishlist' />
                </div>
            </div>
        </div>
    );
}

export default ProductDisplay;