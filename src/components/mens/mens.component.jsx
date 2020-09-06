import React from 'react';
import './mens.styles.css';
import { Link } from 'react-router-dom';

const mens = () => {
    return(
        <div>
            <div className='mensClose' onClick={() => window.history.back()} />

            <div className='mensContainer'>
            
                <div className='mensTitle'>MENS</div>

                <div className='displayItemContainer'>
                
                    <Link to='/WonderWomen'>
                        <div className='mensDisplay'>
                            <div className='mensDisplayImage'>
                                <img src={'https://firebasestorage.googleapis.com/v0/b/pinktees-a082b.appspot.com/o/WonderWomen.png?alt=media&token=ff7d9ab1-355b-433b-a0c7-566a874c08ac'} alt='Mens Catagory' className='mensDisplayImage' />
                            </div>
                            <div className='mensDisplayName'>
                                Wonder Women
                            </div>
                        </div>
                    </Link>

                    <div className='mensDisplay'>
                        <div className='mensDisplayImage'>
                            <img src={'https://firebasestorage.googleapis.com/v0/b/pinktees-a082b.appspot.com/o/WonderWomen.png?alt=media&token=ff7d9ab1-355b-433b-a0c7-566a874c08ac'} alt='Mens Catagory' className='mensDisplayImage' />
                        </div>
                        <div className='mensDisplayName'>
                            Wonder Women
                        </div>
                    </div>

                    <div className='mensDisplay'>
                        <div className='mensDisplayImage'>
                            <img src={'https://firebasestorage.googleapis.com/v0/b/pinktees-a082b.appspot.com/o/WonderWomen.png?alt=media&token=ff7d9ab1-355b-433b-a0c7-566a874c08ac'} alt='Mens Catagory' className='mensDisplayImage' />
                        </div>
                        <div className='mensDisplayName'>
                            Wonder Women
                        </div>
                    </div>

                    <div className='mensDisplay'>
                        <div className='mensDisplayImage'>
                            <img src={'https://firebasestorage.googleapis.com/v0/b/pinktees-a082b.appspot.com/o/WonderWomen.png?alt=media&token=ff7d9ab1-355b-433b-a0c7-566a874c08ac'} alt='Mens Catagory' className='mensDisplayImage' />
                        </div>
                        <div className='mensDisplayName'>
                            Wonder Women
                        </div>
                    </div>

                    <div className='mensDisplay'>
                        <div className='mensDisplayImage'>
                            <img src={'https://firebasestorage.googleapis.com/v0/b/pinktees-a082b.appspot.com/o/WonderWomen.png?alt=media&token=ff7d9ab1-355b-433b-a0c7-566a874c08ac'} alt='Mens Catagory' className='mensDisplayImage' />
                        </div>
                        <div className='mensDisplayName'>
                            Wonder Women
                        </div>
                    </div>

                </div>
            
            </div>
        </div>
    );
}

export default mens;