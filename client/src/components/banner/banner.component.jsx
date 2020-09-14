import React from 'react';
import './banner.styles.css';
import Slider from 'react-slick';
import photo1 from '../../assets/Banners/banner1.png';
import photo2 from '../../assets/Banners/custom1.png';

const Banner = () => {

    const photos = [
        {
            name: 'photo1',
            url: photo1
        },
        {
            name: 'photo2',
            url: photo2
        },
        {
            name: 'photo3',
            url: photo1
        }
    ]

    const settings = {
        dots: true,
        fade: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: true,
        className: 'slides',
        autoplay: true,
        dotsClass: 'slick-dots'
      };

    return(
        <Slider {...settings}>
            { photos.map((photo) => {
                return (
                    <div>
                        <img width="100%" src={photo.url} alt='bannerones'/>
                    </div>
                );
            })}
        </Slider>
    );
}

export default Banner;