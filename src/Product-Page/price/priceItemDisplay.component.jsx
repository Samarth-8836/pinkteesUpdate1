import React from 'react';
import './priceItemDisplay.styles.css';

const PriceItemDisplay = (props) => {
    return (
        <div className='priceItemDisplay'>
            {props.price}
        </div>
    );
}

export default PriceItemDisplay;