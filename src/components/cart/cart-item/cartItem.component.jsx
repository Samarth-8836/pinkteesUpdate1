import React from 'react';

import { connect } from 'react-redux';
import { addItem } from '../../../redux/cart/cart.actions';

const CartItem = (props) => {
    const x = props.product.color.indexOf(props.product.selectedColor);

    const handleChangeSize = (event) => {
        Object.assign(props.product, {selectedSize: event.target.value});
        props.addItem(props.product);
    };
    const handleChangeColor = (event) => {
        Object.assign(props.product, {selectedColor: event.target.value});
        props.addItem(props.product);
    };

    return(
        <div class="box-wrapper">
                <div class="box-tall">
                    <div className='cartItemImage' style={{backgroundImage: `url(${props.product.imgUrl[x]})`}} />
                </div>
                <div class="box-left">
                    <div class="box-1">
                        <div className='cartItemTitle'>{props.product.title}</div>
                        <div className='cartItemSize'>{props.product.selectedSize}</div> 
                        <div className='cartItemChangeSize'>
                            <select name='size' className='XYZ' id='size' onChange={handleChangeSize}>
                                {
                                    props.product.size.map( (size) => {
                                        return (
                                            <option value={size} className='XYZ'>{size}</option>
                                        );
                                    })
                                }
                            </select>
                        </div>
                        <div className='cartItemSize'>{props.product.selectedColor}</div>
                        <select name='color' className='XYZ' id='color' onChange={handleChangeColor}>
                            {
                                props.product.color.map( (color) => {
                                    return (
                                        <option value={color} className='XYZ'>{color}</option>
                                    );
                                })
                            }
                        </select>

                    </div>
                    <div class="box-2">
                        <div className='cartItemPrice'>Rs. {props.product.price}</div>
                        <img src={require('../../../assets/mini-icons/icon_love_filled_updated.png')} alt='Wishlist' style={{float: "right", margin: "5px 10px 10px 10px"}}/>
                        <button className='cartItemAddOne'>+</button>
                        <div className='cartItemQuantity'>{props.product.quantity}</div>
                        <button className='cartItemRemoveOne'>-</button>
                        <img src={require('../../../assets/mini-icons/icon_delete_outline_updated.png')} alt='Wishlist' className='cartItemRemove' />
                    </div>
                </div>
            </div>
    );
}


const mapDispatchToProps = dispatch => ({
    addItem : item => dispatch(addItem(item))
});


export default connect(null, mapDispatchToProps)(CartItem);