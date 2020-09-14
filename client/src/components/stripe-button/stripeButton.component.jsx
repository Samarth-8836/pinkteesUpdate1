import React from 'react';
import StripeCheckout from 'react-stripe-checkout';
import axios from 'axios';

const StripeCheckoutButton = ({ price }) => {
    const priceForStripe = price * 100;
    const publishableKey = 'pk_test_51HR1pjJRC5XKHkMyI4McPnc77vJIXxY0d1ZDXvzjIfoNUz5cEQpVXdNat5T0zNdOTTRlHPy5oG3miMr3n3gTOIDJ00AsdC8ECr';

    const onToken = token => {
        axios({
            url: 'payment',
            method: 'post',
            data: {
                amount: priceForStripe,
                token: token
            }
        }).then(response => {
            alert('Payment Successful');
        }).catch(err => {
            console.log('Payment error: ', err);
            alert('There was an issue with your payment. Please make sure you use a valid credit card');
        });
    };

    return (
        <StripeCheckout 
            label='Pay Now'
            name='PinkTees'
            billingAddress
            shippingAddress
            image='../../assets/Logo.png'
            description={`Your total is Rs.${price}`}
            amount={priceForStripe}
            panelLabel='Pay Now'
            token={onToken}
            stripeKey={publishableKey}
            currency="INR"
            ComponentClass="div"
        >
            <button className='cartCheckout' onClick={ () => alert('Do not press back button for smooth experience') }>CHECKOUT</button>
        </StripeCheckout>
    );
}

export default StripeCheckoutButton;