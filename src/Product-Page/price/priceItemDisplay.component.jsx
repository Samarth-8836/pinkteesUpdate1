import React from 'react';
import './priceItemDisplay.styles.css';

const PriceItemDisplay = (props) => {
    return (
        <div className='priceItemDisplay'>
            {props.product.price}
        </div>
    );
}

export default PriceItemDisplay;