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
            </Link>
            <Link to='/diy' className='linkClass'>
                <div className='customBannerDescription'>
                    Bring your own design! Get your design, align them the way you want and upload them, we will get back to you with your design.
                </div>
            </Link>
        </div>
    );
}

export default CustomBanner;