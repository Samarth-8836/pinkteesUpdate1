import React from 'react';
import './colorSize.styles.css';

import { connect } from 'react-redux';
import { addItem } from '../../redux/cart/cart.actions';

const ColorSize = (props) => {

    var colorChanged = false;
    var sizeChanged = false;
    
    
    const handleChangeColor = (event) => {
        console.log(event.target.value);
        colorChanged = true;
        Object.assign(props.product, {selectedColor: event.target.value});
    }

    const handleChangeSize = (event) => {
        console.log(event.target.value);
        sizeChanged = true;
        Object.assign(props.product, {selectedSize: event.target.value});
    }

    const handleOrderBtn = () => {
        if(!colorChanged) {
            Object.assign(props.product, {selectedColor: props.product.color[0]});
        }
        if(!sizeChanged) {
            Object.assign(props.product, {selectedSize: props.product.size[0]});
        }
        props.addItem(props.product);
    }

    return (
        <div className='colorSizeContainer'>
            <select name='color' className='colorSizeSelector' id='color' onChange={handleChangeColor}>
                {
                    props.product.color.map( (color) => {
                        return (
                            <option value={color} className='colorSizeSelector'>{color}</option>
                        );
                    })
                }
            </select>
            <select name='size' className='colorSizeSelector' id='size' onChange={handleChangeSize}>
                {
                    props.product.size.map( (size) => {
                        return (
                            <option value={size} className='colorSizeSelector'>{size}</option>
                        );
                    })
                }
            </select>
            <button className='orderNowBtn' onClick={ handleOrderBtn } >Add To Cart</button>
        </div>
    );
}

const mapDispatchToProps = dispatch => ({
    addItem : item => dispatch(addItem(item))
});

export default connect(null, mapDispatchToProps)(ColorSize);