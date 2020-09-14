import React from 'react';
import './item.styles.css';
import DisplayItem from './displayItem/displayItem.component';

const Item = () => {
    return(
        <div className='sellingHotContainer'>
            <DisplayItem />
            <DisplayItem />
            <DisplayItem />
            <DisplayItem />
            <DisplayItem />
            <DisplayItem />        
        </div>
    );
}

export default Item;