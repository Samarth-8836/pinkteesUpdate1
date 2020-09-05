import React from 'react';
import './main-catagory.styles.css';

const MainCatagory = () => {
    return (
        <div>
            <div className='mainCatagoryTitle'>
                Choose A Catagory
            </div>
            <div className='mainCatagoryDisplayContainer'>
                <div className='mainCatagoryDisplay'>
                    <img src={require('../../assets/Mens/mens_catagory.png')} alt='Mens Catagory' className='mainCatagoryDisplayImage' />
                    <div className='mainCatagoryDisplayTitle'>
                        Mens
                    </div>
                    <div className='mainCatagoryDisplayDiscription'>
                        Lorem Ipsum
                    </div>
                </div>
                <div className='mainCatagoryDisplay'>
                    <img src={require('../../assets/Mens/mens_catagory.png')} alt='Mens Catagory' className='mainCatagoryDisplayImage' />
                    <div className='mainCatagoryDisplayTitle'>
                        Womens
                    </div>
                    <div className='mainCatagoryDisplayDiscription'>
                        Lorem Ipsum
                    </div>
                </div>
            </div>
        </div>
    );
}

export default MainCatagory; 