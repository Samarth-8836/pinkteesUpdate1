import React from 'react';
import './description.styles.css';

const Description = (props) => {
    return (
        <div className='descriptionConatiner'>
            <div className='descriptionTitle'>Description</div>
            <div className='descriptionContent'>{props.description}</div>
        </div>
    );
}

export default Description;