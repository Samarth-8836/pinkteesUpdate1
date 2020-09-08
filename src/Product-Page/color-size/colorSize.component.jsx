import React from 'react';
import './colorSize.styles.css';

import { connect } from 'react-redux';
import { addItem } from '../../redux/cart/cart.actions';

const ColorSize = (props) => {
    return (
        <div className='colorSizeContainer'>
            <button className='colorSizeSelector'>Colour</button>
            <button className='colorSizeSelector'>Size</button>
            <button className='orderNowBtn' onClick={ () => props.addItem(props.product) } >Add To Cart</button>
        </div>
    );
}

const mapDispatchToProps = dispatch => ({
    addItem : item => dispatch(addItem(item))
});

export default connect(null, mapDispatchToProps)(ColorSize);