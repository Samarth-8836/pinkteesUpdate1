import React from 'react';
import './cartItem.styles.css';

import { connect } from 'react-redux';
import { updateItem, clearItemFromCart, addItem, removeItem } from '../../../redux/cart/cart.actions';

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
        <div className="box-wrapper">
                <div className="box-tall">
                    <div className='cartItemImage' style={{backgroundImage: `url(${props.product.imgUrl[x]})`}} />
                </div>
                <div className="box-left">
                    <div className="box-1">
                        <div className='cartItemTitle'>{props.product.title}</div>
                        <div className={'cartItemChangeSize'}>
                            <select name='size' className={'cartItemChangeSizeSelect'} id='size' onChange={handleChangeSize}>
                                {
                                    props.product.size.map( (size) => {
                                        return (
                                            <option value={size} className='XYZ' selected={ size===props.product.selectedSize } key={size} >{size}</option>
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
                    <div className="box-2">
                        <div className='cartItemPrice'>{props.product.price}</div>
                        <img src={require('../../../assets/mini-icons/icon_love_filled_updated.png')} alt='Wishlist' style={{float: "right", margin: "5px 10px 10px 10px"}}/>
                        <div className='cartItemAddOne' onClick={() => props.addItem(props.product)}>&#10095;</div>
                        <div className='cartItemQuantity'>{props.product.quantity}</div>
                        <div className='cartItemRemoveOne' onClick={() => props.removeItem(props.product)}>&#10094;</div>
                        <img src={require('../../../assets/mini-icons/icon_delete_outline_updated.png')} alt='Wishlist' className='cartItemRemove'  onClick={() => props.clearItem(props.product)} />
                    </div>
                </div>
            </div>
    );
}


const mapDispatchToProps = dispatch => ({
    updateItem : item => dispatch(updateItem(item)),
    clearItem : item => dispatch(clearItemFromCart(item)),
    addItem: item => dispatch(addItem(item)),
    removeItem: item => dispatch(removeItem(item))
});


export default connect(null, mapDispatchToProps)(CartItem);