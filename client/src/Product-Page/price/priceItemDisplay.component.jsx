import React from 'react';
import './priceItemDisplay.styles.css';

const PriceItemDisplay = (props) => {
    return (
        <div className='priceItemDisplay'>
            Rs. {props.product.price}
        </div>
    );
}

export default PriceItemDisplay;