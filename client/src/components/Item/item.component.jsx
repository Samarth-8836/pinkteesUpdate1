import React from 'react';
import './item.styles.css';
import DisplayItem from './displayItem/displayItem.component';
import productListMen from '../../productlist.js';
import { Link } from 'react-router-dom';

const Item = () => {
    return(
        <div className='sellingHotContainer'>
            <DisplayItem product={productListMen[0]} />
            <DisplayItem product={productListMen[1]} />
            <DisplayItem product={productListMen[2]} />
            <DisplayItem product={productListMen[0]} />
            <DisplayItem product={productListMen[0]} />
        </div>
    );
}

export default Item;