import React from 'react';
import './productDisplay.styles.css';
import Slider from 'react-slick';
import photo1 from '../../assets/Womens/womens_black.png';
import photo2 from '../../assets/Womens/womens_grey.png';

const ProductDisplay = () => {

    const photos = [
        {
            name: 'photo1',
            url: photo1
        },
        {
            name: 'photo2',
            url: photo2
        }
    ]
    
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
                            <img width="100%" src={photo.url} alt='bannerones'/>
                        </div>
                    );
                })}
            </Slider>
            <div className='productDisplayContainer'>
                <div className='productDisplayName'>
                    Product Name
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