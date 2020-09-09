import React from 'react';
import './cartItem.styles.css';

import { connect } from 'react-redux';
import { updateItem } from '../../../redux/cart/cart.actions';

const CartItem = (props) => {
    const x = props.product.color.indexOf(props.product.selectedColor);

    const handleChangeSize = (event) => {
        Object.assign(props.product, {selectedSize: event.target.value});
        props.updateItem(props.product);
    };
    const handleChangeColor = (event) => {
        Object.assign(props.product, {selectedColor: event.target.value});
        props.updateItem(props.product);
    };


    return(
        <div class="box-wrapper">
                <div class="box-tall">
                    <div className='cartItemImage' style={{backgroundImage: `url(${props.product.imgUrl[x]})`}} />
                </div>
                <div class="box-left">
                    <div class="box-1">
                        <div className='cartItemTitle'>{props.product.title}</div>
                        <div className={'cartItemChangeSize'}>
                            <select name='size' className={'cartItemChangeSizeSelect'} id='size' onChange={handleChangeSize}>
                                {
                                    props.product.size.map( (size) => {
                                        return (
                                            <option value={size} className='XYZ' selected={ size===props.product.selectedSize }>{size}</option>
                                        );
                                    })
                                }
                            </select>
                        </div>
                        <select name='color' className='cartItemChangeSizeSelect' id='color' onChange={handleChangeColor}>
                            {
                                props.product.color.map( (color) => {
                                    return (
                                        <option value={color} className='XYZ' selected={ color===props.product.selectedColor } >{color}</option>
                                    );
                                })
                            }
                        </select>

                    </div>
                    <div class="box-2">
                        <div className='cartItemPrice'>{props.product.price}</div>
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
    updateItem : item => dispatch(updateItem(item))
});


export default connect(null, mapDispatchToProps)(CartItem);