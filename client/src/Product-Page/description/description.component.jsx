import React from 'react';
import './description.styles.css';

const Description = (props) => {
    return (
        <div className='descriptionConatiner'><br />
            <div className='descriptionTitle'>Description</div>
            <div className='descriptionContent'>{props.product.description}</div>
        </div>
    );
}

export default Description;