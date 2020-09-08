import React from 'react';
import ProductDisplay from './product-display/producctDisplay.component';
import PriceItemDisplay from './price/priceItemDisplay.component';
import ColorSize from './color-size/colorSize.component';
import Description from './description/description.component';
import CustomerReviews from './customer-reviews/customerReviews.component';
import MoreLikeThis from './more-like-this/moreLikeThis.component';

const ProductPage = (props) => {
    return(
        <div>
            <ProductDisplay product={props.product} />
            <PriceItemDisplay product={props.product} />
            <ColorSize product={props.product} />    
            <Description product={props.product} />
            <CustomerReviews />
            <MoreLikeThis />
            </div>
    );
}

export default ProductPage;
