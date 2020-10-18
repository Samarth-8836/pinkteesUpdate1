import React from 'react';
import './displayItem.styles.css';
import { Link } from 'react-router-dom';

const DisplayItem = (props) => {
    const imgS = props.product.imgUrl[0];
    return(
        <div className='Display'>
            <div className='DisplayImage'>
                <Link className='linkClass' to={`/mens/${props.product.id}`}>
                    <img src={imgS} alt='Mens Catagory' className='DisplayImage' />
                </Link>
            </div>
            <div className='DisplayName'>
            <Link className='linkClass' to={`/mens/${props.product.id}`}>
                {props.product.title}
            </Link>
            </div>
        </div>
    );
}

export default DisplayItem;