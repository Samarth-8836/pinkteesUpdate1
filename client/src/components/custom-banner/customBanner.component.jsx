import React from 'react';
import './customBanner.styles.css';
import { Link } from 'react-router-dom';

const CustomBanner = () => {
    return (
        <div className='customBannerWrapper'>
            <div className='customBannerTitle'>
                MAKE YOUR OWN
            </div>
            <Link to='/diy' className='linkClass'>
                <img src={require('../../assets/Banners/custom1.png')} alt='CustomBanner' className='customBannerImage' />
                <div className='customBannerDescription'>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean sodales, elit ac euismod facilisis, nibh felis mattis dui, non auctor. 
                </div>
            </Link>
        </div>
    );
}

export default CustomBanner;