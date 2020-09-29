import React from 'react';
import './selling-hot..styles.css';
import Item from '../Item/item.component';

const SellingHot = () => {
    return(
        <div>
            <div className='sellingHotTitle'>
                Our Top Designs
            </div>
            <Item />
        </div>
    );
}

export default SellingHot;