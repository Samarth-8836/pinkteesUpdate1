import React from 'react';
import './review.styles.css';

const Review = (props) => {
    return (
        <div className='reviewUserContainer'>
            <div className='reviewUserTitle'>
                {props.username}
            </div>
            <div className='reviewUserRating'>
                5 Stars
            </div>
            <div className='reviewUserComment'>
                {props.content}
            </div>
        </div>
    );
}

export default Review;