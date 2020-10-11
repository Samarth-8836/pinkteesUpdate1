import React from 'react';
import ProductDisplay from './product-display/producctDisplay.component';
import PriceItemDisplay from './price/priceItemDisplay.component';
import ColorSize from './color-size/colorSize.component';
import Description from './description/description.component';
import CustomerReviews from './customer-reviews/customerReviews.component';
import MoreLikeThis from './more-like-this/moreLikeThis.component';

import productListMen from '../productlist';
import productListWomen from '../productlistWomen';

const ProductPage = () => {

    function reverseString(str) {
        var splitString = str.split("");
     
        var reverseArray = splitString.reverse();
     
        var joinArray = reverseArray.join(""); 
        
        return joinArray; 
    }

    function spliceString(str, index) {
        var splitString = str.split("");
        
        splitString.splice(0, str.length - index);

        var joinArray = splitString.join("");

        return joinArray;
    }

    let windowURL = String(window.location.href);
    let windowURLreversed = reverseString(windowURL);
    let index = windowURLreversed.indexOf('/');
    windowURL = spliceString(windowURL, index);

    let productList = productListMen.concat(productListWomen);

    let productMain =  productList.filter((item) => {
        if(windowURL === String(item.id)) {
            return true;
        } else {
            return false;
        }
    });

    return(
        <div>
            <div className='flexForDisplay'>
                <ProductDisplay product={productMain[0]} />
                <PriceItemDisplay product={productMain[0]} />
            </div>
            <ColorSize product={productMain[0]} />    
            <Description product={productMain[0]} />
            
            <MoreLikeThis />
        </div>
    );
}

export default ProductPage;



// <CustomerReviews /> is left