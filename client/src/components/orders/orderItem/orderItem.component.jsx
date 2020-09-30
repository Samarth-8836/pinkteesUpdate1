import React from 'react';

const OrderItem = (props) => {
    const imgIndex = props.order.color.indexOf(props.order.selectedColor);
    const title = props.order.title;
    const size = props.order.selectedSize;
    const color = props.order.selectedColor;
    const price = props.order.price;
    const orderStatus = props.order.status;
    const quantity = props.order.quantity;
    return(
        <div className="box-wrapper">
                <div className="box-tall">
                    <div className='cartItemImage' style={{backgroundImage: `url(${props.order.imgUrl[imgIndex]})`}} />
                </div>
                <div className="box-left">
                    <div className="box-1">
                        <div className='cartItemTitle'>{title}</div>
                        <div className={'cartItemChangeSize'}>
                            {size}
                        </div>
                        {color}
                    </div>
                    <div className="box-2">
                        <div className='cartItemPrice'> &#8377; {price} x {quantity}</div>
                        <span style={{marginRight: '5px', float: 'right'}}>{orderStatus}</span>
                    </div>
                </div>
        </div>
    );
}

export default OrderItem;