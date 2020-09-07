import React from 'react';
import ProductDisplay from './product-display/producctDisplay.component';
import PriceItemDisplay from './price/priceItemDisplay.component';
import ColorSize from './color-size/colorSize.component';
import Description from './description/description.component';
import CustomerReviews from './customer-reviews/customerReviews.component';
import MoreLikeThis from './more-like-this/moreLikeThis.component';

const ProductPage = ({price, title, description, images}) => {
    return(
        <div>
            <ProductDisplay title={title} images={images} />
            <PriceItemDisplay price={price} />
            <ColorSize />
            <Description description={description} />
            <CustomerReviews />
            <MoreLikeThis />
        </div>
    );
}

export default ProductPage;