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
        })
        .then(response => {
            alert('succesful payment');
        })
        .catch(error => {
            console.log('Payment Error: ', JSON.parse(error));
            alert(
            'There was an issue with your payment! Please make sure you use the provided credit card.'
            );
        });
    };

  return (
    <StripeCheckout
      label='Pay Now'
      name='CRWN Clothing Ltd.'
      billingAddress
      shippingAddress
      description={`Your total is Rs.${price}`}
      amount={priceForStripe}
      panelLabel='Pay Now'
      token={onToken}
      currency='INR'
      stripeKey={publishableKey}
    >
        <button className='cartCheckout' onClick={ () => alert('Do not press back button for smooth experience') }>CHECKOUT</button>
    </StripeCheckout>
  );
}

export default StripeCheckoutButton;