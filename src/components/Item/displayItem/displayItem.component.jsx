import React from 'react';
import './displayItem.styles.css';

const DisplayItem = () => {
    return(
        <div className='Display'>
            <div className='DisplayImage'>
                <img src={'https://firebasestorage.googleapis.com/v0/b/pinktees-a082b.appspot.com/o/WonderWomen.png?alt=media&token=ff7d9ab1-355b-433b-a0c7-566a874c08ac'} alt='Mens Catagory' className='DisplayImage' />
            </div>
            <div className='DisplayName'>
                Wonder Women
            </div>
        </div>
    );
}

export default DisplayItem;