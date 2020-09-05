import React from 'react';
import './customerReviews.styles.css';
import Review from './review/review.component';
import Slider from 'react-slick';

const CustomerReviews = () => {
    const settings = {
        dots: true,
        fade: true,
        infinite: true,
        speed: 200,
        slidesToShow: 2,
        slidesToScroll: 1,
        arrows: false,
        className: 'slides',
        autoplay: true,
        dotsClass: 'slick-dots'
    };
    const ReviewCollection = [
        {
            content: "Hello world this is a test.",
            username: "User"
        },
        {
            content: "Hello world this another test.",
            username: "Another User" 
        }
    ]

    return (
        <div>
            <div className='customerReviewsTitle'>
                Reviews
            </div>
            <div className='customerReviewsContainer'>
                <Slider {...settings} className='customerReviewsSlider'>
                    { ReviewCollection.map((k) => {
                        return (
                            <Review content={k.content} username={k.username} />
                        );
                    })}
                </Slider>
            </div>
        </div>
    );
}

export default CustomerReviews;