import React from 'react';
import './main-catagory.styles.css';
import { Link } from 'react-router-dom';

const MainCatagory = () => {
    return (
        <div>
            <div className='mainCatagoryTitle'>
                CHOOSE YOUR CATAGORY
            </div>
            <div className='mainCatagoryDisplayContainer'>
                
                    <div className='mainCatagoryDisplay'>
                        <Link to='./mens' className='linkClass'>
                            <img src={'https://firebasestorage.googleapis.com/v0/b/pinktees-a082b.appspot.com/o/mens_catagory_updated.png?alt=media&token=9af266b4-ef57-489e-b52b-484e19a35c82'} alt='Mens Catagory' className='mainCatagoryDisplayImage' />
                            <div className='mainCatagoryDisplayTitle'>
                                Mens
                            </div>
                        </Link>
                    </div>
                
                
                    <div className='mainCatagoryDisplay'>
                        <Link to='./womens' className='linkClass'>
                            <img src={'https://firebasestorage.googleapis.com/v0/b/pinktees-a082b.appspot.com/o/womens_catagory.png?alt=media&token=987e8f37-c1dc-437a-bc1b-a7b8c45242e7'} alt='Mens Catagory' className='mainCatagoryDisplayImage' />
                            <div className='mainCatagoryDisplayTitle'>
                                Womens
                            </div>
                        </Link>
                    </div>
            </div>
        </div>
    );
}

export default MainCatagory; 